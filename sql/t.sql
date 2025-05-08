-- MySQL dump 10.13  Distrib 9.3.0, for macos15.2 (arm64)
--
-- Host: 127.0.0.1    Database: schooldb
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Dept`
--

DROP TABLE IF EXISTS `Dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dept` (
  `id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `pid` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '상위부서id',
  `dname` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `captain` int unsigned DEFAULT NULL COMMENT '부서장',
  PRIMARY KEY (`id`),
  KEY `captain` (`captain`),
  CONSTRAINT `dept_ibfk_1` FOREIGN KEY (`captain`) REFERENCES `emp` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EmailLog`
--

DROP TABLE IF EXISTS `EmailLog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EmailLog` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `sender` int unsigned NOT NULL COMMENT '발신자',
  `receiver` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '수신자',
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '제목',
  `body` text COLLATE utf8mb4_unicode_ci COMMENT '내용',
  PRIMARY KEY (`id`),
  KEY `fk_EmailLog_sender_Emp` (`sender`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emp`
--

DROP TABLE IF EXISTS `emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ename` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dept` tinyint unsigned NOT NULL,
  `salary` int NOT NULL DEFAULT '0',
  `outdt` date DEFAULT NULL COMMENT '퇴사일',
  `outdt2` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '퇴사일2',
  `remark` json DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dept` (`dept`),
  KEY `index_Emp_remark_famxx` ((cast(json_unquote(json_extract(`remark`,_utf8mb4'$.fam[*].name')) as char(255) array))),
  KEY `functional_index` ((substring_index(`email`,_utf8mb4'@',-(1)))),
  KEY `functional_index_2` ((substr(`mobile`,8))),
  CONSTRAINT `emp_ibfk_1` FOREIGN KEY (`dept`) REFERENCES `Dept` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emptest`
--

DROP TABLE IF EXISTS `emptest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emptest` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ename` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dept` tinyint unsigned NOT NULL,
  `salary` int NOT NULL DEFAULT '0',
  `outdt` date DEFAULT NULL COMMENT '퇴사일',
  `outdt2` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '퇴사일2',
  `remark` json DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
/*!50100 PARTITION BY RANGE (`id`)
(PARTITION p1 VALUES LESS THAN (100) ENGINE = InnoDB,
 PARTITION p2 VALUES LESS THAN (200) ENGINE = InnoDB,
 PARTITION p3 VALUES LESS THAN MAXVALUE ENGINE = InnoDB) */;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `enroll`
--

DROP TABLE IF EXISTS `enroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enroll` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `subject` smallint unsigned NOT NULL COMMENT '과목번호',
  `student` int NOT NULL COMMENT '학번',
  `iscaptain` tinyint(1) DEFAULT '0' COMMENT '반장여부',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_enroll_subject_student` (`subject`,`student`),
  KEY `fk_Enroll_student` (`student`),
  KEY `enroll_ibfk_1_idx` (`subject`),
  CONSTRAINT `enroll_ibfk_1` FOREIGN KEY (`subject`) REFERENCES `Subject` (`id`),
  CONSTRAINT `enroll_ibfk_2` FOREIGN KEY (`student`) REFERENCES `Student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Major`
--

DROP TABLE IF EXISTS `Major`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Major` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT COMMENT '학과번호',
  `name` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '학과명',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Notice`
--

DROP TABLE IF EXISTS `Notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Notice` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '작성일',
  `workdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '제목',
  `writer` int unsigned DEFAULT NULL COMMENT '작성자',
  `contents` text COLLATE utf8mb4_unicode_ci COMMENT '내용',
  PRIMARY KEY (`id`),
  KEY `fk_Notice_writer_Emp` (`writer`),
  FULLTEXT KEY `ft_idx_Notice_title_contents` (`title`,`contents`),
  CONSTRAINT `fk_Notice_writer_Emp` FOREIGN KEY (`writer`) REFERENCES `emp` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `partirangetest`
--

DROP TABLE IF EXISTS `partirangetest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partirangetest` (
  `studentno` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enteryear` smallint NOT NULL,
  `studentname` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
/*!50100 PARTITION BY RANGE (`enteryear`)
(PARTITION p1 VALUES LESS THAN (2000) ENGINE = InnoDB,
 PARTITION p3 VALUES LESS THAN MAXVALUE ENGINE = InnoDB) */;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `prof`
--

DROP TABLE IF EXISTS `prof`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prof` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL,
  `likecnt` int NOT NULL DEFAULT '0',
  `subjectcnt` tinyint unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `StopWord`
--

DROP TABLE IF EXISTS `StopWord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StopWord` (
  `value` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Student` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '학번',
  `createdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '입학일시',
  `updatedate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
  `name` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '학생이름',
  `birthdt` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '생년월일',
  `major` smallint unsigned NOT NULL COMMENT '학과번호',
  `mobile` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '휴대전화번호',
  `email` varchar(127) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '이메일주소',
  `gender` bit(1) NOT NULL DEFAULT b'0' COMMENT '성별(1:남, 0:여)',
  `graduatedat` date DEFAULT NULL COMMENT '졸업 일자, 재학 중일 경우 null',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_Student_name_mobile` (`name`,`mobile`),
  KEY `idx_student_major_name` (`major`,`name`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`major`) REFERENCES `Major` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Subject`
--

DROP TABLE IF EXISTS `Subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Subject` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prof` smallint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Subject_prof_idx` (`prof`),
  CONSTRAINT `fk_Subject_prof` FOREIGN KEY (`prof`) REFERENCES `Prof` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`school`@`%`*/ /*!50003 TRIGGER `Subject_AFTER_INSERT` AFTER INSERT ON `subject` FOR EACH ROW BEGIN
    update prof set subjectcnt = subjectcnt + 1
    where id = New.prof;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`school`@`%`*/ /*!50003 TRIGGER `Subject_AFTER_UPDATE` AFTER UPDATE ON `subject` FOR EACH ROW BEGIN
    update prof set subjectcnt = subjectcnt + 1
      where id = NEW.prof;
      
    update prof set subjectcnt = subjectcnt - 1
      where id = OLD.prof;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`school`@`%`*/ /*!50003 TRIGGER `Subject_AFTER_DELETE` AFTER DELETE ON `subject` FOR EACH ROW BEGIN
    update prof set subjectcnt = cubjectcnt -1
      where id = OLD.prof;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `v_emp_groupby_dept`
--

DROP TABLE IF EXISTS `v_emp_groupby_dept`;
/*!50001 DROP VIEW IF EXISTS `v_emp_groupby_dept`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_emp_groupby_dept` AS SELECT 
 1 AS `dept`,
 1 AS `minName`,
 1 AS `maxName`,
 1 AS `totsal`,
 1 AS `avgsal`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `v_subject`
--

DROP TABLE IF EXISTS `v_subject`;
/*!50001 DROP VIEW IF EXISTS `v_subject`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_subject` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `prof`,
 1 AS `prof_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'schooldb'
--
