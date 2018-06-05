<?php

defined('BASE_PATH') || define('BASE_PATH', getenv('BASE_PATH') ?: realpath(dirname(__FILE__) . '/../..'));
defined('APP_PATH') || define('APP_PATH', BASE_PATH . '/app');

return new \Phalcon\Config([
	'databasepdo' => [
		'adapter'     => 'Mysql',
		'host'        => 'localhost',
		'username'    => 'user',
		'password'    => 'passwd',
		'dbname'      => 'common',
		'charset'     => 'utf8',
	],
	'database' => [
		'master' => [
			'adapter'     => 'Mysql',
			'host'        => 'localhost',
			'username'    => 'user',
			'password'    => 'passwd',
			'dbname'      => 'common',
			'charset'     => 'utf8',
			'master'      => true,
			'shard'       => false,
			'log'         => false
		],

		'slave' => [
			'adapter'     => 'Mysql',
			'host'        => 'localhost',
			'username'    => 'user',
			'password'    => 'passwd',
			'dbname'      => 'common',
			'charset'     => 'utf8',
			'master'      => false,
			'shard'       => false,
			'log'         => false
		],

		'shard1' => [		// シャード番号はshardにスペース開けず
			'adapter'     => 'Mysql',
			'host'        => 'localhost',
			'username'    => 'user',
			'password'    => 'passwd',
			'dbname'      => 'shard1',
			'charset'     => 'utf8',
			'master'      => true,
			'shard'       => true,
			'log'         => false
		],

		'shard2' => [		// シャード番号はshardにスペース開けず
			'adapter'     => 'Mysql',
			'host'        => 'localhost',
			'username'    => 'user',
			'password'    => 'passwd',
			'dbname'      => 'shard2',
			'charset'     => 'utf8',
			'master'      => true,
			'shard'       => true,
			'log'         => false
		],

		'log1' => [
			'adapter'     => 'Mysql',
			'host'        => 'localhost',
			'username'    => 'user',
			'password'    => 'passwd',
			'dbname'      => 'log1',
			'charset'     => 'utf8',
			'master'      => true,
			'shard'       => false,
			'log'         => true
		],

		'log2' => [
			'adapter'     => 'Mysql',
			'host'        => 'localhost',
			'username'    => 'user',
			'password'    => 'passwd',
			'dbname'      => 'log2',
			'charset'     => 'utf8',
			'master'      => true,
			'shard'       => false,
			'log'         => true
		]
	],
	'memcached' => [
		'session' => [			// セッション用
			'host'        => 'localhost',
			'port'        => 11211,
		],

		'master' => [				// マスタDBクエリ用
			'host'        => 'localhost',
			'port'        => 11211,
		],
		
		'shard' => [				// シャード用
			'host'        => 'localhost',
			'port'        => 11211,
		],

		'request' => [			// リクエストキャッシュ用
			'host'        => 'localhost',
			'port'        => 11211,
		]
	],
	'redis' => [
		'master' => [					// ログインキャッシュ用
			'host'        => 'localhost',
			'port'        => 6379,
		],

		'slave' => [					// 
			'host'        => 'localhost',
			'port'        => 6379,
		]
	],
	
    'application' => [
        'appDir'         => APP_PATH . '/',
        'controllersDir' => APP_PATH . '/controllers/',
        'modelsDir'      => APP_PATH . '/models/',
        'masterDir'      => APP_PATH . '/master/',
        'migrationsDir'  => APP_PATH . '/migrations/',
        'viewsDir'       => APP_PATH . '/views/',
        'pluginsDir'     => APP_PATH . '/plugins/',
        'libraryDir'     => APP_PATH . '/library/',
        'cacheDir'       => BASE_PATH . '/cache/',

        // This allows the baseUri to be understand project paths that are not in the root directory
        // of the webpspace.  This will break if the public/index.php entry point is moved or
        // possibly if the web server rewrite rules are changed. This can also be set to a static path.
        'baseUri'        => preg_replace('/public([\/\\\\])index.php$/', '', $_SERVER["PHP_SELF"]),
    ]
]);
