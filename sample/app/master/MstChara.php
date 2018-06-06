<?php
/*
 * Description of mstChara
 *
 * @author taba
 */

class MstChara extends MasterBase {
	
	public static function findFirst($id = null){
		return parent::cachedFindFirst($id,__FILE__);
	}
	
	public static function find($id = null){
		return parent::cachedFind($id,__FILE__);
	}

}
