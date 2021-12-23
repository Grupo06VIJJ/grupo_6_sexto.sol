CREATE DATABASE  IF NOT EXISTS `vivero_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `vivero_database`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: vivero_database
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `quantity_S` int(10) unsigned DEFAULT 0,
  `quantity_M` int(10) unsigned DEFAULT 0,
  `quantity_L` int(10) unsigned DEFAULT 0,
  `image_1` varchar(100) DEFAULT 'default-image.svg',
  `image_2` varchar(100) DEFAULT 'default-image.svg',
  `image_3` varchar(100) DEFAULT 'default-image.svg',
  `category_id` int(10) unsigned NOT NULL,
  `material_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `material_id` (`material_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cola de Tigre','Planta grande y colorida',500.00,20,6,12,'img-rosas-rojas.jpg','default-image.svg','default-image.svg',1,1,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(2,'Monstera deliciosa','Planta grande y colorida',600.00,20,20,10,'img-rosas-rojas.jpg','default-image.svg','default-image.svg',1,2,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(3,'Potus','Planta grande y colorida',800.00,12,15,15,'img-rosas-rojas.jpg','default-image.svg','default-image.svg',1,1,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(4,'Aloe Vera','Planta grande y colorida',1500.00,15,8,2,'img-rosas-rojas.jpg','img-rosas-rojas.jpg','default-image.svg',1,3,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(5,'Rosas rojas','Planta grande y colorida',200.00,7,3,16,'img-rosas-rojas.jpg','default-image.svg','default-image.svg',2,2,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(6,'Begonia','Planta grande y colorida',3600.00,10,12,3,'img-rosas-rojas.jpg','default-image.svg','img-rosas-rojas.jpg',2,3,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(7,'Bromelia','Planta grande y colorida',700.00,2,10,4,'img-rosas-rojas.jpg','default-image.svg','default-image.svg',2,1,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(8,'Crisantemo amarillo','Planta grande y colorida',600.00,0,20,14,'img-rosas-rojas.jpg','default-image.svg','default-image.svg',2,1,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(9,'Rosas blancas','Planta grande y colorida',500.00,12,15,10,'default-image.svg','default-image.svg','default-image.svg',2,2,'2021-12-12 14:17:43','2021-12-12 11:17:43'),(10,'Santa Rita','Planta grande y colorida',400.00,6,11,8,'default-image.svg','default-image.svg','default-image.svg',2,3,'2021-12-12 14:17:43','2021-12-12 11:17:43');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-12 11:30:23
