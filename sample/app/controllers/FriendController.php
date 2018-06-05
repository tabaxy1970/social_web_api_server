<?php

class FriendController extends ControllerBase {
	
	
	public function indexAction(){
	}
	
	
	/**
	 * フレンドコードでユーザーを検索
	 * @return type 'alphanum' fc フレンドコード
	 * @throws Exception フレンドコードが8文字ではない場合
	 */
	public function searchAction(){		
		if(($pp = $this->preprocess()) !== false) return $pp;
		
		$param = $this->validate(
			['fc','alphanum','']
		);
		if(strlen($param['fc']) != 8){
			throw new Exception('フレンドコードの長さが8文字ではありません');
		}
		$f = new FriendModel();
		$body = $f->serchFriendCode($param['fc']);
		DBModel::convNumeric($body,'name');
 		return $this->render($body);
	}

	/**
	 * フレンド申請
	 * @return type 'int' uid 申請先ユーザーID
	 * @throws Exception
	 */
	public function requestAction(){
		if(($pp = $this->preprocess()) !== false) return $pp;
		$ca = $this->getCA();
		$param = $this->validate(
			['uid','int',0]
		);
		if($param['uid'] == 0){
			throw new Exception('フレンドuidがありません');
		}
		$f = new FriendModel();
		$this->startTransaction();
		try{
			$result = $f->requestFriend($ca['id'],$param['uid']);
		}catch(Exception $e){
			$this->rollBack();
			$this->close();
			throw new Exception($e->getMessage());
		}
		if($result === false){
			$this->rollBack();
			$this->close();
			return $this->render(null,ERR_FRIEND_REQUEST_EID,ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);		//エラーを返す
		}
		$this->commit();
		$this->close();

		$body['result'] = true;
		return $this->render($body);
	}

	/**
	 * フレンド登録
	 * @return type 'int' uid 登録したいユーザーID
	 * @throws Exception
	 */
	public function registAction(){
		if(($pp = $this->preprocess()) !== false) return $pp;
		$ca = $this->getCA();
		$param = $this->validate(
			['uid','int',0]
		);
		if($param['uid'] == 0){
			throw new Exception('フレンドuidがありません');
		}
		$f = new FriendModel();
		$this->startTransaction();
		try{
			$result = $f->registFriend($ca['id'],$ca['shard'],$param['uid']);
		}catch(Exception $e){
			$this->rollBack();
			$this->close();
			throw new Exception($e->getMessage());
		}
		if($result === false){
			$this->rollBack();
			$this->close();
			return $this->render(null,ERR_FRIEND_REGIST_EID,ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);		//エラーを返す
		}
		$this->commit();
		$this->close();
		$body['result'] = true;
		return $this->render($body);
		
	}

	/**
	 * フレンド削除
	 * @return type 'int' uid 削除したいユーザーID
	 * @throws Exception
	 */
	public function removeAction(){
		if(($pp = $this->preprocess()) !== false) return $pp;
		$ca = $this->getCA();
		$param = $this->validate(
			['uid','int',0]
		);
		if($param['uid'] == 0){
			throw new Exception('フレンドuidがありません');
		}
		$f = new FriendModel();
		$this->startTransaction();
		try{
			$result = $f->removeFriend($ca['id'],$ca['shard'],$param['uid']);
		}catch(Exception $e){
			$this->rollBack();
			$this->close();
			throw new Exception($e->getMessage());
		}
		if($result === false){
			$this->rollBack();
			$this->close();
			return $this->render(null,ERR_FRIEND_REMOVE_EID,ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);		//エラーを返す
		}
		$this->commit();
		$this->close();
		$body['result'] = true;
		return $this->render($body);
	}

	/**
	 * ブラックリスト登録
	 * @return type 'int' uid 登録したいユーザーID
	 * @throws Exception
	 */
	public function blackAction(){
		if(($pp = $this->preprocess()) !== false) return $pp;
		$ca = $this->getCA();
		$param = $this->validate(
			['uid','int',0]
		);
		if($param['uid'] == 0){
			throw new Exception('フレンドuidがありません');
		}
		$f = new FriendModel();
		$this->startTransaction();
		try{
			$result = $f->blackFriend($ca['id'],$ca['shard'],$param['uid']);
		}catch(Exception $e){
			$this->rollBack();
			$this->close();
			throw new Exception($e->getMessage());
		}
		if($result === false){
			$this->rollBack();
			$this->close();
			return $this->render(null,ERR_FRIEND_BLACK_EID,ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);		//エラーを返す
		}
		$this->commit();
		$this->close();
		$body['result'] = true;
		return $this->render($body);
	}

	/**
	 * ブラックリストから解除
	 * @return type 'int' uid 解除したいユーザーID
	 * @throws Exception
	 */
	public function whiteAction(){
		if(($pp = $this->preprocess()) !== false) return $pp;
		$ca = $this->getCa();
		$param = $this->validate(
			['uid','int',0]
		);
		if($param['uid'] == 0){
			throw new Exception('フレンドuidがありません');
		}
		$f = new FriendModel();
		$this->startTransaction();
		try{
			$result = $f->whiteFriend($ca['id'],$ca['shard'],$param['uid']);
		}catch(Exception $e){
			$this->rollBack();
			$this->close();
			throw new Exception($e->getMessage());
		}
		if($result === false){
			$this->rollBack();
			$this->close();
			return $this->render(null,ERR_FRIEND_WHITE_EID,ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);		//エラーを返す
		}
		$this->commit();
		$this->close();
		$body['result'] = true;
		return $this->render($body);
	}

	/**
	 * フレンド申請リスト取得
	 * @return type
	 */
	public function getRequestAction(){
		if(($pp = $this->preprocess(false)) !== false) return $pp;
		$ca = $this->getCA();
		$f = new FriendModel();
		$body['request'] = $f->getFriendRequest($ca['id'],$ca['shard']);
		DBModel::convNumeric($body['request'],'name');
		$this->close();
		return $this->render($body);
	}

	/**
	 * フレンド申請中リスト取得
	 * @return type
	 */
	public function getRequestingAction(){
		if(($pp = $this->preprocess(false)) !== false) return $pp;
		$ca = $this->getCA();
		$f = new FriendModel();
		$body['request'] = $f->getFriendRequesting($ca['id']);
		DBModel::convNumeric($body['request'],'name');
		$this->close();
		return $this->render($body);
	}

	/**
	 * フレンドリスト取得
	 * @return type
	 */
	public function getFriendAction(){
		if(($pp = $this->preprocess(false)) !== false) return $pp;
		$ca = $this->getCA();
		$f = new FriendModel();
		$body['friend'] = $f->getFriendList($ca['id'],$ca['shard']);
		DBModel::convNumeric($body['friend'],'name');
		$this->close();
		return $this->render($body);
	}

	/**
	 * ブラックリスト取得
	 * @return type
	 */
	public function getBlackAction(){
		if(($pp = $this->preprocess(false)) !== false) return $pp;
		$ca = $this->getCA();
		$f = new FriendModel();
		$body['black'] = $f->getBlackList($ca['id'],$ca['shard']);
		DBModel::convNumeric($body['black'],'name');
		$this->close();
		return $this->render($body);
	}
}

