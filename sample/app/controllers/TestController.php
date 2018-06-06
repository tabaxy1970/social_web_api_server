<?php

class TestController extends ControllerBase {
	
	private function diffTime($start,$end){
		$tmp = explode(' ',$start);
		$st = (double)$tmp[1] + (double)$tmp[0];
		$tmp = explode(' ',$end);
		$ed = (double)$tmp[1] + (double)$tmp[0];
		return $ed - $st;
	}
	public function indexAction(){
		if(($pp = $this->preprocess(false))!== false) return $pp;		
//		$body['mst_chara'] = Utils\Numeric::convert((new DBModel('master'))->selectAll("SELECT * FROM mst_chara"),["test"]);
		$body['mst_chara'] = Utils\Numeric::convert(MstChara::find(),["test"]);
		
 		return $this->render($body);


	}

	
	public function testAction(){
		$db = new DBModel('master');
		$st = microtime();
		for($y = 0;$y < 1000;$y++){
			$ret = $db->selectAll("SELECT * FROM mst_chara");
		}
		$t1 = $this->diffTime($st, microtime());
		$db->firstMode(false);
		$st = microtime();
		for($y = 0;$y < 1000;$y++){
			$db->selectAll("SELECT * FROM mst_chara");
		}
		$t2 = $this->diffTime($st, microtime());
		$body['normal'] = $t1;
		$body['typeconvert'] = $t2;
		$body['data'] = $ret;
 		return $this->render($body);
	}
	
}