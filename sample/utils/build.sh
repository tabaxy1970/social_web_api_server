#!/bin/bash
../vendor/phalcon/zephir/bin/zephir build
sudo cp ext/modules/utils.so /usr/lib64/php/modules/
sudo /etc/init.d/php-fpm restart
cp -f ext/modules/utils.so ../../../installation/zephir/
