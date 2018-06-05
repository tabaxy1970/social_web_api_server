<?php

class IndexController extends ControllerBase
{

    public function indexAction(){
		phpinfo();
		exit();
		return $this->response->setContent('hello world!');
    }

}

