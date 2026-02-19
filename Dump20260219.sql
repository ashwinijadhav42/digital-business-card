-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: digital_card
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_blogs`
--

DROP TABLE IF EXISTS `add_blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_blogs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(5000) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_blogs`
--

LOCK TABLES `add_blogs` WRITE;
/*!40000 ALTER TABLE `add_blogs` DISABLE KEYS */;
INSERT INTO `add_blogs` VALUES (1,'new blogs','1770785528839_blog1.jpg','2026-02-09','Daily blogs',_binary ''),(2,'dhhbsc','1770785831170_blog2.jpg','2026-02-02','New blogs ',_binary ''),(3,'hvbn','1770786146462_blog3.jpg','2026-02-13','updated blogs',_binary ''),(4,'hvbm','1770786187276_blog1.jpg','2026-02-13','vbn v',_binary '');
/*!40000 ALTER TABLE `add_blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_cards`
--

DROP TABLE IF EXISTS `doctor_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_cards` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `hospital_name` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `is_public` bit(1) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `template_type` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_l3q3dbknou6gdapray5e7d1gl` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_cards`
--

LOCK TABLES `doctor_cards` WRITE;
/*!40000 ALTER TABLE `doctor_cards` DISABLE KEYS */;
INSERT INTO `doctor_cards` VALUES ('ab23a662-36ff-438b-b700-3bf9382095b9','Sambhajinagar','MBBS','Master of Surgery','ashwini@gmail.com','ashwini jadhav','MGM Hospital','ashwini jadhav',_binary '','ashwini jadhav','blob:http://localhost:3000/3721d93e-9e6b-44e8-9a56-248bee0033b5','Ashwini Jadhav','1223334568','dr_ashwini_jadhav','template1','10 AM to 7 PM','1223334568','ashwini jadhav'),('fdc1abce-406b-44de-ab09-f918c132d96f','Sambhajinagar','MBBS','Master of Surgery','ashwini@gmail.com','ashwini jadhav','MGM Hospital','ashwini jadhav',_binary '','ashwini jadhav','blob:http://localhost:3000/3721d93e-9e6b-44e8-9a56-248bee0033b5','Ashwini Jadhav','1223334568','dr_ashwini_jadhav_1771314516864','template2','10 AM to 7 PM','1223334568','ashwini jadhav');
/*!40000 ALTER TABLE `doctor_cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `features` (
  `id` int DEFAULT NULL,
  `active` int DEFAULT NULL,
  `name` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES (1,1,'WhatsApp Sharing'),(2,1,'Email Sharing'),(3,1,'Custom Branding'),(4,1,'Analytics Dashboard'),(5,1,'Unlimited Leads'),(6,1,'Priority Support'),(8,1,'Default Feature'),(14,1,'hghg');
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricing_features`
--

DROP TABLE IF EXISTS `pricing_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pricing_features` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `feature` varchar(255) DEFAULT NULL,
  `pricing_plan_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKy6s0d1klqx1uiadka0jyu2gu` (`pricing_plan_id`),
  CONSTRAINT `FKy6s0d1klqx1uiadka0jyu2gu` FOREIGN KEY (`pricing_plan_id`) REFERENCES `pricing_plans` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricing_features`
--

LOCK TABLES `pricing_features` WRITE;
/*!40000 ALTER TABLE `pricing_features` DISABLE KEYS */;
INSERT INTO `pricing_features` VALUES (1,'editable',NULL),(2,'shareblae link',3),(5,'3 daily update',6),(6,'daily update',7),(7,'2 daily update',7),(8,'3 daily update',7),(10,'10 daily update',1),(11,'20 daily update',1),(12,'30 daily update',1),(13,'digital card',3),(14,'qr cod e',8),(15,'sharable',8),(16,'40 daily update',1),(22,'nfmnd',13),(23,'60 daily update',1),(24,'50',1),(25,'cvnb',14),(26,'cvnb',15),(27,'jskdab',14),(28,'jskdab',15),(29,'cvnb',16),(30,'jskdab',16);
/*!40000 ALTER TABLE `pricing_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricing_plan_features`
--

DROP TABLE IF EXISTS `pricing_plan_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pricing_plan_features` (
  `pricing_plan_id` int DEFAULT NULL,
  `feature_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricing_plan_features`
--

LOCK TABLES `pricing_plan_features` WRITE;
/*!40000 ALTER TABLE `pricing_plan_features` DISABLE KEYS */;
INSERT INTO `pricing_plan_features` VALUES (6,1),(7,1),(6,2),(7,2),(8,2),(6,3),(7,3),(8,3),(6,4),(7,4),(6,5),(7,5),(8,5),(6,6),(7,6);
/*!40000 ALTER TABLE `pricing_plan_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricing_plans`
--

DROP TABLE IF EXISTS `pricing_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pricing_plans` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `duration` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricing_plans`
--

LOCK TABLES `pricing_plans` WRITE;
/*!40000 ALTER TABLE `pricing_plans` DISABLE KEYS */;
INSERT INTO `pricing_plans` VALUES (1,'10 day',199,'ACTIVE','30 daily'),(3,'3 Month',499,'ACTIVE','three monthly'),(6,'10 day',99,'ACTIVE','10 daily'),(7,'10 day',199,'ACTIVE','20 daily'),(8,'1 month',300,'ACTIVE','Simple'),(13,'1.5',300,'ACTIVE','ashu thorat'),(14,'3',34,'ACTIVE','dcbgs'),(15,'3',34,'ACTIVE','dcbgs'),(16,'3',34,'ACTIVE','dcbgs');
/*!40000 ALTER TABLE `pricing_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates_category`
--

DROP TABLE IF EXISTS `templates_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templates_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates_category`
--

LOCK TABLES `templates_category` WRITE;
/*!40000 ALTER TABLE `templates_category` DISABLE KEYS */;
INSERT INTO `templates_category` VALUES (1,'Perfect professional for clinics & hospitals ','1770715641061_doctorImg1.jpg',1,'Doctor','doctor'),(2,'Perfect for professionals & companies','corporateImg.jpg',1,'Corporate','corporate'),(4,'Perfect for designers, developers & creators','realEstateImg.jpg',1,'Real Estate','realestate'),(14,'professional 3d engineer','1770703112302_Freelancer Templates.png',1,'3D design er','freelancer'),(15,'professional artist','1770706114380_CorporateProfile.jpg',1,'Makeup Artist',NULL),(23,'profesional Freelancer developer','1771414766424_CorporateProfile.jpg',1,'Freelancer','freelancer');
/*!40000 ALTER TABLE `templates_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_63cf888pmqtt5tipcne79xsbm` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ashwini','1234567891','12345'),(2,'nisha','9876543211','1234@nisha');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'digital_card'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-19 10:24:19
