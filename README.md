# social_web_api_server
* 高負荷に耐えられるソシャゲサーバー構築

##　警告
* 本プロジェクトを使用した損害について一切責任を負いません。うまく動かなくても、情報が盗まれても、運営サービスが止まっても、サーバーが起動しなくなっても、クラウドから多額な請求が来ても、自己責任でお願いします。

##　概要
* phalcon3フレームワークを採用。
* php拡張にてzephirで高速化。
* コモンDBに極力負荷をかけない設計。
* KVSがクラッシュしても最小範囲の障害で済むように。
* O/Rマッパーは個人的には使いたくないが一応使えるようにする。 → 今後の課題：現状はコモンDBに向いているのでシャーディングに対応予定。
* MySQLからの結果が全て文字列になるので必要に応じて数値型に高速変換。

## 環境
* CentOS6.9
* MySQL5.7
* Redis
* memcached
* PHP7
* PHP-FPM
* nginx

## phalcon3フレームワーク
* 自由なのでオレオレフレームワークになりがちだが、それを望む。

## php拡張にてzephir
* PHP5より7はかなり速くなったが、やはりPHPは遅い。
* 冗長な処理だとPHPは遅くC言語に変換できるzephirはPHP野郎には優しい。

## コモンDBにアクセスを極力しない方針
* ログイン認証はRedisでキャッシュ化
* シャーディングバランスもコモンDBを見ずRedisのzRange()でバランシング。

## KVSがクラッシュ
* リビルドすることで解決できるように。

## O/Rマッパー
* こいつの良いとこ取りができれば。。。
* マスターなんかは結構いける。
* mst_chara.sql でDBに定義。
* MstChara.php　を定義。
* $data = MstChara::findFirst($id); なお手軽感。
* とりあえず、マスターデータをmemcachedにキャッシュした。

## MySQLからの結果が全て文字列
* ほぼそのままで実害ないですが、前はレンダリングに渡すときに json_encode( $responce , JSON_NUMERIC_CHECK ); で勝手に数値にしてたが、
MsgPack経由でのシリアライズを電文を採用したので、型が文字列だと受け取るクライアントの取り回しがわるい。
* ちまちま型をみて変換すると変換しないマスター取得の７倍近いコストがかかるので馬鹿にならない。
* zephirで変換すると実用レベルの速さにはなったので使いたいときに使おう。

## OSインストールから動作まで
* CentOS-6.9-x86_64-minimal.iso を拾ってきてVMなどにインストール。
* なぜか ifcfg-eth0 の ONBOOT が no になっているので yes にし、# ./ifup eth0 で活性化。
* 基本 $ su - で root でインストール進めます。# は root $ はユーザー操作です。
* 適当にチャチャッとyumでMySQL5.7インストール
```bash
# rpm -Uvh http://dev.mysql.com/get/mysql57-community-release-el6-7.noarch.rpm
# yum -y install mysql-community-server
```
* /etc/my.cnf はご自分の「秘伝のタレ」をご用意してください。
* デーモン起動時に一度だけ表示されるテンポラリパスワードを見落とさないように。
* とりあえずユーザーを作ります。
```bash
[root@localhost ~]# service mysqld start
    ・
    省略
    ・
2018-06-06T03:53:37.200622Z 1 [Note] A temporary password is generated for root@localhost: ************
                                                           [  OK  ]
Starting mysqld:                                           [  OK  ]
[root@localhost ~]# mysql -u root -p
Enter password: <起動時の"************"の部分がパスワード>
    ・
    省略
    ・
mysql> set password for root@localhost=password('passwordPASSWORD@999');
mysql> SET GLOBAL validate_password_length=1;
mysql> SET GLOBAL validate_password_policy=LOW;
mysql> set password for root@localhost=password('root');
mysql> CREATE USER 'user'@'localhost' IDENTIFIED by 'passwd';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' IDENTIFIED BY 'passwd';
```
* テンポラリパスワードでログインし一旦パスワード変更をする。
* その後、パスワードセキュリティレベルを最低にします。（本番サーバーでやっちゃダメ、絶対に）
* サンプルがそのまま動くユーザー＆パスワード設定。

* 次にKVSをインストール
```bash
# yum -y install memcached
# rpm -Uvh http://download.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
# rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
# yum -y --enablerepo=remi,remi-test install redis
```
* PHP7をインストール
```bash
# yum -y install epel-release
# rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
# yum -y install --enablerepo=remi --enablerepo=remi-php70 php php-devel php-mysqlnd php-mcrypt php-gd php-mbstring php-imap php-opcache php-pear php-pecl-apcu php-redis php-memcached php-fpm php-pecl-xdebug
```

* nginxをインストール
```bash
# rpm -ivh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
# yum -y install nginx
```

* プロジェクトをクローン
```bash
# yum -y install git
# cd /
# git clone https://github.com/tabaxy1970/social_web_api_server
# chown -Rf nginx.nginx /social_web_api_server
# chmod -Rf 777 /social_web_api_server
```

* サーバーの自動起動設定（サーバー起動はのちほど）
```bash
# chkconfig memcached on
# chkconfig redis on
# chkconfig php-fpm on
# chkconfig nginx on
```
* 本プロジェクトのサーバーコンフィグを配置
```bash
# cp -f /social_web_api_server/config/www.conf /etc/php-fpm.d/
# cp -f /social_web_api_server/config/nginx.conf /etc/nginx
# cp -f /social_web_api_server/config/default.conf /etc/nginx/conf.d
```
* default.conf の root (ドキュメントルート)は本プロジェクトの public フォルダーを指定する。

* phalcon3のインストール
```bash
# cd /tmp
# yum -y install gcc gcc-c++
# git clone git://github.com/phalcon/cphalcon.git
# cd cphalcon/build
# ./install
# cd /tmp
# yum -y install autoconf

# mkdir re2c
# cd re2c/
# yum -y install wget
# wget https://github.com/skvadrik/re2c/releases/download/0.13.6/re2c-0.13.6.tar.gz
# gunzip re2c-0.13.6.tar.gz
# tar xvf re2c-0.13.6.tar
# cd re2c-0.13.6
# ./configure
# make
# make install

# cd /tmp
# git clone git://github.com/phalcon/php-zephir-parser.git
# cd php-zephir-parser
# ./install
```

* データベースとテーブルを作成
```bash
$ mysql -u user -ppasswd < create_database.sql 
$ mysql -u user -ppasswd common < common.sql 
$ mysql -u user -ppasswd shard1 < shard.sql 
$ mysql -u user -ppasswd shard2 < shard.sql 
```

* デーモンたちの起動
```bash
# cp /social_web_api_server/sample/utils/ext/modules/utils.so /usr/lib64/php/modules/
# echo 'extension=phalcon.so' > /etc/php.d/90-phalcon.ini
# echo 'extension=zephir_parser.so' >> /etc/php.d/90-phalcon.ini
# echo 'extension=utils.so' >> /etc/php.d/90-phalcon.ini
# service memcached start
# service redis start
# service php-fpm start
# service nginx start
# iptables -F
# /etc/init.d/iptables save
# setenforce 0
```
* selinuxが再起動時に復活するので
* # vi /etc/selinux/config 
* SELINUX=disabled
* にする。

## 動作確認
* http://<host_ip>/login
* を叩く。
```bash
{
  "result": true,
  "body": {
    "id": 1,
    "uuid": "ec3c07b4266c79e8b97f054f22e324b3caa2d33c",
    "user_data_created": 0,
    "shard": 1,
    "sid": "60afdddbb329a55f541e10bb781ae2c50cac8c5f"
  }
}
```
* 叩いて 500 が返ってきたら php-fpm restart やってみよう。（理由はわからんがそれで治った）
