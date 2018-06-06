<?php

/**
 * Description of loginController
 *
 * @author taba
 */
class LoginController extends ControllerBase {

    public function indexAction() {
		if($this->isMainte()) return $this->maintenance();
		$param = $this->validate(
			['uuid','alphanum',sha1(microtime())]
		);
		$this->startTransaction();
		$lm = new LoginModel();
		try{
			$body = $lm->login($param['uuid']);
			if($body['user_data_created'] != 0){
				$ud = new UsrDataModel();
				$ud->updateLogin($body['id'],$body['shard']);
			}
		}catch(\Exception $e){
			$lm->loginRollBack($param['uuid']);		// KVS周りを消す
			$this->rollBack();
			$this->close();
			throw new Exception($e->getMessage());
		}			
		$body['sid'] = $this->generateSession($body);
		$this->commit();
		$this->close();
		return $this->render($body);
	}
		
	public function createAction(){
		if(($pp = $this->preprocess(false))!== false) return $pp;
		$ca = $this->getCA();
		$ud = new UsrDataModel();
		$lm = new LoginModel();
		$this->startTransaction();
		try{
			if($lm->dataCreated($ca['id'])){
				$ud->createUsrData($ca['id'],$ca['shard']);
			}
		}catch(\Exception $e){
			$this->rollBack();
			$this->close();
			throw new Exception($e->getMessage());
		}
		$this->commit();
		$this->close();

		$body['id'] = $ca['id'];
		return $this->render($body);
	}

}

