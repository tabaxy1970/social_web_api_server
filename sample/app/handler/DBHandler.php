<?php

class DBHandler extends Phalcon\Di\Injectable {
	private $connection = null;
	private $master = null;
	private $transaction = false;

	public function getDBList(){
		return $this->config->database;
	}
	
	public function getHandler($db,$shardIdx = -1){
		if($shardIdx < 0){
			$name = $db;
		}else{
			$name = $db.$shardIdx;
		}
		if(isset($this->connection[$name])){	// 使い回せるコネクションがあった。
			return $this->connection[$name];
		}else{
			$dbs = $this->config->database;
			if(isset($dbs[$name])){
				$conn = new \mysqli('p:'.$dbs[$name]->host,$dbs[$name]->username,$dbs[$name]->password,$dbs[$name]->dbname);
				if($conn->connect_error) {
					throw new Exception('mysql connect error:'.$conn->connect_error.'('.$conn->connect_errno.')');
				}
				$conn->set_charset($dbs[$name]->charset);
				if($this->transaction == true && $dbs[$name]->master){				// トランザクション中に新たなハンドラー作成はトランザクション開始
					$conn->begin_transaction();
				}
				$this->master[$name] = $dbs[$name]->master;
				$this->connection[$name] = $conn;
				return $conn;				
			}else{
				throw new Exception('dabase name not found:'.$name);
			}
		}
	}

	public function startTransaction(){
		$this->transaction = true;
		if($this->connection != null){
			foreach($this->master as $name => $bool){
				if($bool){
					$this->connection[$name]->begin_transaction();
				}
			}
		}
	}
	
	public function rollBack(){
		$this->transaction = true;
		if($this->connection != null){
			foreach($this->master as $name => $bool){
				if($bool){
					$this->connection[$name]->rollback();
				}
			}
		}
	}
	
	public function commit(){
		$this->transaction = true;
		if($this->connection != null){
			foreach($this->master as $name => $bool){
				if($bool){
					$this->connection[$name]->commit();
				}
			}
		}
	}
	
	public function close(){
		if($this->connection != null){
			foreach($this->connection as $mysql){
				$mysql->close();
			}
			$this->connection = null;
		}
	}
}
