-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: suarez_vm_shard1
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usr_data`
--

DROP TABLE IF EXISTS `usr_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_data` (
  `id` bigint(22) NOT NULL COMMENT 'ユーザーID',
  `name` varchar(64) COLLATE utf8mb4_bin NOT NULL DEFAULT 'no name' COMMENT 'ユーザー名',
  `friend_code` varchar(16) COLLATE utf8mb4_bin NOT NULL COMMENT 'フレンドコード',
  `create_tm` datetime NOT NULL DEFAULT '2018-01-01 00:00:00' COMMENT '作成日時',
  `last_login_tm` datetime NOT NULL DEFAULT '2018-01-01 00:00:00' COMMENT 'ラストログイン',
  `login_num` int(11) NOT NULL DEFAULT '1' COMMENT 'ログイン回数(1日1回)',
  `coin` int(11) NOT NULL DEFAULT '0' COMMENT 'コイン',
  `free_money` int(11) NOT NULL DEFAULT '0' COMMENT '無料通貨',
  `paid_money` int(11) NOT NULL DEFAULT '0' COMMENT '購入通貨',
  `last_login_bonus_tm` datetime NOT NULL DEFAULT '2018-01-01 00:00:00' COMMENT 'ラストログインボーナス時刻',
  `login_bonus_num` int(11) NOT NULL DEFAULT '0' COMMENT 'ログインボーナス回数',
  PRIMARY KEY (`id`),
  KEY `friend_code` (`friend_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_data`
--

LOCK TABLES `usr_data` WRITE;
/*!40000 ALTER TABLE `usr_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `usr_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usr_friend`
--

DROP TABLE IF EXISTS `usr_friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_friend` (
  `user_id` bigint(22) NOT NULL COMMENT 'ユーザーID',
  `friend_uid` bigint(22) NOT NULL COMMENT 'フレンドユーザーID',
  `name` varchar(64) COLLATE utf8mb4_bin NOT NULL DEFAULT 'no name' COMMENT 'フレンド名',
  `create_tm` datetime NOT NULL DEFAULT '2018-01-01 00:00:00' COMMENT '作成日時',
  `black` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'ブラックリスト',
  `valid` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0にするとフレンド削除状態',
  PRIMARY KEY (`user_id`,`friend_uid`),
  KEY `friend_uid` (`friend_uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_friend`
--

LOCK TABLES `usr_friend` WRITE;
/*!40000 ALTER TABLE `usr_friend` DISABLE KEYS */;
/*!40000 ALTER TABLE `usr_friend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usr_friend_request`
--

DROP TABLE IF EXISTS `usr_friend_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usr_friend_request` (
  `user_id` bigint(22) NOT NULL COMMENT 'ユーザーID',
  `request_uid` bigint(22) NOT NULL COMMENT '申請元ユーザーID',
  `name` varchar(64) COLLATE utf8mb4_bin NOT NULL DEFAULT 'no name' COMMENT '申請元フレンド名',
  `request_tm` datetime NOT NULL DEFAULT '2018-01-01 00:00:00' COMMENT '申請日時',
  `valid` tinyint(1) NOT NULL DEFAULT '1' COMMENT '有効フラグ',
  PRIMARY KEY (`user_id`,`request_uid`),
  KEY `request_uid` (`request_uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr_friend_request`
--

LOCK TABLES `usr_friend_request` WRITE;
/*!40000 ALTER TABLE `usr_friend_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `usr_friend_request` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-26 13:08:44
