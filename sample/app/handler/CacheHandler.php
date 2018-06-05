<?php

/**
 * Description of CacheHandler
 *
 * @author taba
 */
class CacheHandler extends Phalcon\Di\Injectable {
	private $connection;
	
	public function getHandler($name){
		if(isset($this->connection[$name])){	// 使い回せるコネクションがあった。
			return $this->connection[$name];
		}else{
			$memcached = $this->config->memcached;
			if(isset($memcached[$name])){
				$mc = new \Memcached();
				$mc->addServer($memcached[$name]->host,$memcached[$name]->port);
				$this->connection[$name] = $mc;
				return $mc;				
			}else{
				throw new Exception('memcached name not found:'.$name);
			}
		}
	}
}