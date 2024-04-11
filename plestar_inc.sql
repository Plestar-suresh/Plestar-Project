-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 11, 2024 at 11:42 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `plestar_inc`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `fullname` varchar(300) NOT NULL DEFAULT '',
  `password` varchar(500) NOT NULL DEFAULT '',
  `employeeid` varchar(300) NOT NULL DEFAULT '',
  `mobileno` varchar(50) NOT NULL,
  `email` varchar(300) NOT NULL DEFAULT '',
  `address` varchar(800) NOT NULL DEFAULT '',
  `gender` varchar(30) NOT NULL DEFAULT '',
  `created_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `fullname`, `password`, `employeeid`, `mobileno`, `email`, `address`, `gender`, `created_date`) VALUES
(23, 'Sureshkumar', '$2b$10$apLjGNnb87WCGtS8BfKd0uObRGcSQ6tFQ83wanDpoaZLuKoWcLWw6', '123', '8148442357', '', '', '', '2024-04-10'),
(24, 'sdfasd', '$2b$10$dNyXSQX3uYNnuqGSJFfZ/etGF/9/0HgrH4ti00tE3WSS4V0T8FBTa', '1234', '234213', '', '', '', '2024-04-10'),
(25, 'Sureshkumar', '$2b$10$qw3pudPx4/zPy5nDrxwQlOuInvBZwHaT.DSEuXHbjhaRPYJW4Hm.2', '2312', '234123', '', '', '', '2024-04-10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
