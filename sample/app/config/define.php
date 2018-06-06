<?php

/**
 * 定数定義
 */


// mstpackにてのPOST
define('CT_MSGPACK','application/msgpack');

// redis db 
define('REDIS_DB_DEFAULT',0);				// 特に用途が決められていない物（キーの数が莫大にならない）
define('REDIS_DB_AUTH',1);					// ログイン認証のキャッシュ
define('REDIS_DB_SHARD_WEIGHT',2);			// シャードのサーバーの重み
define('REDIS_DB_FRIEND_CODE',3);			// フレンドコードとユーザーID

// redis key define
define('REDIS_SHARD_KEY','db_sharding');	// シャーディングバランス

// memcaced key define
define('UID_TO_SHARD','uid_shard');			// シャードキーキャッシュ名
define('UID_TO_SID','uid_session_id');		// ユーザーIDからセッションIDを得る（再ログイン時の古いセッションIDを消去の為）
define('ORM_CACHE_FIND','orm_cache_find');	// ORMのfindのキャッシュ名
define('ORM_CACHE_FIND_FIRST','orm_cache_findFirst');	// ORMのfindFirstのキャッシュ名


// 以下環境ごとの定義
switch(getenv('PHALCON_ENV')){
	case 'product':
		return include APP_PATH . "/config/env/product_define.php";
	case 'staging':
		return include APP_PATH . "/config/env/staging_define.php";
	case 'develop':
		return include APP_PATH . "/config/env/develop_define.php";
	case 'local':
		return include APP_PATH . "/config/env/local_define.php";
	default:
		throw new Exception('PHALCON_ENV not defined');
}
