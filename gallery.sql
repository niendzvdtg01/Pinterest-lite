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
  `photo_id` bigint DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `unsplash_id` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`favourite_id`),
  KEY `FKcnu0jcg6e6utp313rqe0glgxy` (`photo_id`),
  KEY `FKi68ummm2qp5pdpofauu8w2qbu` (`user_id`),
  KEY `fk_favourite_unsplash` (`unsplash_id`),
  CONSTRAINT `fk_favourite_unsplash` FOREIGN KEY (`unsplash_id`) REFERENCES `UnsplashPhto` (`unsplash_id`),
  CONSTRAINT `FKcnu0jcg6e6utp313rqe0glgxy` FOREIGN KEY (`photo_id`) REFERENCES `Photos` (`photo_id`),
  CONSTRAINT `FKi68ummm2qp5pdpofauu8w2qbu` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favourite`
--

LOCK TABLES `Favourite` WRITE;
/*!40000 ALTER TABLE `Favourite` DISABLE KEYS */;
INSERT INTO `Favourite` VALUES (1,1,1,NULL),(2,NULL,2,'D43JYb0yTKU'),(3,NULL,2,'D43JYb0yTKU'),(4,NULL,2,'VOHmh4pEOls'),(5,NULL,2,'VOHmh4pEOls'),(6,11,2,NULL),(8,NULL,2,'xgpHE0yCi60'),(9,NULL,2,'o13Kf-vToqM'),(11,NULL,2,'DdcWKBbJeEI'),(12,10,2,NULL),(14,NULL,2,'yPBP2u24rMs'),(15,NULL,2,'oUt6S9R0aCs'),(16,NULL,2,'OKMDLySi5uw'),(17,NULL,2,'2ABMS-QQz9g'),(18,NULL,2,'S0b7EKTOeV8'),(19,NULL,2,'S0b7EKTOeV8'),(20,NULL,2,'EK--nAm-CYM'),(21,NULL,2,'EK--nAm-CYM'),(22,NULL,2,'B3y-Uz9DLS0'),(23,NULL,2,'B3y-Uz9DLS0'),(24,11,2,NULL),(25,NULL,2,'MgAOFMRedCI'),(26,NULL,2,'r7fhyTCtKAM'),(27,NULL,2,'r7fhyTCtKAM'),(29,NULL,2,'XGIIg97kC6w'),(30,NULL,3,'5KSXpLJRw8o'),(32,NULL,3,'DWv3vEGKW1E'),(33,NULL,3,'q4KWiWgZ41Q'),(34,10,3,NULL),(36,NULL,3,'9cmbLTARQMA'),(37,NULL,3,'PmeOI2O4eiA'),(38,14,3,NULL),(39,NULL,3,'9iibZM9IOho'),(40,NULL,3,'TXdLi87NmJQ'),(41,NULL,3,'vBUGdI7JAvc'),(42,NULL,3,'9iibZM9IOho'),(43,NULL,3,'tkoA1sWwHUg'),(44,10,3,NULL),(45,6,3,NULL),(46,NULL,3,'TXdLi87NmJQ'),(47,11,3,NULL),(48,10,3,NULL),(49,10,3,NULL),(50,10,3,NULL),(52,NULL,3,'rKdG42oAfSY'),(54,NULL,3,'vCv9OUtcXMQ'),(55,NULL,3,'rKdG42oAfSY'),(56,NULL,3,'p2GsDw5e1pU'),(57,NULL,3,'iFx1WMvjvpw'),(58,NULL,3,'iFx1WMvjvpw'),(59,NULL,3,'iFx1WMvjvpw'),(60,NULL,3,'iFx1WMvjvpw'),(63,NULL,3,'Myx04QnYtqE'),(64,NULL,3,'Myx04QnYtqE'),(65,NULL,3,'Myx04QnYtqE'),(66,NULL,3,'Myx04QnYtqE'),(67,NULL,3,'Myx04QnYtqE'),(68,NULL,3,'rKdG42oAfSY'),(69,NULL,3,'4VYN52tBzGs'),(70,NULL,3,'gMfX1tDGKgA');
/*!40000 ALTER TABLE `Favourite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Feedback`
--

DROP TABLE IF EXISTS `Feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Feedback` (
  `feedback_id` bigint NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `score` int DEFAULT NULL,
  `score_reason` varchar(255) DEFAULT NULL,
  `improvement` varchar(255) DEFAULT NULL,
  `good_experience` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`feedback_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Feedback`
--

LOCK TABLES `Feedback` WRITE;
/*!40000 ALTER TABLE `Feedback` DISABLE KEYS */;
INSERT INTO `Feedback` VALUES (1,NULL,'duynien34@gmail.com',0,'asad','ádsad','asdsad'),(2,NULL,'duynien34@gmail.com',0,'asad','ádsad','asdsad'),(3,'Nien','duynien34@gmail.com',0,'áadsa','đấ','ádsd'),(4,'Nien','duynien34@gmail.com',4,'Niên đẹp zai quá','Làm tôt lắm rồi','jsahnd'),(5,'Nien','a@gmail.com',9,'as','dasd','sfsf');
/*!40000 ALTER TABLE `Feedback` ENABLE KEYS */;
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
  PRIMARY KEY (`photo_id`),
  KEY `FKkuv7l5ewhnkdl8q2wi9ynawct` (`user_id`),
  CONSTRAINT `FKkuv7l5ewhnkdl8q2wi9ynawct` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Photos`
--

LOCK TABLES `Photos` WRITE;
/*!40000 ALTER TABLE `Photos` DISABLE KEYS */;
INSERT INTO `Photos` VALUES (1,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766162141/poimuvdomoh08x4h6tbh.png','asada','asad',NULL,NULL,NULL,NULL),(6,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766197537/xofwfwldiw4mw9yqqlrh.png','kjkj','cbvv',NULL,NULL,NULL,NULL),(7,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1766224410/iacg7diwfviuilx9n8by.png','kaskajs','hahsja',NULL,NULL,NULL,NULL),(10,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1767002553/ysu8wzqo8flf8vjgwb5l.webp','lol','test thu',NULL,NULL,NULL,NULL),(11,NULL,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1768016004/njdv4epj7sju1ozstlo2.jpg','lol','ảnh như cức',NULL,NULL,NULL,NULL),(14,2,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1768744203/cu4lsupzlweatftcq7wh.jpg','lol','jnn',NULL,NULL,NULL,NULL),(15,2,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1768831444/o2yr3pbvkrjdm0duaf4c.png','vcvc','xvxvx',NULL,NULL,NULL,NULL),(16,2,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1768831670/qy23r0ridgyam2xdrgxq.jpg','vfxf','dfdsg',NULL,NULL,NULL,NULL),(17,3,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1768840188/qjxrf1v9somzwjmcgumi.jpg','zxas','sasa',NULL,NULL,NULL,NULL),(19,3,'http://res.cloudinary.com/dqbhgxlyx/image/upload/v1769248397/fdfeaukpt4kgauc6rtex.jpg','cc','cc',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UnsplashPhto`
--

DROP TABLE IF EXISTS `UnsplashPhto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UnsplashPhto` (
  `unsplash_id` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `unsplash_title` varchar(255) DEFAULT NULL,
  `unsplash_description` varchar(255) DEFAULT NULL,
  `unsplash_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`unsplash_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UnsplashPhto`
--

LOCK TABLES `UnsplashPhto` WRITE;
/*!40000 ALTER TABLE `UnsplashPhto` DISABLE KEYS */;
INSERT INTO `UnsplashPhto` VALUES ('-B08G1PVFMs','Samuel Regan-Asante','L','https://images.unsplash.com/photo-1678221514434-2a2093234623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxfHxsfGVufDB8fHx8MTc2ODE5MzQ1N3ww&ixlib=rb-4.1.0&q=80&w=400'),('-DLso_t4BFs','Stan Jacobs',NULL,'https://images.unsplash.com/photo-1768930663983-cb33425a7969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwzfHx8fHx8fHwxNzY5MTQyNjg2fA&ixlib=rb-4.1.0&q=80&w=400'),('0CL5pgXi1wQ','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839258830-81f87b1c6d62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY3MDY3NDAxfA&ixlib=rb-4.1.0&q=80&w=400'),('12ktXGb8fS8','Spencer Plouzek',NULL,'https://images.unsplash.com/photo-1764083029040-a803c4924d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw1fHx8fHx8fHwxNzY3MDY3NDAxfA&ixlib=rb-4.1.0&q=80&w=400'),('2ABMS-QQz9g','Danny Greenberg',NULL,'https://images.unsplash.com/photo-1765768169488-a5575f71e790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwzfHx8fHx8fHwxNzY4MjA3MTgyfA&ixlib=rb-4.1.0&q=80&w=400'),('3xoBrrB4tAU','Anto Fredric',NULL,'https://images.unsplash.com/photo-1549972490-028aeca03fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxfHxpfGVufDB8fHx8MTc2OTI0ODEyN3ww&ixlib=rb-4.1.0&q=80&w=400'),('442Ih9W-xNI','Jean Carlo Emer',NULL,'https://images.unsplash.com/photo-1768137580619-76d7adbd8663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwyfHx8fHx8fHwxNzY5MjQ3MDY2fA&ixlib=rb-4.1.0&q=80&w=400'),('4VYN52tBzGs','Kanika Kishore','M&M Cookies and Milk','https://images.unsplash.com/photo-1675062521165-737ab1f237e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxN3x8bXxlbnwwfHx8fDE3NjkyNDgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=400'),('5KSXpLJRw8o','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY4ODM4NjA5fA&ixlib=rb-4.1.0&q=80&w=400'),('5nf4pMADaFA','Nik Iurev','A boardwalk disappearing into the fog.','https://images.unsplash.com/photo-1762103336957-50ab747ca170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw3fHx8fHx8fHwxNzY3MDY3NDAxfA&ixlib=rb-4.1.0&q=80&w=400'),('5vVjIErxZlo','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY4MDE1ODc5fA&ixlib=rb-4.1.0&q=80&w=400'),('7BXmH9YzNAI','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257513-a921710a4291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY3MDgwOTg1fA&ixlib=rb-4.1.0&q=80&w=400'),('876UDhEV8EY','PJH',NULL,'https://images.unsplash.com/photo-1765004775664-24306ca36b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMXx8fHx8fHx8MTc2NzYwNTQ3NHw&ixlib=rb-4.1.0&q=80&w=400'),('8yrBN0oeC1g','Erwan Hesry',NULL,'https://images.unsplash.com/photo-1768981931384-8f8f170043b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwyMHx8fHx8fHx8MTc2OTI0NzA2Nnw&ixlib=rb-4.1.0&q=80&w=400'),('93RD9kKxRpc','jiang chen',NULL,'https://images.unsplash.com/photo-1766031937073-c708bd5a4d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMnx8fHx8fHx8MTc2NzA4MDk4NXw&ixlib=rb-4.1.0&q=80&w=400'),('9cmbLTARQMA','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257946-4616bcfafec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxNXx8fHx8fHx8MTc2NzA3NTM2Mnw&ixlib=rb-4.1.0&q=80&w=400'),('9iibZM9IOho','Takashi S',NULL,'https://images.unsplash.com/photo-1763069228076-c7e3995e1769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw5fHx8fHx8fHwxNzY5MTQyNjg2fA&ixlib=rb-4.1.0&q=80&w=400'),('9NL659B5zHo','Nate Holland',NULL,'https://images.unsplash.com/photo-1764147385316-a93f2635e7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw0fHx8fHx8fHwxNzY4MTQ1NzY1fA&ixlib=rb-4.1.0&q=80&w=400'),('A5xiXjyxmAU','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839256840-7780a45b85dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY3Njg0NDc1fA&ixlib=rb-4.1.0&q=80&w=400'),('aBqgfcyn06Y','Irvin Aloise','View from an ice cave over Europe\'s largest glacier.','https://images.unsplash.com/photo-1765132875547-9a126aa6e7c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNnx8fHx8fHx8MTc2ODE5MjI2Mnw&ixlib=rb-4.1.0&q=80&w=400'),('B3y-Uz9DLS0','Mago Brown',NULL,'https://images.unsplash.com/photo-1767858874498-8fd814ef8548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw1fHx8fHx8fHwxNzY4MzYxMjY0fA&ixlib=rb-4.1.0&q=80&w=400'),('BlXa_riHlp4','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257664-ecba169506c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHw4fHx8fHx8fHwxNzY3NzYyMTExfA&ixlib=rb-4.1.0&q=80&w=400'),('bz77qyB-yoo','Roberto Shumski',NULL,'https://images.unsplash.com/photo-1765873360422-d6803b4ce375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw1fHx8fHx8fHwxNzY4MDE1ODc5fA&ixlib=rb-4.1.0&q=80&w=400'),('B_EwjwJ_6qI','Haewon Oh',NULL,'https://images.unsplash.com/photo-1766524871285-d480698db223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNHx8fHx8fHx8MTc2NzA2NzQwMXw&ixlib=rb-4.1.0&q=80&w=400'),('D43JYb0yTKU','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839256547-0a1cd11b6dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY4MTkyMjYyfA&ixlib=rb-4.1.0&q=80&w=400'),('d4_aCS3jsQ0','Alexander Shatov','X com 3d Icon Concept. Dark Mode Style. Write me, if you need similar icons for your products 🖤','https://images.unsplash.com/photo-1690138871287-02b2fc3b87c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxfHx4fGVufDB8fHx8MTc2ODMxNzcwM3ww&ixlib=rb-4.1.0&q=80&w=400'),('DdcWKBbJeEI','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257961-4dce65b72d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHw4fHx8fHx8fHwxNzY4MjEwNDE1fA&ixlib=rb-4.1.0&q=80&w=400'),('dlu8iix2Vvw','Jorgen Hendriksen','City lights.','https://images.unsplash.com/photo-1765217993991-6a921a4deb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxM3x8fHx8fHx8MTc2NzYwNTQ3NHw&ixlib=rb-4.1.0&q=80&w=400'),('DWv3vEGKW1E','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257864-c6ccab7238de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY4OTIzMDE2fA&ixlib=rb-4.1.0&q=80&w=400'),('EK--nAm-CYM','Hong Anh Duong','Colors of Pho 🍜','https://images.unsplash.com/photo-1590420882553-4f9150b71f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwyfHx2aWV0fGVufDB8fHx8MTc2ODMxNzkyN3ww&ixlib=rb-4.1.0&q=80&w=400'),('ENKh0qeAsf0','Anne Nygård',NULL,'https://images.unsplash.com/photo-1618588429012-0559f1cbc5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxNXx8Y3xlbnwwfHx8fDE3NjkyNDc2MDB8MA&ixlib=rb-4.1.0&q=80&w=400'),('F1kdhg7JUoQ','Kristaps Ungurs',NULL,'https://images.unsplash.com/photo-1767893609796-ad172b2112c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxN3x8fHx8fHx8MTc2ODE5MjI2Mnw&ixlib=rb-4.1.0&q=80&w=400'),('Fmq957Y5BQs','Brooke Balentine',NULL,'https://images.unsplash.com/photo-1768862120460-888552104ea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNnx8fHx8fHx8MTc2OTI0NjQxNnw&ixlib=rb-4.1.0&q=80&w=400'),('gMfX1tDGKgA','Chandler Cruttenden','Shot on Canon Elan II with Canon 70-200mm f/2.8 Kodak Gold 200','https://images.unsplash.com/photo-1763848844837-1240b4e2e0bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwyfHx8fHx8fHwxNzY5Mzk1MTU5fA&ixlib=rb-4.1.0&q=80&w=400'),('Gth9FScaFCk','Niklas König',NULL,'https://images.unsplash.com/photo-1748543069598-0e12e3b6e412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw0fHx8fHx8fHwxNzY3MzUwNzU3fA&ixlib=rb-4.1.0&q=80&w=400'),('iFx1WMvjvpw','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxNXx8fHx8fHx8MTc2OTI0NzA2Nnw&ixlib=rb-4.1.0&q=80&w=400'),('IYLLF511aOY','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839258420-5c3e2f2e2a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxNXx8fHx8fHx8MTc2ODIwNzE4Mnw&ixlib=rb-4.1.0&q=80&w=400'),('jashdkja','ajshajs','askdnakd','hdasjkd'),('l6Kiug6dM04','mos design',NULL,'https://images.unsplash.com/photo-1768898795111-7c56e72fc592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxM3x8fHx8fHx8MTc2OTI0NzA2Nnw&ixlib=rb-4.1.0&q=80&w=400'),('LRlnqn9bRZs','JC Gellidon','Universal Studios Singapore','https://images.unsplash.com/photo-1768879051946-4984246ed043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMHx8fHx8fHx8MTc2OTI0NjQxNnw&ixlib=rb-4.1.0&q=80&w=400'),('LsWbNBy1_Dk','Hacı Elmas','Pomegranate.','https://images.unsplash.com/photo-1611529695923-50eb2839d485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHw5fHxuYXJ8ZW58MHx8fHwxNzY4MTkzNzA1fDA&ixlib=rb-4.1.0&q=80&w=400'),('m9cBmbOQCmQ','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839258568-fd466a93f68b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHw4fHx8fHx8fHwxNzY3MDc1MzYyfA&ixlib=rb-4.1.0&q=80&w=400'),('MdcJY5doCTo','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839256545-4268b03606c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY5Mzk1MTU5fA&ixlib=rb-4.1.0&q=80&w=400'),('MgAOFMRedCI','Unavailable Photographer',NULL,'https://images.unsplash.com/photo-1768001151324-42ae92c70b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxM3x8fHx8fHx8MTc2ODM2NDQzOHw&ixlib=rb-4.1.0&q=80&w=400'),('Myx04QnYtqE','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257874-e56dfa2260cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHw4fHx8fHx8fHwxNzY5MjQ3MDY2fA&ixlib=rb-4.1.0&q=80&w=400'),('nIfrm5Y91Jc','Alex Beauchamp',NULL,'https://images.unsplash.com/photo-1760898229135-9a3d5b024bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxMHx8bXxlbnwwfHx8fDE3NjkyNDgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=400'),('o13Kf-vToqM','Jack Stapleton',NULL,'https://images.unsplash.com/photo-1767915051386-23f52aa8cb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxOHx8fHx8fHx8MTc2ODE5MjI2Mnw&ixlib=rb-4.1.0&q=80&w=400'),('OCLKTj14vIA','Texco Kwok','Home with plants.','https://images.unsplash.com/photo-1648275115509-8e81cebdf925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxfHxrYXxlbnwwfHx8fDE3NjgxOTM1MTF8MA&ixlib=rb-4.1.0&q=80&w=400'),('OKMDLySi5uw','Sofia Lasheva',NULL,'https://images.unsplash.com/photo-1767958465025-75c050ab10c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwzfHx8fHx8fHwxNzY4MzE2ODk2fA&ixlib=rb-4.1.0&q=80&w=400'),('oUt6S9R0aCs','Zongnan Bao','San Francisco Walk 004','https://images.unsplash.com/photo-1768108662268-583d5d29b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw2fHx8fHx8fHwxNzY4MjIzNDI4fA&ixlib=rb-4.1.0&q=80&w=400'),('p2GsDw5e1pU','Daniil Silantev',NULL,'https://images.unsplash.com/photo-1768969874178-4aea098d11fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNHx8fHx8fHx8MTc2OTI0NzA2Nnw&ixlib=rb-4.1.0&q=80&w=400'),('p9RU1DWwasQ','Ruben Mavarez','Afternoon light finding its way into the kitchen. Nothing special. Everything familiar.','https://images.unsplash.com/photo-1768853143269-0891428c95b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNHx8fHx8fHx8MTc2OTM5NTE1OXw&ixlib=rb-4.1.0&q=80&w=400'),('PCITNW3g85Q','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHw4fHx8fHx8fHwxNzY3MDgwOTg1fA&ixlib=rb-4.1.0&q=80&w=400'),('Pk1MrGNquo8','Nik Iurev','Fog drifting through the mountains — captured on Sony A7 IV in Newfoundland.','https://images.unsplash.com/photo-1762291834384-09118dda091d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMXx8fHx8fHx8MTc2NzA3NTM2Mnw&ixlib=rb-4.1.0&q=80&w=400'),('PmeOI2O4eiA','Uran Wang','A Quiet Ride Through London','https://images.unsplash.com/photo-1766365076306-419d3349ba12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMHx8fHx8fHx8MTc2ODkyMzAxNnw&ixlib=rb-4.1.0&q=80&w=400'),('q4KWiWgZ41Q','Jack Stapleton',NULL,'https://images.unsplash.com/photo-1768076644388-b42d2e7aea16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNHx8fHx8fHx8MTc2ODkyMzAxNnw&ixlib=rb-4.1.0&q=80&w=400'),('r7fhyTCtKAM','Damir Yakupov','Night mode','https://images.unsplash.com/photo-1606989156780-2498200fb423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHw0fHxtNGF8ZW58MHx8fHwxNzY4MzY1MDQ1fDA&ixlib=rb-4.1.0&q=80&w=400'),('Ritt3R2EB_Q','SarahCreates','blush pink fresh seasonal flowers in bouquet - hydrangea and dahlia','https://images.unsplash.com/photo-1768861020377-3fdead073d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMXx8fHx8fHx8MTc2OTI0NjQxNnw&ixlib=rb-4.1.0&q=80&w=400'),('rKdG42oAfSY','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257165-44f08ed617c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY5MjQ3MDY2fA&ixlib=rb-4.1.0&q=80&w=400'),('RmKYbYZnbdw','Collins Lesulie',NULL,'https://images.unsplash.com/photo-1764966894769-4b2944571d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMHx8fHx8fHx8MTc2NzYwNTQ3NHw&ixlib=rb-4.1.0&q=80&w=400'),('S0b7EKTOeV8','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257475-4ca368dae6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHw4fHx8fHx8fHwxNzY4MzE2ODk2fA&ixlib=rb-4.1.0&q=80&w=400'),('sa2FPiZ3J3g','Daniel Gomez',NULL,'https://images.unsplash.com/photo-1767199289295-30e08f769c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNHx8fHx8fHx8MTc2NzM1MDc1N3w&ixlib=rb-4.1.0&q=80&w=400'),('skajska','askja','asklas','aksja'),('SZEcxuDvqdM','Mago Brown',NULL,'https://images.unsplash.com/photo-1767859306038-4a5f26e8f324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxOXx8fHx8fHx8MTc2ODIxMDQxNXw&ixlib=rb-4.1.0&q=80&w=400'),('tkoA1sWwHUg','Fabrice Villard','Fog','https://images.unsplash.com/photo-1768808520785-a4ce8c12c335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxOHx8fHx8fHx8MTc2OTE0MjY4Nnw&ixlib=rb-4.1.0&q=80&w=400'),('TXdLi87NmJQ','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839257287-3030c9300ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY5MTQyNjg2fA&ixlib=rb-4.1.0&q=80&w=400'),('UnSFmJCCrW0','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839256791-6a93f89fb8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY5MjQ2NDE2fA&ixlib=rb-4.1.0&q=80&w=400'),('uqWmUTvnOeI','Wwwwww Lu',NULL,'https://images.unsplash.com/photo-1767875762123-ef62592784f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxNHx8fHx8fHx8MTc2ODE5MjI2Mnw&ixlib=rb-4.1.0&q=80&w=400'),('vBUGdI7JAvc','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839256602-0e28a5ab928d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxNXx8fHx8fHx8MTc2OTE0MjY4Nnw&ixlib=rb-4.1.0&q=80&w=400'),('vCv9OUtcXMQ','Leo_Visions',NULL,'https://images.unsplash.com/photo-1768889098025-42a200b21e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw3fHx8fHx8fHwxNzY5MjQ2NDE2fA&ixlib=rb-4.1.0&q=80&w=400'),('vnRmPkAdZJw','Karoline Morone','Vietnã','https://images.unsplash.com/photo-1727204719868-e58383652ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwxfHx2aWV0bmF8ZW58MHx8fHwxNzY4MzE3OTI4fDA&ixlib=rb-4.1.0&q=80&w=400'),('VOHmh4pEOls','雙 film',NULL,'https://images.unsplash.com/photo-1767840915620-b74ec958ae6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMXx8fHx8fHx8MTc2ODIwNzE4Mnw&ixlib=rb-4.1.0&q=80&w=400'),('VotK70bRo0U','Aleksandra Dementeva','Bedroom style. Shooting for a homestager','https://images.unsplash.com/photo-1766245456897-5c86726d084d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHw3fHx8fHx8fHwxNzY4MTkyMjYyfA&ixlib=rb-4.1.0&q=80&w=400'),('XGIIg97kC6w','Florian Schindler',NULL,'https://images.unsplash.com/photo-1768590238659-b401ffa9571e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwyfHx8fHx8fHwxNzY4ODMxMDY4fA&ixlib=rb-4.1.0&q=80&w=400'),('xgpHE0yCi60','Kristaps Ungurs',NULL,'https://images.unsplash.com/photo-1767891635138-03833168bd89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMnx8fHx8fHx8MTc2ODE5MjI2Mnw&ixlib=rb-4.1.0&q=80&w=400'),('yb7CTsK9s_0','Syahril Fadillah',NULL,'https://images.unsplash.com/photo-1633309940683-24693e3c9c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfHNlYXJjaHwzMHx8bXxlbnwwfHx8fDE3NjkyNDgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=400'),('yCrSW_QEC1k','Mario Scheibl',NULL,'https://images.unsplash.com/photo-1765706729858-76ae4bcd2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxMnx8fHx8fHx8MTc2ODAxNTg3OXw&ixlib=rb-4.1.0&q=80&w=400'),('yPBP2u24rMs','Land O\'Lakes, Inc.',NULL,'https://images.unsplash.com/photo-1761839259112-aaea03db3633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MXwxfGFsbHwxfHx8fHx8fHwxNzY4Mjk0OTA3fA&ixlib=rb-4.1.0&q=80&w=400'),('Z-XSDNJfNPA','Claudio Poggio','Palazzo Fidia','https://images.unsplash.com/photo-1766351826045-d5d08890e1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxOHx8fHx8fHx8MTc2NzA4MDk4NXw&ixlib=rb-4.1.0&q=80&w=400'),('ZOaUzMvOKj4','Vitaliy Shevchenko',NULL,'https://images.unsplash.com/photo-1766964855974-1dfcf5107823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDkzODR8MHwxfGFsbHwxM3x8fHx8fHx8MTc2NzA2NzQwMXw&ixlib=rb-4.1.0&q=80&w=400');
/*!40000 ALTER TABLE `UnsplashPhto` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'admin','a@gmail.com','1234','Nien','Nguyen',NULL,NULL,NULL),(2,'niendz','b@gmail.com','lolse123','sirr','Nien','http://res.cloudinary.com/dqbhgxlyx/image/upload/v1768836034/ghsyjnqkco3rmyxy1ko3.jpg','sadasfasf',NULL),(3,'nienkk','a@gmail.com','$2a$10$RYwdjlbv7Ki4rlBph72Fbuh7RhPmR09z4l11FrpmuNBesTCEuH4AS','Nien','Nguyen','http://res.cloudinary.com/dqbhgxlyx/image/upload/v1769248703/z4ugcvocgw9q66sc5txb.jpg','Nien la thang ngu nhat the gioi',NULL);
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

-- Dump completed on 2026-01-26  3:39:40
