<?php

/**
 * Description of DBModel
 *
 * @author taba
 */
class DBModel{
	private $db = null;
	private $mc = null;
	private $lq = '';
	private $first_mode = true;
	

	/**
	 * データベースをハンドラーから取得し使用可能にする
	 * @param type $dbname	DBカテゴリ 'master' / 'slave' / 'shard' / 'log'
	 * @param type $cache	memcachedでクエリをキャッシュする(true)省略時はキャッシュしない。シャード指定するとキャッシュ無効
	 * @param type $shard	シャード番号('shard' / 'log'のみ有効)
	 */
	function __construct($dbname,$cache = false,$shard = -1) {
		$this->db = Phalcon\Di::getDefault()->get('dbhandler')->getHandler($dbname,$shard);
		if($cache && $shard < 0){
			$this->mc = Phalcon\Di::getDefault()->get('cachehandler')->getHandler('master');
		}
	}
	
	/**
	 * 文字列数値を数値に変換しないで高速化
	 * @param type $bool true:高速モード(デフォルト) false:通常モード
	 */
	public function firstMode($bool){
		$this->first_mode = $bool;
	}

	/**
	 * 数値だけの文字列を全て数値にするが、指定のカラムは文字列を維持する
	 * @param type $data
	 * @param type $list 'name','discription' のようにカラムリストを指定も可能
	 */
	public static function convNumeric(&$data,...$list){
		$data = Utils\Numeric::convert($data,$list);
	}
	
	/**
	 * パラメータクエリの生成
	 * @param type $sql		WHERE hoge = :hoge のSQL文字列
	 * @param type $marker	マーカ文字列
	 * @param type $value	置き換える文字列
	 */
	private function bindParam($sql,$marker,$value){
		if(is_string($value)){
			$esc_value = "'".$this->db->real_escape_string($value)."'";
		}else{
			$esc_value = $value;
		}
		return str_replace($marker,$esc_value,$sql);
	}
	
	/**
	 * クエリ生成
	 * @param type $query	SQLクエリ
	 * @param type $params	パラメータ
	 * @throws Exception	可変長パラメータに2配列必要
	 * @return パラメータが埋め込まれたあとのSQLクエリ
	 */
	private function queryGen($query,$params){
		foreach($params as $param){
			if(is_array($param) && sizeof($param) == 2){
				$query = $this->bindParam($query,$param[0],$param[1]);
			}else{
				throw new Exception('Two parameters are required :'. is_array($param) ? $param[0] : $param);
			}
		}
		return $query;
	}

	/**
	 * UPDATE INSERT DELETE の実行専用（返り値は影響した行数）
	 * @param type $query	SQLクエリ
	 * @param type $params	可変長パラメータ [$uid,$type,$name]
	 * @throws Exception	可変長パラメータに2配列必要
	 * @retuen 影響を受けた行数
	 * @attention X-Debugでトレースすると affected_rows が常に -1になるのでトレースは避けてください。
	 */
	public function query($query,...$params){
		$this->lq = $this->queryGen($query,$params);
		if($this->db->query($this->lq) === false){
			throw new Exception('SQL error :'.$this->db->error.'('.$this->db->errno.')['.$this->lq.']');
		}
		return $this->db->affected_rows;
	}
	
	/**
	 * PKがAUTO INCREMENTのテーブルへのラストインサートIDを返す
	 * @return type			ラストインサートID
	 * @throws Exception	initが呼ばれていない。
	 */
	public function lastInsertID(){
		return $this->db->insert_id;
	}
	
	/**
	 * 最後に実行したSQLを返す
	 * @return type
	 */
	public function getLastQuery(){
		return $this->lq;
	}
	
	/**
	 * 単一行のSELECT専用（多行取得しても先頭のみ取得）
	 * @param type $query	SQLクエリ
	 * @param type $params	可変長パラメータ [':uid',$uid],[':type',$type]
	 * @throws Exception	可変長パラメータに2配列必要
	 */
	public function select($query,...$params){
		$this->lq = $this->queryGen($query,$params);
		$mcKey = "";
		if($this->mc){
			$mcKey = 'select_'.sha1($this->lq.$this->first_mode);
			$ret = $this->mc->get($mcKey);
			if($ret !== false){
				return $ret;
			}
		}
		$result = $this->db->query($this->lq);
		if($result === false){
			throw new Exception('SQL error :'.$this->db->error.'('.$this->db->errno.')['.$this->lq.']');
		}
		$ret = $result->fetch_assoc();
		if(!$this->first_mode){
			$col = [];
			$info = $result->fetch_fields();
			foreach($info as $i){
				switch($i->type){
					case MYSQLI_TYPE_TIMESTAMP:
					case MYSQLI_TYPE_DATE:
					case MYSQLI_TYPE_TIME:
					case MYSQLI_TYPE_DATETIME:
					case MYSQLI_TYPE_NEWDATE:
					case MYSQLI_TYPE_INTERVAL:
					case MYSQLI_TYPE_SET:
					case MYSQLI_TYPE_VAR_STRING:
					case MYSQLI_TYPE_STRING:
//					case MYSQLI_TYPE_CHAR:			なぜか TINTINT : 1 とかぶる
						$col[] = $i->name;
						break;
				}
			}
			if(sizeof($col) == 0){
				$ret = Utils\Numeric::convert($ret);
			}else{
				$ret = Utils\Numeric::convert($ret,$col);
			}
		}
		if($this->mc){
			$this->mc->set($mcKey,$ret);
		}
		$result->close();
		return $ret;
	}
	
	/**
	 * 複数行のSELECT専用
	 * @param type $query	SQLクエリ
	 * @param type $params	可変長パラメータ [':uid',$uid],[':type',$type]
	 * @throws Exception	可変長パラメータに2配列必要
	 */
	public function selectAll($query,...$params){
		$this->lq = $this->queryGen($query,$params);
		$mcKey = '';
		if($this->mc){
			$mcKey = 'selectAll_'.sha1($this->lq.$this->first_mode);
			$ret = $this->mc->get($mcKey);
			if($ret !== false){
				return $ret;
			}
		}
		$result = $this->db->query($this->lq,MYSQLI_USE_RESULT);
		if($result === false){
			throw new Exception('SQL error :'.$this->db->error.'('.$this->db->errno.')['.$this->lq.']');
		}
		$ret = $result->fetch_all(MYSQLI_ASSOC);
		if(!$this->first_mode){
			$col = [];
			$info = $result->fetch_fields();
			foreach($info as $i){
				switch($i->type){
					case MYSQLI_TYPE_TIMESTAMP:
					case MYSQLI_TYPE_DATE:
					case MYSQLI_TYPE_TIME:
					case MYSQLI_TYPE_DATETIME:
					case MYSQLI_TYPE_NEWDATE:
					case MYSQLI_TYPE_INTERVAL:
					case MYSQLI_TYPE_SET:
					case MYSQLI_TYPE_VAR_STRING:
					case MYSQLI_TYPE_STRING:
//					case MYSQLI_TYPE_CHAR:			なぜか TINTINT : 1 とかぶる
					case MYSQLI_TYPE_GEOMETRY:
						$col[] = $i->name;
						break;
				}
			}
			if(sizeof($col) == 0){
				$ret = Utils\Numeric::convert($ret);
			}else{
				$ret = Utils\Numeric::convert($ret,$col);
			}
		}
		if($this->mc){
			$this->mc->set($mcKey,$ret);
		}
		$result->close();
		return $ret;
	}
}
