-- ユーザー作成
SET GLOBAL validate_password_length=1;
SET GLOBAL validate_password_policy=LOW;
CREATE USER 'user'@'localhost' IDENTIFIED by 'passwd';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' IDENTIFIED BY 'passwd';
