<?php


/**
 * エラー定義
 */


// カテゴリ定義
define('ERR_HTTP','100-');		// サーバーからは返すことはない。
// 100-403(Forbidden)
// 100-500(Internal Server Error)
// 100-502(Bad GateWay) 等、クライアントで生成する
define('ERR_LOGIN',		'101-');
define('ERR_FRIEND',	'102-');


// エラーダイアログ後の処理
define('ERR_AFTER_GOTO_TITLE',				0);		// タイトルに行く
define('ERR_AFTER_RETRY',					1);		// リトライができる
define('ERR_AFTER_GOTO_MYROOM',				2);		// マイルームに行く


/* -------------------------------------------------------------------------- 
// エラーレンダリングのルール

// 単独のエラーを返す場合はEID単体
return $this->render(null,ERR_FRIEND_REMOVE_EID,ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);

// 複数のケースのエラーを返す場合はEIDの後ろに -001 〜 -999 を付加する
return $this->render(null,ERR_FRIEND_REMOVE_EID.'-001',ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);
return $this->render(null,ERR_FRIEND_REMOVE_EID.'-002',ERR_COMMON_MSG,ERR_AFTER_GOTO_TITLE);
*/

// 共通エラーメッセージ
define('ERR_COMMON_MSG',					'通信エラー');

// ERR_LOGIN : セッション切れ、メンテナンス
define('ERR_SESSION_TIME_OUT_EID',			ERR_LOGIN.'001');
define('ERR_SESSION_TIME_OUT_MSG',			'データの更新チェックを行います。');
define('ERR_MAINTENANCE_EID',				ERR_LOGIN.'002');

// ERR_FRIEND : フレンド
define('ERR_FRIEND_REQUEST_EID',			ERR_FRIEND.'001');
define('ERR_FRIEND_REGIST_EID',				ERR_FRIEND.'002');
define('ERR_FRIEND_REMOVE_EID',				ERR_FRIEND.'003');
define('ERR_FRIEND_BLACK_EID',				ERR_FRIEND.'004');
define('ERR_FRIEND_WHITE_EID',				ERR_FRIEND.'005');

