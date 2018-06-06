<?php


function request($url,$post = ['null' => null]){
    $pack = msgpack_pack($post);
	$curl = curl_init();
	curl_setopt( $curl,CURLOPT_URL,$url );
	curl_setopt( $curl,CURLOPT_RETURNTRANSFER,true );
	curl_setopt( $curl,CURLOPT_FAILONERROR,false );
	curl_setopt( $curl,CURLOPT_ENCODING,'gzip' );
	curl_setopt( $curl,CURLOPT_POST,true );
	curl_setopt( $curl,CURLOPT_POSTFIELDS,$pack ); 
	curl_setopt( $curl,CURLOPT_HTTPHEADER,array("Content-Type: application/msgpack","Content-length: ".strlen($pack) ));
    $row = curl_exec( $curl );
	$response = @msgpack_unpack($row);
	curl_close( $curl );
    print_r($response);
    return $response;
}

$login['uuid'] = microtime();
$ret = request('http://192.168.1.216/login',$login);
$sid = $ret['body']['sid'];
$ret = request("http://192.168.1.216/login/create?sid={$sid}");
