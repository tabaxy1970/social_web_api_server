<?php
use Phalcon\Di\FactoryDefault;

error_reporting(E_ALL);

define('BASE_PATH', dirname(__DIR__));
define('APP_PATH', BASE_PATH . '/app');

try {

    /**
     * The FactoryDefault Dependency Injector automatically registers
     * the services that provide a full stack framework.
     */
    $di = new FactoryDefault();

    /**
     * Handle routes
     */
    include APP_PATH . '/config/router.php';

    /**
     * Read services
     */
    include APP_PATH . '/config/services.php';

    /**
     * Get config service for use in inline setup below
     */
    $config = $di->getConfig();

    /**
     * Include Autoloader
     */
    include APP_PATH . '/config/loader.php';

    /**
     * Include define
     */
    include APP_PATH . '/config/define.php';

	/**
     * Include error define
     */
    include APP_PATH . '/config/error_define.php';

    /**
     * Handle the request
     */
    $application = new \Phalcon\Mvc\Application($di);

    echo $application->handle()->getContent();

} catch (\Exception $e) {
	if($e->getCode() == 2){
		header('HTTP/1.0 404 Not Found');
		print "<H2>404 Not Found</H2>";
		exit();
	}
    echo 'Exception message:'.$e->getMessage() . '<br>';
    echo 'Exception code:'.$e->getCode() . '<br>';
    echo '<pre>' . $e->getTraceAsString() . '</pre>';
}
