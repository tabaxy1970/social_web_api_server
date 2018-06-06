<?php

use Phalcon\Mvc\Model;


/**
 * Description of LoginModel
 *
 * @author taba
 */
class LoginModel extends Model{
	
	/**
	 * ログイン認証
	 * @param type $uuid	識別文字列
	 * @return 認証情報
	 */
	public function login($uuid){
		$rds = $this->di->get('redishandler')->getHandler('master',REDIS_DB_AUTH);	// todo: redisのLAが上昇してきたらスレーブにするかも
		$ca = $rds->get($uuid);
		$srd = new ShardModel();
		if($ca == null){
			$mst = new DBModel('master');
			$ca = $mst->select('SELECT id,uuid,user_data_created,shard FROM common_auth WHERE uuid = :uuid',[':uuid',$uuid]);
			if($ca == null){	// 新規ログイン
				$snum = $srd->balance();
				$mst->query('INSERT INTO common_auth(uuid,create_tm,shard) VALUE(:uuid,NOW(),:shard)',[':uuid',$uuid],[':shard',$snum]);
				$id = $mst->lastInsertID();
				$ca = ['id' => $id,'uuid' => $uuid,'user_data_created' => 0,'shard' => $snum];
			}
			DBModel::convNumeric($ca,'uuid');
			$rds->set($uuid,msgpack_pack($ca));
		}else{
			$ca = msgpack_unpack($ca);
		}
		$srd->setShard($ca);
		return $ca;
	}

	/**
	 * ログイン失敗時にキャッシュを消す
	 * @param type $uuid
	 */
	public function loginRollBack($uuid){
		$rds = $this->di->get('redishandler')->getHandler('master',REDIS_DB_AUTH);
		$rds->delete($uuid);
	}
	
	/**
	 * ログイン後ユーザーデータ作成完了
	 * @param type $id	ユーザーID
	 * @return true:作成した false:すでに作成済み
	 */
	public function dataCreated($id){
		$mst = new DBModel('master');
		$cnt = $mst->query('UPDATE common_auth SET user_data_created = 1 WHERE id = :id',[':id',$id]);
		if($cnt <= 0){
			return false;		// 呼ばれても支障ないので戻るだけにする。
		}
		$ca = $mst->select('SELECT id,uuid,user_data_created,shard FROM common_auth WHERE id = :id',[':id',$id]);
		DBModel::convNumeric($ca,'uuid');
		$rds = $this->di->get('redishandler')->getHandler('master',REDIS_DB_AUTH);
		$rds->set($ca['uuid'],msgpack_pack($ca));			// キャッシュ更新
		$srd = new ShardModel();
		$srd->setShard($ca);
		return true;
	}
	
}
