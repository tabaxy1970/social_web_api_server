<?php

use Phalcon\Filter;
use Phalcon\Mvc\Controller;

class ControllerBase extends Controller {
	private $reqid = 0;
	private $uuid = '';
	private $ca = null;

	
	/**
	 * 初期化
	 */
	public function initialize(){
		$this->view->disable();			// viewの無効化
	}


	/**
	 * IP文字列からバイナリに変換(リトルエンディアン)
	 * @param type $ip
	 * @return type
	 */
	private function ip2bin($ip){
		$octet = explode('.',$ip);
		return ((int)$octet[3] << 24) + ((int)$octet[2] << 16) + ((int)$octet[1] << 8) + (int)$octet[0];
	}


	/**
	 * メンテ中か
	 * @return false:通常 true:メンテ中
	 */
	protected function isMainte(){
		if($this->di->get('mainte')->valid === false){
			return false;
		}
		if($this->di->get('mainte')->ip_through === false){
			return true;
		}
		$remote = $this->ip2bin($this->request->getClientAddress('HTTP_X_FORWARDED_FOR'));
		$ips = Phalcon\Di::getDefault()->get('mainte')->ip_list;
		foreach($ips as $raw){
			if(strpos($raw,'/') === false){
				$ip = $this->ip2bin($raw);
				$mask = 0xffffffff;
			}else{
				$tmp = explode('/',$raw);
				$mask = pow(2,$tmp[1]) -1;
				$ip = $this->ip2bin($tmp[0]);
			}
			if($ip == ($remote & $mask)){
				return false;				// IP存在
			}
		}
		return true;
	}
	
	/**
	 * メンテナンス、セッション、オプションでリクエストキャッシュをセットで行う。
	 * @param type $isRC	falseでリクエストキャッシュ無効
	 * @return boolean		falseで通常処理開始
	 */
	protected function preprocess($isRC = true){
		if($this->isMainte()) return $this->maintenance();
		if($this->checkSession() === false) return $this->sessionTimeOut();
		if($isRC) return false;
		$rc = $this->requestCache($this->ca);
		if($rc !== null) return $rc;
		return false;
	}

	
	/**
	 * msgpackで送信されてきているか
	 * Content-Type: application/msgpack
	 * になっていればtrue
	 */
	private function isPacked(){
		$ct = $this->request->getContentType();
		if($ct === CT_MSGPACK) return true;
		return false;
	}
	
	/**
	 * セッションが有効かチェック
	 * @return type		true:有効なセッション false:無効なセッション
	 */
	protected function checkSession(){
		$sid = $this->request->getQuery('sid',null,'');
		if(strlen($sid) == 0 && getenv('PHALCON_ENV') === 'local' && $this->cookies->has('PHALCON_COOKIE')){
			$sid = $this->cookies->get('PHALCON_COOKIE')->getValue();
		}
		$mc = $this->di->get('cachehandler')->getHandler('session');
		$this->ca = $mc->get($sid);
		return ($this->ca == null) ? false : true;
	}
	
	/**
	 * キャッシュ認証情報を取得する
	 * @return type	認証情報
	 */
	protected function getCA(){
		return $this->ca;
	}
	
	/**
	 * セッションIDを生成する
	 * @param type $ca	ログイン情報
	 * @return type		セッションID
	 */
	protected function generateSession($ca){
		$mc = $this->di->get('cachehandler')->getHandler('session');
		$oldsid = $mc->get(UID_TO_SID.$ca['id']);
		if($oldsid != null){
			$mc->delete($oldsid);	// 古いセッション情報を消去
		}
		$sid = sha1($ca['id'].microtime());
		$mc->set($sid,$ca,time()+86400);		// 内容は圧縮せず、キーの寿命は1日
		$mc->set(UID_TO_SID.$ca['id'],$sid,time()+86400);
		if(getenv('PHALCON_ENV') === 'local'){		// ローカル時だけWebデバッグできるようにクッキーにセッションIDを埋め込む
			$this->cookies->set('PHALCON_COOKIE',$sid,0);
		}
		return $sid;
	}
	
	/**
	 * 連想配列からWebはJSON(localのみ)、Unityはmsgpackを生成
	 * @param type $body			連想配列
	 * @param type $error_code		エラーコード（省略可能）
	 * @param type $error_msg		エラーメッセージ（省略可能）
	 * @param type $after_action	エラー後の処理(省略可能、例 0:タイトルに戻る 1:リトライする 2:特定の遷移をするなど。)
	 * @return type コンテンツ
	 */
	protected function render($body,$error_code = 0,$error_msg = '',$after_action = 0){
		if($error_code == 0){
			$result['result'] = true;
			$result['body'] = $body;
		}else{
			$result['result'] = false;
			$result['error_msg'] = $error_msg;
			$result['error_code'] = $error_code;
			$result['after_action'] = $after_action;
		}
		if(getenv('PHALCON_ENV') === 'local' && !$this->isPacked()){
			$content = json_encode($result);
		}else{
			$content = msgpack_pack($result);
		}
		if($this->reqid != 0 && $error_code == 0){
			$key = sha1($this->uuid.'_'.$this->reqid);
			$mc = $this->di->get('cachehandler')->getHandler('request');
			$mc->set($key,$content,time()+60);			// リクエストキャッシュは60秒
		}
		return $this->response->setContent($content);
	}
	
	/**
	 * セッション切れのレンダリング(色々な箇所で呼び出されるのでメソッド化)
	 * @return type	コンテンツ
	 */
	protected function sessionTimeOut(){
		return $this->render(null,ERR_SESSION_TIME_OUT_EID,ERR_SESSION_TIME_OUT_MSG,ERR_AFTER_GOTO_TITLE);
	}

	/**
	 * メンテナンスのレンダリング(色々な箇所で呼び出されるのでメソッド化)
	 * @return type	コンテンツ
	 */
	protected function maintenance(){
		return $this->render(null,ERR_MAINTENANCE_EID,$this->di->get('mainte')->message,ERR_AFTER_GOTO_TITLE);
	}
	
	/**
	 * リクエストキャッシュがあればそちらを結果として返却
	 * @param type $ca
	 * @return type
	 */
	protected function requestCache($ca){
		$this->reqid = $this->request->getQuery('request_id',null,0);
		if($this->reqid != 0){
			$this->uuid = $ca['uuid'];
			$key = sha1($this->uuid.'_'.$this->reqid);
			$mc = $this->di->get('cachehandler')->getHandler('request');
			$body = $mc->get($key);
			if($body != null){
				return $this->response->setContent($body);
			}
		}
		return null;
	}
	
	/**
	 * トランザクション開始
	 */
	protected function startTransaction(){
		$this->di->get('dbhandler')->startTransaction();
	}

	/**
	 * ロールバック
	 */
	protected function rollBack(){
		$this->di->get('dbhandler')->rollBack();
	}

	/**
	 * コミット
	 */
	protected function commit(){
		$this->di->get('dbhandler')->commit();
	}

	/**
	 * クローズ
	 */
	protected function close(){
		$this->di->get('dbhandler')->close();
	}
	
	
	/**
	 * リクエストパラメータを検証して取得
	 * @param type $params(可変引数) メソッド名とフィルタ名　 ['uuid','string'],['name',['alphanum','trim'],'no name']
	 * ----------------------------------------------------------------------------------------
	 * string		Strip tags and encode HTML entities, including single and double quotes.
	 * email		Remove all characters except letters, digits and !#$%&*+-/=?^_`{|}~@.[].
	 * int			Remove all characters except digits, plus and minus sign.
	 * float		Remove all characters except digits, dot, plus and minus sign.
	 * alphanum		Remove all characters except [a-zA-Z0-9]
	 * striptags	Applies the strip_tags function
	 * trim			Applies the trim function
	 * lower		Applies the strtolower function
	 * upper		Applies the strtoupper function
	 * ----------------------------------------------------------------------------------------
	 * @return type 検証されたリクエストパラメータ連想配列
	 */
	protected function validate(...$params){
		$ret = [];
		if(getenv('PHALCON_ENV') === 'local' && !$this->isPacked()){
			foreach($params AS $param){
				$raw = $this->request->get($param[0]);
				switch(sizeof($param)){
					case 2:
						$ret[$param[0]] = $this->request->get($param[0],$param[1]);
						break;
					case 3:
						$ret[$param[0]] = $this->request->get($param[0],$param[1],$param[2]);
						break;
					default:
						throw new Exception('validate param error');
				}
				if(strlen($ret[$param[0]]) != strlen($raw) && strlen($raw) > 0){
					throw new Exception('validation error name:"'.$param[0].'" validate:"'.$param[1].'" data:"'.$raw.'"->"'.$ret[$param[0]].'"');
				}
			}
		}else{
			$filter = new Filter();
			$rowData = file_get_contents("php://input");
			$p = msgpack_unpack($rowData);
			foreach($params AS $param){
				if(isset($p[$param[0]])){
					$ret[$param[0]] = $filter->sanitize($p[$param[0]],$param[1]);
					if(strlen($ret[$param[0]]) != strlen($p[$param[0]]) && strlen($p[$param[0]]) > 0){
						throw new Exception('validation error name:"'.$param[0].'" validate:"'.$param[1].'" data:"'.$p[$param[0]].'"->"'.$ret[$param[0]].'"');
					}
				}else{
					if(sizeof($param) == 3){
						$ret[$param[0]] = $param[2];
					}
				}
			}
		}
		return $ret;
	}
	
}

