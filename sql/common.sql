-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: suarez_vm_common
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
-- Table structure for table `common_auth`
--

DROP TABLE IF EXISTS `common_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `common_auth` (
  `id` bigint(22) NOT NULL AUTO_INCREMENT COMMENT 'ユーザーID',
  `uuid` varchar(255) NOT NULL DEFAULT '' COMMENT '識別文字列',
  `create_tm` datetime NOT NULL COMMENT '生成日時',
  `user_data_created` tinyint(1) NOT NULL DEFAULT '0' COMMENT '初期データ生成済',
  `shard` tinyint(2) NOT NULL DEFAULT '1' COMMENT 'シャード番号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `common_auth`
--

LOCK TABLES `common_auth` WRITE;
/*!40000 ALTER TABLE `common_auth` DISABLE KEYS */;
/*!40000 ALTER TABLE `common_auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mst_chara`
--

DROP TABLE IF EXISTS `mst_chara`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mst_chara` (
  `id` int(11) NOT NULL,
  `test` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mst_chara`
--

LOCK TABLES `mst_chara` WRITE;
/*!40000 ALTER TABLE `mst_chara` DISABLE KEYS */;
INSERT INTO `mst_chara` VALUES (1,'aaaa'),(2,'sssaa'),(3,'2323232'),(4,'345d'),(5,'2323232ww'),(6,'3433434343434334343400000');
/*!40000 ALTER TABLE `mst_chara` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-26 13:08:29
