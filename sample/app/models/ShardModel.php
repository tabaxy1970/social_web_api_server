<?php

use Phalcon\Mvc\Model;

/**
 * Description of ShardModel
 *
 * @author taba
 */
class ShardModel extends Model{

	/**
	 * シャードのバランシングを行う
	 * @return type	シャードIDX
	 */
	public function balance(){
		$sd = $this->di->get('redishandler')->getHandler('master',REDIS_DB_SHARD_WEIGHT);
		$snum = $sd->zRange(REDIS_SHARD_KEY,0,0);		// 人数が一番少ないシャード
		if($snum == null){		// シャードキーがない。。
			$shard_max = sizeof($this->getAllShardDB());
			for($idx = 1;$idx <= $shard_max;$idx++){
				$sd->zAdd(REDIS_SHARD_KEY,0,$idx);
			}
			$snum = 1;
		}else{
			$snum = (int)$snum[0];
		}
		$sd->zIncrBy(REDIS_SHARD_KEY,1,$snum);
		return $snum;
	}

	/**
	 * シャードバランスキーが吹っ飛んだ時に完全に復旧させる
	 * Redisで事故が起こった場合にRedisリビルドコントローラーCLIから呼んでもらう。
	 */
	public function rebuild(){
		$sd = $this->di->get('redishandler')->getHandler('master',REDIS_DB_SHARD_WEIGHT);
		$slv = new DBModel('slave');		// キャッシュは無効
		$shard = $slv->selectAll('SELECT shard,COUNT(id) AS cnt FROM `common_auth` GROUP BY shard');
		foreach($shard as $val){
			$sd->zAdd(REDIS_SHARD_KEY,$val['cnt'],$val['shard']);
		}
	}
	
	/**
	 * ユーザーIDからシャード番号を得る
	 * @param type $id	ユーザーID
	 * @return シャード番号
	 */
	public function getShard($id){
		$mc = $this->di->get('cachehandler')->getHandler('shard');
		$ca = $mc->get(UID_TO_SHARD.$id);
		if($ca == null){
			$slv = new DBModel('slave',true);
			$ca = $slv->select('SELECT id,uuid,user_data_created,shard FROM common_auth WHERE id = :id',[':id',$id]);
			if($ca == null){	// ユーザーが見つからない
				throw new Exception('getShard() ユーザーが見つからない。id:'.$id);
			}
			DBModel::convNumeric($ca,'uuid');
			$this->setShard($ca);
		}
		return $ca['shard'];
	}
	
	/**
	 * ユーザーIDのシャード番号設定する（ログイン認証の型）
	 * @param type $ca	認証情報
	 */
	public function setShard($ca){
		$mc = $this->di->get('cachehandler')->getHandler('shard');
		$mc->set(UID_TO_SHARD.$ca['id'],$ca);
	}
	
	/**
	 * シャードDB全ての名前を取得
	 * @return type
	 */
	public function getAllShardDB(){
		$dbs = $this->db = $this->di->get('dbhandler')->getDBList();
		$shard = [];
		foreach($dbs as $key => $val){
			if($val->shard && $val->master){
				$shard[] = $key;
			}
		}
		return $shard;
	}
}
