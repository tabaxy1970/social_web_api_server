<?php

use Phalcon\Mvc\Model;


/**
 * ORMでマスターを取ってくる為のベースモデル。
 * ORMでの書き込み(save)はフォローしないので素のModelを継承すること。
 */
class MasterBase extends Model {
	
	public static function cachedFindFirst($id = null,$name = null){
		$mc = Phalcon\Di::getDefault()->get('cachehandler')->getHandler('master');
		$key = ORM_CACHE_FIND_FIRST.sha1($name.msgpack_pack($id));
		$ret = $mc->get($key);
		if($ret !== false){
			return $ret;
		}
		$ret = parent::findFirst($id);
		if($ret !== false) $mc->set($key,$ret);
		return $ret;
	}	

	public static function cachedFind($id = null,$name = null){
		$mc = Phalcon\Di::getDefault()->get('cachehandler')->getHandler('master');
		$key = ORM_CACHE_FIND.sha1($name.msgpack_pack($id));
		$ret = $mc->get($key);
		if($ret !== false){
			return $ret;
		}
		$ret = parent::find($id);
		if($ret !== false) $mc->set($key,$ret);
		return $ret;
	}	

	public function save($data = null,$whiteList = null){		// マスタ参照専用だからsaveは殺す
		throw new Exception('Do not save() with master reference');
	}
}