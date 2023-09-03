-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.43-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for vlrpt
DROP DATABASE IF EXISTS `vlrpt`;
CREATE DATABASE IF NOT EXISTS `vlrpt` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `vlrpt`;

-- Dumping structure for table vlrpt.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(16) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `Email` varchar(320) NOT NULL,
  `Role` varchar(10) NOT NULL DEFAULT 'user',
  `DiscordId` varchar(20) NOT NULL DEFAULT '0',
  `RegisterDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LastLoginDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table vlrpt.users: ~1 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`ID`, `Username`, `Password`, `Email`, `Role`, `DiscordId`, `RegisterDate`, `LastLoginDate`) VALUES
	(1, 'OOOOOOOOOOOOOOOO', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', '123', 'user', '123', '2023-09-03 03:35:53', '2023-09-03 03:35:53');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
