-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: tuto_react
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1
--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `users`
--
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isVerified` tinyint NOT NULL DEFAULT '0',
  `isAdmin` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `articles` VALUES (10,'title7',22),(11,'title86',22),(27,'title',1);
INSERT INTO `users` VALUES (1,'test','test@test.test','$2b$10$9mWkWtWeFvX0l2tw23VhZudfATK40C7ZdEJbbMScE0d/3Fc1qQSQa',1,1),(2,'bruno','bruno@bruno.fr','$2b$10$sVjCa4fKo2Yo3QHO2hknu.HC7crWdhQZBkufFmsL.oMk4vDDpr1lq',0,0),(3,'dr kush','drkushikush@gmail.com','1234',0,0),(4,'Hsuk rD','hsukrdev@gmail.com','$2b$10$hmkXoFAwoh5ZAHZOwHvOV.1MZp5F3dwMm0ZGcxbmU4k3rYQ/LujYm',0,0),(5,'leo','leo@leo.fr','$2b$10$H4Dg9yP5UKDgin3LUvGEBeEaj.hekqEJs.sRyXooyyFljAcILgsu.',0,0),(6,'kush','kush@kush.com','$2b$10$PhZwVukeJldwCqWVNbY9oe.OOzuBitAI91PX6hQL3GvpETyDoQhoG',1,1);

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
-- CREATE USER 'tuto'@'localhost'IDENTIFIED WITH mysql_native_password BY 'tuto';
-- GRANT ALL PRIVILEGES ON tuto_react.*  TO 'tuto'@'localhost';
-- FLUSH PRIVILEGES;