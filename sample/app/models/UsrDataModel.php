<?php

use Phalcon\Mvc\Model;

/**
 * Description of UsrDataModel
 *
 * @author taba
 */
class UsrDataModel extends Model{
	

	/**
	 * ユーザーデータ作成
	 * @param type $uid		ユーザーID
	 * @param type $shard	シャードIDX
	 */
	public function createUsrData($uid,$shard){
		$f = new FriendModel();
		$fc = $f->getFriendCode($uid);
		$rds = $this->di->get('redishandler')->getHandler('master',REDIS_DB_FRIEND_CODE);
		$rds->set($fc,$uid);
		$usr = new DBModel('shard',false,$shard);
		$usr->query('INSERT INTO usr_data(id,friend_code,create_tm,last_login_tm) VALUE(:id,:fc,NOW(),NOW())',[':id',$uid],[':fc',$fc]);
	}	

	/**
	 * ログインカウント
	 * @param type $uid		ユーザーID
	 * @param type $shard	シャードIDX
	 */
	public function updateLogin($uid,$shard){
		$usr = new DBModel('shard',false,$shard);
		$usr->query('UPDATE usr_data SET last_login_tm = NOW(),login_num = login_num +1 WHERE id = :id AND date(last_login_tm) != date(NOW())',[':id',$uid]);
	}	
	

	public function loginBonusExec($uid,$shard){
		$usr = new dvModel('shard',false,$shard);
		$mst = new DBModel('slave',true);
		$ud = $usr->select('SELECT login_bonus_num FROM usr_data WHERE id = :id AND DATE(last_login_bonus_tm) < DATE(NOW())',[':id',$uid]);
		if($ud != null){
			$mst->selectAll('SELECT id,ratio FROM mst_login_bonus WHERE num = :num',[':num',$ud['login_bonus_num']]);
			$max = 0;
			foreach($mst as $val){
				$max += $val['ratio'];
			}
			$loto = mt_rand(0,$max);
			$id = 0;
			foreach($mst as $val){
				$loto -= $val['ratio'];
				if($loto <= 0){
					$id = $val['id'];
					break;
				} 
			}
			// to gift
//			$gft = new giftModel();		// todo:後ほど実装
//			$gft->addLoginBonus($id);
			$usr->sqlQueru('UPDATE usr_data SET login_bonus_num = login_bonus_num +1,last_login_bonus_tm = NOW() WHERE id = :id',[':id',$uid]);			
		}
	}

}
