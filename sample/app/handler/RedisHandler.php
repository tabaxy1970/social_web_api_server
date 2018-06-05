<?php

/**
 * Description of RedisHandler
 *
 * @author taba
 */
class RedisHandler extends Phalcon\Di\Injectable {
	private $connection;
	
	public function getHandler($name,$db = 0){
		if(isset($this->connection[$name][$db])){	// 使い回せるコネクションがあった。
			return $this->connection[$name][$db];
		}else{
			$redis = $this->config->redis;
			if(isset($redis[$name])){
				$rds = new \Redis();		// Phalcon/redisはキーがない時に文字列の'null'を返すので標準のRedisを使う。
				if(@$rds->connect($redis[$name]->host,$redis[$name]->port) === false){
					throw new Exception('redis connect error host:'.$redis[$name]->host.' port:'.$redis[$name]->port);
				}
				if($db > 0) $rds->select($db);
				$this->connection[$name][$db] = $rds;
				return $rds;				
			}else{
				throw new Exception('redis name not found:'.$name);
			}
		}
	}
}