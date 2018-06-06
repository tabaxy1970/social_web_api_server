<?php
//*
return new \Phalcon\Config([
	'valid'       => false,
	'ip_through'  => false,
	'message'     => '現在通常運営中',
	'ip_list'     => [],
]);
/**/

/*
return new \Phalcon\Config([
	'valid'       => true,
	'ip_through'  => false,		// 完全メンテ状態
	'message'     => 'メンテナンス中です\n終了予定時刻15:00:00',
	'ip_list'     => [],
]);
/**/

/*
return new \Phalcon\Config([
	'valid'       => true,
	'ip_through'  => true,		// ハーフメンテ状態
	'message'     => 'メンテナンス中です\n終了予定時刻15:00:00',
	'ip_list'     => [
		'192.168.1.0/24'
		],
]);
/**/

