-- MySQL dump 10.13  Distrib 8.0.43, for Linux (x86_64)
--
-- Host: localhost    Database: gallery_database
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `Favourite`
--

DROP TABLE IF EXISTS `Favourite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Favourite` (
  `favourite_id` bigint NOT NULL AUTO_INCREMENT,
  `uer_id` int DEFAULT NULL,
  `photo_id` bigint DEFAULT NULL,
  PRIMARY KEY (`favourite_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favourite`
--

LOCK TABLES `Favourite` WRITE;
/*!40000 ALTER TABLE `Favourite` DISABLE KEYS */;
/*!40000 ALTER TABLE `Favourite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Photos`
--

DROP TABLE IF EXISTS `Photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Photos` (
  `photo_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `descriptions` varchar(255) DEFAULT NULL,
  `upload_date` date DEFAULT NULL,
  `views_count` int DEFAULT NULL,
  `likescount` int DEFAULT NULL,
  `view_count` int DEFAULT NULL,
  PRIMARY KEY (`photo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Photos`
--

LOCK TABLES `Photos` WRITE;
/*!40000 ALTER TABLE `Photos` DISABLE KEYS */;
INSERT INTO `Photos` VALUES (1,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766162141/poimuvdomoh08x4h6tbh.png','asada','asad',NULL,NULL,NULL,NULL),(2,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766162142/sw1otmxnylfiqpxw7zjr.png','asada','asad',NULL,NULL,NULL,NULL),(3,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766162143/wghpcvdsaryctukxoj8w.png','asada','asad',NULL,NULL,NULL,NULL),(4,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766162274/avh7wpxnzvdfpvignr1d.png','asada','asad',NULL,NULL,NULL,NULL),(5,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766162275/qfgkpbjwksdvunbgrg2d.png','asada','asad',NULL,NULL,NULL,NULL),(6,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766197537/xofwfwldiw4mw9yqqlrh.png','kjkj','cbvv',NULL,NULL,NULL,NULL),(7,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766224410/iacg7diwfviuilx9n8by.png','kaskajs','hahsja',NULL,NULL,NULL,NULL),(8,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766326425/dn3w65jwf1wzpc7yxqtf.jpg','khác','á',NULL,NULL,NULL,NULL),(9,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766470532/quwr6xrzabiavzgv5tlw.jpg','dbrr','dmm',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `userpassword` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `profile_picture_url` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'admin','a@gmail.com','1234','Nien','Nguyen',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-25  8:43:55
