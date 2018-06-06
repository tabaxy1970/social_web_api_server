<?php

use Phalcon\Mvc\View;
use Phalcon\Mvc\View\Engine\Php as PhpEngine;
use Phalcon\Mvc\View\Engine\Volt as VoltEngine;
use Phalcon\Mvc\Model\Metadata\Memory as MetaDataAdapter;


/**
 * maintenance configration file
 */
$di->setShared('mainte', function () {
	return include APP_PATH . "/config/mainte.php";
});

/**
 * Shared configuration service
 */
$di->setShared('config', function () {
	switch(getenv('PHALCON_ENV')){
		case 'product':
			return include APP_PATH . "/config/env/product_config.php";
		case 'staging':
			return include APP_PATH . "/config/env/staging_config.php";
		case 'develop':
			return include APP_PATH . "/config/env/develop_config.php";
		case 'local':
			return include APP_PATH . "/config/env/local_config.php";
		default:
			throw new Exception('PHALCON_ENV not defined');
	}
});

/**
 * Setting up the view component
 */
$di->setShared('view', function () {
    $config = $this->getConfig();

    $view = new View();
    $view->setDI($this);
    $view->setViewsDir($config->application->viewsDir);

    $view->registerEngines([
        '.volt' => function ($view) {
            $config = $this->getConfig();

            $volt = new VoltEngine($view, $this);

            $volt->setOptions([
                'compiledPath' => $config->application->cacheDir,
                'compiledSeparator' => '_'
            ]);

            return $volt;
        },
        '.phtml' => PhpEngine::class

    ]);

    return $view;
});

/**
 * Database connection is created based in the parameters defined in the configuration file
 */
$di->setShared('db', function () {
    $config = $this->getConfig();

    $params = [
        'host'     => $config->databasepdo->host,
        'username' => $config->databasepdo->username,
        'password' => $config->databasepdo->password,
        'dbname'   => $config->databasepdo->dbname,
        'charset'  => $config->databasepdo->charset
    ];

    $connection = new \Phalcon\Db\Adapter\Pdo\Mysql($params);

    return $connection;
});


/**
 * If the configuration specify the use of metadata adapter use it or use memory otherwise
 */
$di->setShared('modelsMetadata', function () {
    return new MetaDataAdapter();
});

/**
 * database handler manager
 */
require_once "../app/handler/DBHandler.php";
$di->setShared('dbhandler', function () {
    return new DBHandler();
});

/**
 * redis handler manager
 */
require_once "../app/handler/RedisHandler.php";
$di->setShared('redishandler', function () {
    return new RedisHandler();
});

/**
 * memcached handler manager
 */
require_once "../app/handler/CacheHandler.php";
$di->setShared('cachehandler', function () {
    return new CacheHandler();
});

/**
 * cookie un encryptable
 */
$di->set('cookies', function() {
	$cookies = new Phalcon\Http\Response\Cookies();
	$cookies->useEncryption(false);
	return $cookies;
});
