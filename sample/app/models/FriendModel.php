<?php

use Phalcon\Mvc\Model;

/**
 * Description of FriendModel
 *
 * @author taba
 */
class FriendModel extends Model{
				//		1234567890123456789012345678
	private $fc_char = '123456789ABCEFGHJKLMNPRTUWXY';
	private $exor = 0x8874fb78f;
	
	/**
	 * ユーザーIDからフレンドコードを得る
	 * @param type $uid	ユーザーID
	 * @return type		フレンドコード
	 * @throws Exception　ユーザーIDが28^8を超える数値で例外
	 */
	public function getFriendCode($uid){
		$base = strlen($this->fc_char);
		$h = $uid & 0xff00000000;
		$m = $uid & 0x00ffff0000;
		$l = $uid & 0x000000ffff;
		$uid = $h | $m>>16 | $l<<16;
		$uid = $uid ^ $this->exor;
		$fc = '';
		for($cnt = 0;$cnt < 8;$cnt++){
			$m = $uid % $base;
			$fc .= substr($this->fc_char,$m,1);
			$uid = floor($uid / $base);
		}
		if($uid != 0){
			throw new Exception('friend code over flow '.$uid);
		}
		return $fc;
	}

	/**
	 * フレンドコードからユーザーIDを得る
	 * @param type $fc		フレンドコード（8文字）
	 * @return type			ユーザーID(false:フレンドコード指定文字以外が混入/8文字ではない)
	 */
	public function getUid($fc){
		$base = strlen($this->fc_char);
		if(strlen($fc) != 8) return false;
		$uid = 0;
		for($cnt = 0;$cnt < 8;$cnt++){
			$c = substr($fc,7-$cnt,1);
			$p = strpos($this->fc_char,$c);
			if($p === false) return false;
			$uid *= $base;
			$uid += $p;
		}
		$uid ^= $this->exor;
		$h = $uid & 0xff00000000;
		$m = $uid & 0x00ffff0000;
		$l = $uid & 0x000000ffff;
		$uid = $h | $m>>16 | $l<<16;
		return $uid;
	}

	/**
	 * フレンドコードをサーチ
	 * @param type $fc	フレンドコード
	 * @return boolean	結果
	 */
	public function serchFriendCode($fc){
		$rds = $this->di->get('redishandler')->getHandler('master',REDIS_DB_FRIEND_CODE);
		$uid = $rds->get($fc);
		$srd = new ShardModel();
		if($uid == null){
			$dbs = $srd->getAllShardDB();
			foreach($dbs as $name){
				$usr = new DBModel($name);
				$ret = $usr->select('SELECT id,name FROM usr_data WHERE friend_code = :fc',[':fc',$fc]);
				if($ret != null){
					$rds->set($fc,$ret['id']);
					return $ret;
				}
			}
		}else{
			$usr = new DBModel('shard',false,$srd->getShard($uid));
			$ret = $usr->select('SELECT id,name FROM usr_data WHERE id = :id',[':id',$uid]);
			if($ret != null){
				return $ret;
			}
		}
		return false;	
	}	
	
	/**
	 * フレンド申請
	 * @param type $uid			申請者ユーザーID
	 * @param type $req_uid		リクエスト先ユーザーID
	 */
	public function requestFriend($uid,$req_uid){
		$srd = new ShardModel();
		$usr = new DBModel('shard',false,$srd->getShard($req_uid));
		$cnt = $usr->query('INSERT INTO usr_friend_request(user_id,request_uid,request_tm) VALUES(:uid,:rid,NOW()) ON DUPLICATE KEY UPDATE valid = 1,request_tm = NOW()',[':uid',$req_uid],[':rid',$uid]);
		return ($cnt == 1) ? true:false;
	}



	/**
	 * フレンド申請解除
	 * @param type $uid			申請者ユーザーID
	 * @param type $req_uid		リクエスト先ユーザーID
	 */
	public function cancelRequest($uid,$req_uid){
		$srd = new ShardModel();
		$usr = new DBModel('shard',false,$srd->getShard($req_uid));
		$cnt = $usr->query('UPDATE usr_friend_request SET valid = 0 WHERE user_id = :uid AND request_uid = :rid',['uid:',$req_uid],[':rid',$uid]);
		return ($cnt == 1) ? true:false;
	}

	
	/**
	 * フレンド登録
	 * @param type $uid			承認者ユーザーID
	 * @param type $shard		承認者ユーザーシャードIDX
	 * @param type $req_uid		申請者ユーザーID
	 */
	public function registFriend($uid,$shard,$req_uid){
		$usr = new DBModel('shard',false,$shard);
		$ret = $usr->select('SELECT COUNT(user_id) AS cnt FROM usr_friend_request WHERE user_id = :uid AND request_uid = :rid AND valid = 1',[':uid',$uid],[':rid',$req_uid]);
		if($ret['cnt'] > 0){
			$srd = new ShardModel();
			$usr2 = new DBModel('shard',false,$srd->getShard($req_uid));
			$ud = $usr->select("SELECT name FROM usr_data WHERE id = :id",[':id',$uid]);
			if($ud == null){
				throw new Exception('登録者のUIDがみつかりません:'.$uid);
			}
			$ud2 = $usr2->select("SELECT name FROM usr_data WHERE id = :id",[':id',$req_uid]);
			if($ud2 == null){
				throw new Exception('申請者のUIDがみつかりません:'.$req_uid);
			}
			$cnt = $usr2->query('INSERT INTO usr_friend(user_id,friend_uid,name,create_tm) VALUES(:uid,:fuid,:name,NOW()) ON DUPLICATE KEY UPDATE valid = 1,create_tm = NOW()',[':uid',$req_uid],[':fuid',$uid],[':name',$ud['name']]);
			if($cnt == 0){
				throw new Exception('申請者のフレンド更新に失敗:'.$req_uid);
			}
			$cnt = $usr->query('INSERT INTO usr_friend(user_id,friend_uid,name,create_tm) VALUES(:uid,:fuid,:name,NOW()) ON DUPLICATE KEY UPDATE valid = 1,create_tm = NOW()',[':uid',$uid],[':fuid',$req_uid],[':name',$ud2['name']]);
			if($cnt == 0){
				throw new Exception('登録者のフレンド更新に失敗:'.$uid);
			}
			$usr->query('UPDATE usr_friend_request SET valid = 0 WHERE user_id = :uid AND request_uid = :rid',[':uid',$uid],[':rid',$req_uid]);
		}else{
			throw new Exception('フレンドリクエストがみつかりません uid:'.$uid.' req_uid:'.$req_uid);
		}
	}
	
	/**
	 * 名前を更新
	 * @param type $uid		更新したいユーザーID
	 * @param type $name	新しい名前
	 */
	public function updateName($uid,$name){
		$dbs = $srd->getAllShardDB();
		foreach($dbs as $db){
			$usr = new DBModel($db);
			$usr->query('UPDATE usr_friend SET name = :name WHERE friend_uid = :uid',[':name',$name],[':uid',$uid]);
		}
	}
	
	/**
	 * フレンド削除
	 * @param type $uid			ユーザーID
	 * @param type $shard		ユーザーシャードIDX
	 * @param type $fuid		フレンドユーザーID
	 * @return bool 成功失敗
	 */
	public function removeFriend($uid,$shard,$fuid){
		$srd = new ShardModel();
		$usr = new DBModel('shard',false,$shard);
		$usr2 = new DBModel('shard',false,$srd->getShard($fuid));
		$cnt = $usr2->query('UPDATE usr_friend SET valid = 0 WHERE user_id = :uid AND friend_uid = :fuid',[':uid',$fuid],[':fuid',$uid]);
		$cnt += $usr->query('UPDATE usr_friend SET valid = 0 WHERE user_id = :uid AND friend_uid = :fuid',[':uid',$uid],[':fuid',$fuid]);
		return ($cnt == 2) ? true:false;
	}

	/**
	 * フレンドブラックリスト登録
	 * @param type $uid			ユーザーID
	 * @param type $shard		ユーザーシャードIDX
	 * @param type $fuid		フレンドユーザーID
	 * @return bool 成功失敗
	 */
	public function blackFriend($uid,$shard,$fuid){
		$usr = new DBModel('shard',false,$shard);
		$cnt = $usr->query('UPDATE usr_friend SET black = 1 WHERE user_id = :uid AND friend_uid = :fuid AND valid = 1',[':uid',$uid],[':fuid',$fuid]);
		return ($cnt == 1) ? true:false;
	}

	/**
	 * フレンドブラックリスト登録解除
	 * @param type $uid			ユーザーID
	 * @param type $shard		ユーザーシャードIDX
	 * @param type $fuid		フレンドユーザーID
	 */
	public function whiteFriend($uid,$shard,$fuid){
		$usr = new DBModel('shard',false,$shard);
		$cnt = $usr->query('UPDATE usr_friend SET black = 0 WHERE user_id = :uid AND friend_uid = :fuid',[':uid',$uid],[':fuid',$fuid]);
		return ($cnt == 1) ? true:false;
	}
	
	/**
	 * フレンド申請取得
	 * @param type $uid			ユーザーID
	 * @param type $shard		ユーザーシャードIDX
	 * @return type
	 */
	public function getFriendRequest($uid,$shard){
		$usr = new DBModel('shard',false,$shard);
		return $usr->selectAll('SELECT * FROM usr_friend_request WHERE user_id = :uid AND valid = 1',[':uid',$uid]);
	}

	/**
	 * フレンド申請中取得
	 * @param type $uid			ユーザーID
	 * @return type
	 */
	public function getFriendRequesting($uid){
		$srd = new ShardModel();
		$dbs = $srd->getAllShardDB();
		$list = [];
		foreach($dbs as $db){
			$usr = new DBModel($db);
			$tmp = $usr->selectAll('SELECT fr.*,ud.name FROM usr_friend_request AS fr,usr_data AS ud WHERE fr.user_id = ud.id AND fr.request_uid = :uid AND fr.valid = 1',[':uid',$uid]);
			if($tmp != null){
				$list = array_merge($list,$tmp);
			}
		}
		if(sizeof($list) == 0) return null;
		return $list;
	}

	/**
	 * フレンドリスト取得
	 * @param type $uid			ユーザーID
	 * @param type $shard		ユーザーシャードIDX
	 * @return type
	 */
	public function getFriendList($uid,$shard){
		$usr = new DBModel('shard',false,$shard);
		return $usr->selectAll('SELECT * FROM usr_friend WHERE user_id = :uid AND valid = 1',[':uid',$uid]);
	}
	
	/**
	 * ブラックリスト取得
	 * @param type $uid			ユーザーID
	 * @param type $shard		ユーザーシャードIDX
	 * @return type
	 */
	public function getBlackList($uid,$shard){
		$usr = new DBModel('shard',false,$shard);
		return $usr->selectAll('SELECT * FROM usr_friend WHERE user_id = :uid AND black = 1',[':uid',$uid]);
	}

	
}
