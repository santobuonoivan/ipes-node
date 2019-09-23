-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-09-2019 a las 23:22:36
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ipes`
--
CREATE DATABASE IF NOT EXISTS `ipes` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci;
USE `ipes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE `alumnos` (
  `alumno_id` int(9) UNSIGNED NOT NULL,
  `dni` int(9) UNSIGNED NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `sexo` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `legajo` int(11) NOT NULL,
  `id_carrera` int(9) UNSIGNED DEFAULT NULL,
  `fechadeinscripcion` date NOT NULL,
  `modalidad` varchar(5) COLLATE latin1_spanish_ci NOT NULL,
  `turno` varchar(5) COLLATE latin1_spanish_ci NOT NULL,
  `anio_carrera` int(11) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL,
  `fechadenacimiento` date NOT NULL,
  `direccion` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `tel` varchar(25) COLLATE latin1_spanish_ci DEFAULT NULL,
  `celular` varchar(25) COLLATE latin1_spanish_ci DEFAULT NULL,
  `estadocivil` varchar(30) COLLATE latin1_spanish_ci DEFAULT NULL,
  `secundario` varchar(70) COLLATE latin1_spanish_ci DEFAULT NULL,
  `email` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `facebook` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `trabajo` varchar(70) COLLATE latin1_spanish_ci DEFAULT NULL,
  `conocio` varchar(250) COLLATE latin1_spanish_ci DEFAULT NULL,
  `promo` varchar(250) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`alumno_id`, `dni`, `nombre`, `apellido`, `sexo`, `legajo`, `id_carrera`, `fechadeinscripcion`, `modalidad`, `turno`, `anio_carrera`, `activo`, `fechadenacimiento`, `direccion`, `tel`, `celular`, `estadocivil`, `secundario`, `email`, `facebook`, `trabajo`, `conocio`, `promo`) VALUES
(1, 53679406, 'Sheryl', 'Loud', 'Female', 22, NULL, '2019-08-07', 'P', 'TM', 1, 1, '2001-01-09', '4 Burning Wood Circle', '948-553-9179', '(994) 8032814', 'casado', 'humanidades', 'sloud0@webeden.co.uk', 'sloud0', 'Environmental Specialist', NULL, NULL),
(2, 65279390, 'Antons', 'Venney', 'Male', 86, NULL, '2018-11-27', 'SP', 'TT', 2, 1, '1952-08-20', '19 7th Way', '705-916-8893', '(478) 7304846', 'casado', 'humanidades', 'avenney1@w3.org', 'avenney1', 'VP Quality Control', NULL, NULL),
(3, 94143826, 'Nehemiah', 'Tedstone', 'Male', 39, NULL, '2019-01-12', 'P', 'TM', 3, 1, '1965-06-23', '4 Marcy Pass', '431-348-2729', '(625) 2282033', 'casado', 'humanidades', 'ntedstone2@tripod.com', 'ntedstone2', 'VP Accounting', NULL, NULL),
(4, 44869128, 'Becky', 'Skelton', 'Female', 95, NULL, '2019-06-21', 'SP', 'TT', 4, 0, '1974-12-15', '261 Milwaukee Center', '937-991-7638', '(505) 9846624', 'soltero', 'naturales', 'bskelton3@g.co', 'bskelton3', 'Dental Hygienist', NULL, NULL),
(5, 50758523, 'Erhart', 'Euels', 'Male', 49, NULL, '2019-06-25', 'SP', 'TN', 5, 1, '1932-02-17', '35721 Cambridge Terrace', '940-375-6267', '(228) 1133039', 'viudo', 'humanidades', 'eeuels4@geocities.jp', 'eeuels4', 'Clinical Specialist', NULL, NULL),
(6, 66876136, 'Byram', 'Swenson', 'Male', 99, NULL, '2019-09-13', 'SP', 'TN', 6, 1, '1951-01-23', '9 Mallory Trail', '929-581-2582', '(452) 7493643', 'viudo', 'naturales', 'bswenson5@sciencedaily.com', 'bswenson5', 'Analog Circuit Design manager', NULL, NULL),
(7, 48452426, 'Gram', 'Latimer', 'Male', 67, NULL, '2019-06-30', 'P', 'TN', 7, 0, '1980-03-20', '95 Jenna Circle', '251-459-9402', '(725) 2491906', 'casado', 'naturales', 'glatimer6@tumblr.com', 'glatimer6', 'Research Associate', NULL, NULL),
(8, 51660262, 'Latrina', 'Gosselin', 'Female', 73, NULL, '2019-08-27', 'P', 'TM', 8, 1, '1966-01-28', '99 Northport Point', '815-728-5415', '(661) 7197646', 'casado', 'humanidades', 'lgosselin7@wufoo.com', 'lgosselin7', 'Nuclear Power Engineer', NULL, NULL),
(9, 13960197, 'Bari', 'Shadfourth', 'Female', 76, NULL, '2019-07-18', 'SP', 'TT', 9, 0, '1939-10-03', '41 Fordem Plaza', '296-145-1216', '(604) 5570074', 'casado', 'economia', 'bshadfourth8@hud.gov', 'bshadfourth8', 'Registered Nurse', NULL, NULL),
(10, 65720212, 'Kristy', 'Pallesen', 'Female', 64, NULL, '2019-04-02', 'P', 'TT', 10, 0, '1939-02-09', '4455 Burning Wood Road', '218-744-2903', '(569) 2552676', 'viudo', 'humanidades', 'kpallesen9@narod.ru', 'kpallesen9', 'Budget/Accounting Analyst III', NULL, NULL),
(11, 29135243, 'Fin', 'McMychem', 'Male', 53, NULL, '2019-04-22', 'SP', 'TM', 11, 0, '1994-11-19', '2 Dakota Crossing', '422-687-7857', '(891) 3252596', 'casado', 'economia', 'fmcmychema@ask.com', 'fmcmychema', 'General Manager', NULL, NULL),
(12, 91882380, 'Ruperta', 'Gylle', 'Female', 65, NULL, '2019-02-26', 'V', 'TT', 12, 0, '1933-06-07', '5558 Gulseth Court', '559-972-2690', '(922) 5457601', 'soltero', 'economia', 'rgylleb@google.cn', 'rgylleb', 'Electrical Engineer', NULL, NULL),
(13, 51643238, 'Briney', 'Raubenheim', 'Female', 62, NULL, '2019-09-14', 'V', 'TT', 13, 1, '1942-06-30', '84 Cordelia Parkway', '666-546-8547', '(592) 1632238', 'casado', 'economia', 'braubenheimc@freewebs.com', 'braubenheimc', 'Help Desk Operator', NULL, NULL),
(14, 23241265, 'Johny', 'Stitt', 'Male', 37, NULL, '2019-08-01', 'P', 'TT', 14, 1, '1948-12-06', '8 Kedzie Road', '100-534-5840', '(615) 4897555', 'soltero', 'naturales', 'jstittd@alibaba.com', 'jstittd', 'Software Engineer I', NULL, NULL),
(15, 29636056, 'Benny', 'Leddie', 'Female', 20, NULL, '2019-04-16', 'P', 'TN', 15, 1, '1992-07-12', '32525 Pawling Street', '157-966-2815', '(559) 7246357', 'casado', 'humanidades', 'bleddiee@macromedia.com', 'bleddiee', 'Human Resources Manager', NULL, NULL),
(16, 75576383, 'Iggie', 'Gaynes', 'Male', 12, NULL, '2019-01-10', 'V', 'TT', 16, 0, '1984-02-16', '6 Harper Way', '855-228-8996', '(686) 1975206', 'soltero', 'humanidades', 'igaynesf@webmd.com', 'igaynesf', 'Recruiter', NULL, NULL),
(17, 26910376, 'Gilli', 'O\'Doghesty', 'Female', 21, NULL, '2019-05-28', 'P', 'TT', 17, 1, '1954-08-23', '8 Merry Trail', '171-206-5914', '(777) 1844973', 'viudo', 'naturales', 'godoghestyg@fotki.com', 'godoghestyg', 'Cost Accountant', NULL, NULL),
(18, 39942151, 'Arlan', 'Dewett', 'Male', 57, NULL, '2018-09-29', 'V', 'TT', 18, 0, '1947-11-26', '5709 Rusk Street', '128-995-6536', '(203) 1355132', 'soltero', 'naturales', 'adewetth@behance.net', 'adewetth', 'GIS Technical Architect', NULL, NULL),
(19, 46045060, 'Nina', 'Eminson', 'Female', 12, NULL, '2019-05-25', 'SP', 'TN', 19, 0, '1978-03-10', '606 Grayhawk Alley', '748-431-8663', '(369) 1126563', 'viudo', 'humanidades', 'neminsoni@de.vu', 'neminsoni', 'Automation Specialist III', NULL, NULL),
(20, 44735322, 'Nevins', 'Twinning', 'Male', 32, NULL, '2019-03-04', 'P', 'TM', 20, 0, '1986-02-27', '15 Brown Plaza', '105-831-7348', '(529) 3773164', 'casado', 'naturales', 'ntwinningj@constantcontact.com', 'ntwinningj', 'Recruiter', NULL, NULL),
(21, 85463673, 'Massimo', 'Fehely', 'Male', 67, NULL, '2019-03-16', 'V', 'TM', 21, 0, '1958-04-17', '6442 Derek Terrace', '314-121-7398', '(302) 7269371', 'soltero', 'economia', 'mfehelyk@indiegogo.com', 'mfehelyk', 'Media Manager II', NULL, NULL),
(22, 96862393, 'Grace', 'Yorath', 'Female', 29, NULL, '2019-05-11', 'V', 'TT', 22, 0, '1934-05-20', '62416 Barnett Parkway', '699-598-1063', '(160) 9064399', 'viudo', 'humanidades', 'gyorathl@naver.com', 'gyorathl', 'Sales Associate', NULL, NULL),
(23, 58497952, 'Reinold', 'Evens', 'Male', 22, NULL, '2019-08-19', 'SP', 'TM', 23, 0, '1954-10-15', '66 Fairview Avenue', '580-748-8018', '(561) 7808944', 'soltero', 'economia', 'revensm@wiley.com', 'revensm', 'Administrative Assistant III', NULL, NULL),
(24, 71141359, 'Delcine', 'Yarmouth', 'Female', 80, NULL, '2019-03-29', 'P', 'TT', 24, 1, '1972-07-09', '5 Laurel Pass', '785-301-9817', '(297) 2231825', 'viudo', 'humanidades', 'dyarmouthn@unblog.fr', 'dyarmouthn', 'Help Desk Operator', NULL, NULL),
(25, 66776579, 'Hendrick', 'Castillo', 'Male', 62, NULL, '2019-05-03', 'SP', 'TT', 25, 1, '1967-11-22', '37684 Reindahl Place', '573-638-7949', '(633) 1718731', 'casado', 'economia', 'hcastilloo@reddit.com', 'hcastilloo', 'Professor', NULL, NULL),
(26, 60477829, 'Angeline', 'Livesley', 'Female', 27, NULL, '2019-09-06', 'V', 'TT', 26, 0, '1993-03-16', '79014 Orin Way', '107-771-7114', '(778) 6852083', 'soltero', 'naturales', 'alivesleyp@so-net.ne.jp', 'alivesleyp', 'Research Nurse', NULL, NULL),
(27, 49467483, 'Marcus', 'Pimlett', 'Male', 35, NULL, '2018-09-26', 'SP', 'TM', 27, 1, '1988-01-28', '76559 Loomis Circle', '904-800-3623', '(343) 2402507', 'viudo', 'naturales', 'mpimlettq@ftc.gov', 'mpimlettq', 'Business Systems Development Analyst', NULL, NULL),
(28, 35629364, 'Reinwald', 'Valler', 'Male', 45, NULL, '2019-02-24', 'V', 'TN', 28, 1, '1989-11-26', '6 Lindbergh Alley', '621-840-0581', '(141) 4760506', 'casado', 'economia', 'rvallerr@scientificamerican.com', 'rvallerr', 'Web Developer IV', NULL, NULL),
(29, 78060750, 'Roma', 'Squirrel', 'Male', 5, NULL, '2019-09-05', 'V', 'TM', 29, 1, '1995-06-07', '8174 Anthes Junction', '521-684-2543', '(792) 6311339', 'viudo', 'economia', 'rsquirrels@mtv.com', 'rsquirrels', 'Librarian', NULL, NULL),
(30, 29593804, 'Prudence', 'Hancill', 'Female', 50, NULL, '2019-05-16', 'SP', 'TT', 30, 1, '2001-08-18', '16 Macpherson Road', '164-262-5869', '(544) 5910860', 'soltero', 'naturales', 'phancillt@constantcontact.com', 'phancillt', 'Community Outreach Specialist', NULL, NULL),
(31, 23524226, 'Nickola', 'Meese', 'Male', 54, NULL, '2019-03-29', 'P', 'TM', 31, 0, '1967-03-09', '40 Morning Circle', '505-190-2939', '(572) 4411532', 'casado', 'humanidades', 'nmeeseu@baidu.com', 'nmeeseu', 'VP Quality Control', NULL, NULL),
(32, 71346930, 'Luciano', 'Issakov', 'Male', 93, NULL, '2019-02-25', 'P', 'TM', 32, 1, '1945-11-02', '45124 Vernon Plaza', '922-570-8231', '(823) 5704586', 'viudo', 'humanidades', 'lissakovv@ifeng.com', 'lissakovv', 'Business Systems Development Analyst', NULL, NULL),
(33, 55059103, 'Marcella', 'Bosomworth', 'Female', 28, NULL, '2018-11-06', 'P', 'TT', 33, 0, '1931-07-17', '7 Pine View Lane', '160-497-0804', '(891) 1290738', 'casado', 'humanidades', 'mbosomworthw@desdev.cn', 'mbosomworthw', 'Software Test Engineer IV', NULL, NULL),
(34, 59663980, 'Hazlett', 'Daniele', 'Male', 13, NULL, '2018-10-14', 'V', 'TM', 34, 1, '1971-10-24', '4 Clyde Gallagher Drive', '789-611-5521', '(263) 3044187', 'viudo', 'naturales', 'hdanielex@google.com.hk', 'hdanielex', 'Paralegal', NULL, NULL),
(35, 87295797, 'Pauli', 'Cockill', 'Female', 20, NULL, '2019-04-27', 'V', 'TT', 35, 0, '1947-04-09', '42 Pawling Center', '539-267-3199', '(310) 8284325', 'casado', 'economia', 'pcockilly@goodreads.com', 'pcockilly', 'Administrative Officer', NULL, NULL),
(36, 50180190, 'Tamas', 'Vian', 'Male', 87, NULL, '2019-01-19', 'V', 'TT', 36, 1, '1955-02-12', '9571 Mariners Cove Drive', '536-120-7015', '(959) 5196336', 'viudo', 'humanidades', 'tvianz@mail.ru', 'tvianz', 'Civil Engineer', NULL, NULL),
(37, 60311200, 'Odelia', 'Peperell', 'Female', 17, NULL, '2018-10-24', 'P', 'TM', 37, 1, '1988-04-20', '1462 Crest Line Circle', '657-753-3334', '(536) 3446769', 'casado', 'economia', 'opeperell10@amazonaws.com', 'opeperell10', 'Accounting Assistant II', NULL, NULL),
(38, 16523410, 'Liza', 'Spyby', 'Female', 77, NULL, '2018-10-05', 'P', 'TM', 38, 1, '1941-05-15', '38 Pawling Alley', '373-354-9353', '(196) 1529763', 'soltero', 'economia', 'lspyby11@amazon.co.uk', 'lspyby11', 'VP Marketing', NULL, NULL),
(39, 47266299, 'Ilise', 'McAline', 'Female', 64, NULL, '2019-05-13', 'P', 'TN', 39, 1, '1956-06-08', '90380 Johnson Lane', '910-364-0622', '(837) 9297809', 'casado', 'naturales', 'imcaline12@seattletimes.com', 'imcaline12', 'Systems Administrator II', NULL, NULL),
(40, 83747523, 'Dean', 'Hastwall', 'Male', 86, NULL, '2019-06-14', 'V', 'TT', 40, 0, '1963-05-16', '1 Kings Crossing', '891-753-1350', '(699) 1299068', 'viudo', 'naturales', 'dhastwall13@cdc.gov', 'dhastwall13', 'Human Resources Manager', NULL, NULL),
(41, 20897287, 'Justinian', 'Windross', 'Male', 88, NULL, '2019-05-08', 'P', 'TM', 41, 0, '1955-02-05', '5977 Fairfield Road', '853-688-3093', '(238) 3454293', 'soltero', 'humanidades', 'jwindross14@google.ru', 'jwindross14', 'Account Executive', NULL, NULL),
(42, 48437270, 'Genna', 'Ballendine', 'Female', 41, NULL, '2019-04-10', 'P', 'TT', 42, 1, '1952-11-15', '337 Forest Dale Avenue', '436-320-8812', '(207) 3120824', 'viudo', 'naturales', 'gballendine15@slashdot.org', 'gballendine15', 'Director of Sales', NULL, NULL),
(43, 40217518, 'Olivier', 'Fearnsides', 'Male', 63, NULL, '2018-11-04', 'P', 'TT', 43, 0, '1967-01-15', '54 Vera Road', '314-550-2225', '(500) 4785867', 'soltero', 'naturales', 'ofearnsides16@bing.com', 'ofearnsides16', 'Senior Cost Accountant', NULL, NULL),
(44, 27134449, 'Tamara', 'Dedden', 'Female', 71, NULL, '2019-04-24', 'V', 'TM', 44, 1, '1934-01-09', '267 Cascade Pass', '505-913-7013', '(800) 2999757', 'soltero', 'economia', 'tdedden17@jugem.jp', 'tdedden17', 'VP Accounting', NULL, NULL),
(45, 73782636, 'Evita', 'Hunstone', 'Female', 49, NULL, '2019-01-01', 'V', 'TT', 45, 1, '1995-09-04', '6960 Loftsgordon Circle', '368-862-9018', '(515) 7870077', 'viudo', 'economia', 'ehunstone18@dyndns.org', 'ehunstone18', 'Information Systems Manager', NULL, NULL),
(46, 51553976, 'Darcy', 'Ainger', 'Male', 55, NULL, '2019-02-15', 'P', 'TN', 46, 1, '1995-07-29', '1724 Debs Avenue', '986-677-7888', '(405) 5031555', 'soltero', 'humanidades', 'dainger19@storify.com', 'dainger19', 'Senior Financial Analyst', NULL, NULL),
(47, 37338483, 'Casandra', 'Origin', 'Female', 21, NULL, '2019-02-26', 'P', 'TN', 47, 0, '1969-10-15', '21 Welch Alley', '316-601-9753', '(589) 1972655', 'soltero', 'humanidades', 'corigin1a@google.de', 'corigin1a', 'Research Assistant IV', NULL, NULL),
(48, 73249001, 'Caitrin', 'Polak', 'Female', 20, NULL, '2019-05-13', 'P', 'TM', 48, 0, '1933-01-01', '22 Johnson Street', '180-663-6650', '(802) 5558572', 'casado', 'naturales', 'cpolak1b@domainmarket.com', 'cpolak1b', 'Administrative Officer', NULL, NULL),
(49, 94813598, 'Wheeler', 'Wildblood', 'Male', 56, NULL, '2019-03-28', 'SP', 'TN', 49, 1, '1939-03-02', '4 Badeau Avenue', '241-613-1008', '(350) 7544756', 'soltero', 'economia', 'wwildblood1c@wsj.com', 'wwildblood1c', 'Web Designer III', NULL, NULL),
(50, 73912475, 'Britta', 'Waller-Bridge', 'Female', 88, NULL, '2019-05-01', 'SP', 'TT', 50, 1, '1959-07-20', '545 Fallview Park', '939-331-3949', '(886) 1426694', 'viudo', 'economia', 'bwallerbridge1d@wikispaces.com', 'bwallerbridge1d', 'Staff Scientist', NULL, NULL),
(51, 33089323, 'Daryl', 'Maly', 'Female', 98, NULL, '2019-05-20', 'SP', 'TN', 51, 0, '1941-09-05', '81192 Pierstorff Place', '572-193-2192', '(326) 7960846', 'soltero', 'humanidades', 'dmaly1e@nhs.uk', 'dmaly1e', 'Analyst Programmer', NULL, NULL),
(52, 70150666, 'Reina', 'Shawe', 'Female', 88, NULL, '2019-01-27', 'P', 'TM', 52, 1, '1985-06-30', '8 Main Avenue', '485-641-8078', '(768) 8212716', 'viudo', 'humanidades', 'rshawe1f@upenn.edu', 'rshawe1f', 'Nurse', NULL, NULL),
(53, 86590067, 'Rhodie', 'Rickson', 'Female', 66, NULL, '2019-05-03', 'V', 'TN', 53, 0, '1975-12-09', '63 Dixon Drive', '930-488-8087', '(425) 7267044', 'casado', 'humanidades', 'rrickson1g@t.co', 'rrickson1g', 'Web Developer IV', NULL, NULL),
(54, 94145932, 'Eric', 'Squibbes', 'Male', 33, NULL, '2018-11-04', 'SP', 'TM', 54, 1, '1939-08-02', '82 Crest Line Center', '979-158-2458', '(921) 9667587', 'viudo', 'naturales', 'esquibbes1h@timesonline.co.uk', 'esquibbes1h', 'Budget/Accounting Analyst IV', NULL, NULL),
(55, 43848805, 'Alfons', 'Toone', 'Male', 85, NULL, '2018-10-21', 'V', 'TT', 55, 1, '1977-01-08', '87 Forster Lane', '812-914-8454', '(853) 6565269', 'soltero', 'naturales', 'atoone1i@4shared.com', 'atoone1i', 'Cost Accountant', NULL, NULL),
(56, 86758645, 'Ynes', 'Hebdon', 'Female', 24, NULL, '2019-02-23', 'P', 'TN', 56, 1, '1945-08-22', '14 Boyd Trail', '320-972-6681', '(269) 2975375', 'casado', 'humanidades', 'yhebdon1j@sogou.com', 'yhebdon1j', 'Data Coordiator', NULL, NULL),
(57, 69374941, 'Tadeas', 'MacGaughy', 'Male', 54, NULL, '2019-01-25', 'V', 'TN', 57, 0, '1993-12-12', '66 6th Lane', '225-889-7286', '(909) 2882941', 'viudo', 'economia', 'tmacgaughy1k@wikimedia.org', 'tmacgaughy1k', 'Staff Scientist', NULL, NULL),
(58, 11432843, 'Chrotoem', 'Trudgion', 'Male', 74, NULL, '2019-03-04', 'SP', 'TN', 58, 1, '1972-09-08', '6 Marquette Point', '235-663-9255', '(399) 8522665', 'viudo', 'economia', 'ctrudgion1l@pinterest.com', 'ctrudgion1l', 'Structural Engineer', NULL, NULL),
(59, 68086173, 'Camellia', 'Dunphie', 'Female', 31, NULL, '2019-01-30', 'V', 'TT', 59, 0, '1956-10-10', '1 Monument Way', '115-996-0228', '(899) 7624167', 'casado', 'economia', 'cdunphie1m@ucoz.com', 'cdunphie1m', 'Social Worker', NULL, NULL),
(60, 17272394, 'Neron', 'Chaytor', 'Male', 77, NULL, '2019-08-03', 'SP', 'TM', 60, 0, '1966-05-31', '629 Graedel Avenue', '859-740-4255', '(844) 9126596', 'viudo', 'humanidades', 'nchaytor1n@flavors.me', 'nchaytor1n', 'Human Resources Assistant IV', NULL, NULL),
(61, 46326363, 'Koral', 'Mathie', 'Female', 54, NULL, '2019-06-15', 'V', 'TM', 61, 0, '1970-01-24', '11 Memorial Road', '366-605-0565', '(917) 3291337', 'soltero', 'economia', 'kmathie1o@xing.com', 'kmathie1o', 'Human Resources Manager', NULL, NULL),
(62, 63653246, 'Charity', 'Burgess', 'Female', 82, NULL, '2019-02-13', 'SP', 'TM', 62, 1, '1965-09-19', '25480 Evergreen Hill', '839-508-0620', '(270) 4942262', 'soltero', 'naturales', 'cburgess1p@rakuten.co.jp', 'cburgess1p', 'Structural Engineer', NULL, NULL),
(63, 61145085, 'Udall', 'Follis', 'Male', 20, NULL, '2019-09-03', 'SP', 'TN', 63, 1, '1968-05-25', '798 Kingsford Avenue', '121-931-2636', '(678) 5512791', 'soltero', 'humanidades', 'ufollis1q@studiopress.com', 'ufollis1q', 'Analog Circuit Design manager', NULL, NULL),
(64, 73689811, 'Ephrem', 'Mussilli', 'Male', 9, NULL, '2019-02-02', 'SP', 'TM', 64, 0, '1964-08-29', '7 Morningstar Court', '505-972-3922', '(868) 8653368', 'casado', 'economia', 'emussilli1r@google.it', 'emussilli1r', 'Analyst Programmer', NULL, NULL),
(65, 96423345, 'Dorthea', 'Navarro', 'Female', 82, NULL, '2018-09-21', 'V', 'TN', 65, 1, '1969-06-03', '6 Melvin Plaza', '645-870-2119', '(245) 8627421', 'viudo', 'naturales', 'dnavarro1s@nationalgeographic.com', 'dnavarro1s', 'Chief Design Engineer', NULL, NULL),
(66, 22531850, 'Elton', 'Debold', 'Male', 57, NULL, '2019-02-25', 'V', 'TT', 66, 1, '1947-01-27', '2611 Moose Alley', '487-519-8906', '(904) 9864890', 'soltero', 'economia', 'edebold1t@artisteer.com', 'edebold1t', 'Junior Executive', NULL, NULL),
(67, 48858886, 'Giulietta', 'Ferrara', 'Female', 24, NULL, '2019-03-01', 'SP', 'TM', 67, 0, '1967-08-20', '57734 Oriole Road', '710-164-6343', '(223) 7387101', 'soltero', 'economia', 'gferrara1u@businessinsider.com', 'gferrara1u', 'Cost Accountant', NULL, NULL),
(68, 71203238, 'Tabbie', 'Grelak', 'Female', 67, NULL, '2018-10-06', 'V', 'TT', 68, 1, '1958-08-30', '61626 Thierer Parkway', '714-393-0263', '(996) 4419159', 'casado', 'naturales', 'tgrelak1v@usnews.com', 'tgrelak1v', 'Civil Engineer', NULL, NULL),
(69, 79088983, 'Alard', 'Girk', 'Male', 56, NULL, '2019-06-28', 'V', 'TN', 69, 0, '1960-04-03', '3 Ruskin Court', '142-334-3239', '(488) 9851538', 'casado', 'naturales', 'agirk1w@goo.gl', 'agirk1w', 'Tax Accountant', NULL, NULL),
(70, 41175625, 'Nadine', 'Estick', 'Female', 91, NULL, '2019-03-07', 'SP', 'TT', 70, 0, '1997-03-19', '11 Hudson Junction', '875-283-8157', '(573) 8453529', 'viudo', 'humanidades', 'nestick1x@omniture.com', 'nestick1x', 'Civil Engineer', NULL, NULL),
(71, 84105828, 'Tanitansy', 'Andrews', 'Female', 82, NULL, '2019-02-18', 'P', 'TN', 71, 1, '1935-05-29', '1 Bluestem Road', '210-936-0157', '(583) 1117413', 'soltero', 'naturales', 'tandrews1y@sciencedirect.com', 'tandrews1y', 'VP Sales', NULL, NULL),
(72, 30131814, 'Cal', 'Isted', 'Male', 68, NULL, '2019-03-26', 'P', 'TM', 72, 1, '1953-09-24', '16587 Sage Place', '408-172-9475', '(236) 4283695', 'casado', 'humanidades', 'cisted1z@samsung.com', 'cisted1z', 'Geological Engineer', NULL, NULL),
(73, 93930227, 'Natalee', 'Doiley', 'Female', 62, NULL, '2019-03-14', 'P', 'TT', 73, 0, '1931-11-22', '098 Orin Hill', '849-537-0967', '(707) 8474732', 'viudo', 'economia', 'ndoiley20@auda.org.au', 'ndoiley20', 'Computer Systems Analyst III', NULL, NULL),
(74, 28435037, 'Cal', 'Vango', 'Male', 19, NULL, '2019-06-29', 'P', 'TT', 74, 1, '1941-12-02', '78 Coolidge Crossing', '862-732-3634', '(107) 4370784', 'casado', 'economia', 'cvango21@issuu.com', 'cvango21', 'Help Desk Operator', NULL, NULL),
(75, 25219061, 'Rossy', 'Lafranconi', 'Male', 23, NULL, '2019-03-12', 'SP', 'TN', 75, 0, '1964-08-07', '0 Lake View Alley', '759-725-1441', '(426) 3551384', 'casado', 'economia', 'rlafranconi22@behance.net', 'rlafranconi22', 'Research Assistant I', NULL, NULL),
(76, 68128073, 'Noam', 'Eliot', 'Male', 66, NULL, '2018-10-07', 'SP', 'TT', 76, 1, '1981-09-18', '6 Marquette Road', '297-732-1668', '(316) 3131877', 'viudo', 'humanidades', 'neliot23@g.co', 'neliot23', 'Software Consultant', NULL, NULL),
(77, 64020291, 'Easter', 'Rigmand', 'Female', 34, NULL, '2018-10-20', 'V', 'TM', 77, 1, '1955-02-17', '300 Chive Drive', '429-662-6775', '(615) 1687799', 'soltero', 'naturales', 'erigmand24@pbs.org', 'erigmand24', 'Data Coordiator', NULL, NULL),
(78, 94096457, 'Geordie', 'Randales', 'Male', 70, NULL, '2019-07-30', 'V', 'TM', 78, 0, '1973-02-04', '9149 Gina Hill', '934-892-7364', '(653) 3551136', 'viudo', 'naturales', 'grandales25@simplemachines.org', 'grandales25', 'Senior Quality Engineer', NULL, NULL),
(79, 13360571, 'Elvera', 'Betterton', 'Female', 36, NULL, '2018-11-02', 'SP', 'TN', 79, 1, '1955-12-22', '114 Talisman Alley', '151-209-6408', '(631) 6503674', 'viudo', 'naturales', 'ebetterton26@paypal.com', 'ebetterton26', 'Mechanical Systems Engineer', NULL, NULL),
(80, 11288592, 'Horatio', 'Kewzick', 'Male', 66, NULL, '2019-07-12', 'P', 'TT', 80, 1, '1990-09-28', '18569 Mayer Center', '796-100-4521', '(211) 5665091', 'viudo', 'economia', 'hkewzick27@liveinternet.ru', 'hkewzick27', 'Help Desk Technician', NULL, NULL),
(81, 32740576, 'Angel', 'Jesson', 'Male', 21, NULL, '2018-09-19', 'V', 'TT', 81, 0, '1973-05-12', '0320 Buell Lane', '472-106-4174', '(648) 2311383', 'soltero', 'naturales', 'ajesson28@geocities.com', 'ajesson28', 'Quality Control Specialist', NULL, NULL),
(82, 61377654, 'Herold', 'D\'Hooghe', 'Male', 37, NULL, '2019-01-14', 'V', 'TT', 82, 0, '1974-10-03', '38 Waywood Park', '728-252-4008', '(148) 3203793', 'casado', 'naturales', 'hdhooghe29@php.net', 'hdhooghe29', 'VP Accounting', NULL, NULL),
(83, 31456663, 'Ariana', 'Semkins', 'Female', 54, NULL, '2019-05-27', 'P', 'TT', 83, 0, '1992-06-09', '72405 Sundown Drive', '639-246-7238', '(707) 4656801', 'casado', 'humanidades', 'asemkins2a@pagesperso-orange.fr', 'asemkins2a', 'Director of Sales', NULL, NULL),
(84, 46582792, 'Clarita', 'Russon', 'Female', 91, NULL, '2019-01-10', 'P', 'TT', 84, 1, '1963-10-31', '99626 Moulton Park', '872-910-3821', '(839) 6533296', 'soltero', 'naturales', 'crusson2b@nytimes.com', 'crusson2b', 'Software Consultant', NULL, NULL),
(85, 21564957, 'Waldemar', 'Unwins', 'Male', 69, NULL, '2019-03-09', 'V', 'TM', 85, 0, '1980-04-10', '414 Kings Pass', '422-904-7658', '(526) 4939511', 'casado', 'naturales', 'wunwins2c@netscape.com', 'wunwins2c', 'Database Administrator IV', NULL, NULL),
(86, 42616211, 'Connor', 'Asbery', 'Male', 3, NULL, '2019-06-26', 'SP', 'TN', 86, 0, '1979-12-15', '85007 Packers Parkway', '270-903-2961', '(653) 3181109', 'soltero', 'economia', 'casbery2d@apple.com', 'casbery2d', 'Teacher', NULL, NULL),
(87, 19383678, 'Celestine', 'Bagshawe', 'Female', 1, NULL, '2019-08-20', 'P', 'TT', 87, 1, '1944-10-05', '54211 Cambridge Junction', '190-328-0389', '(837) 4667477', 'viudo', 'humanidades', 'cbagshawe2e@homestead.com', 'cbagshawe2e', 'Marketing Manager', NULL, NULL),
(88, 54612611, 'Rosalyn', 'Skerman', 'Female', 29, NULL, '2019-01-06', 'SP', 'TT', 88, 0, '1963-05-15', '9 Northwestern Alley', '440-930-9086', '(488) 7819214', 'soltero', 'economia', 'rskerman2f@wired.com', 'rskerman2f', 'Software Consultant', NULL, NULL),
(89, 34609764, 'Drew', 'Sodor', 'Male', 61, NULL, '2019-04-02', 'P', 'TT', 89, 1, '1965-06-17', '46 Ridge Oak Center', '324-530-4472', '(245) 9398973', 'casado', 'economia', 'dsodor2g@state.tx.us', 'dsodor2g', 'Nuclear Power Engineer', NULL, NULL),
(90, 38315319, 'Hardy', 'de Courcey', 'Male', 63, NULL, '2019-09-01', 'V', 'TT', 90, 0, '1997-04-14', '407 Crescent Oaks Point', '179-990-6786', '(140) 7273682', 'soltero', 'naturales', 'hdecourcey2h@google.pl', 'hdecourcey2h', 'Software Consultant', NULL, NULL),
(91, 69500980, 'Merrill', 'Rangle', 'Male', 1, NULL, '2018-10-23', 'P', 'TN', 91, 1, '1975-01-18', '86197 Brown Circle', '419-928-2989', '(257) 4234015', 'viudo', 'naturales', 'mrangle2i@digg.com', 'mrangle2i', 'Recruiting Manager', NULL, NULL),
(92, 73452937, 'Alva', 'Summerlee', 'Male', 56, NULL, '2018-10-21', 'V', 'TN', 92, 1, '1967-08-01', '7859 Northland Circle', '856-221-5470', '(933) 9191599', 'soltero', 'economia', 'asummerlee2j@1688.com', 'asummerlee2j', 'Recruiting Manager', NULL, NULL),
(93, 26291002, 'Sande', 'Lorentzen', 'Female', 69, NULL, '2019-07-10', 'SP', 'TT', 93, 1, '1959-10-23', '4 Lindbergh Junction', '830-651-6382', '(232) 1952666', 'soltero', 'economia', 'slorentzen2k@ed.gov', 'slorentzen2k', 'Physical Therapy Assistant', NULL, NULL),
(94, 95320976, 'Codi', 'Robuchon', 'Male', 50, NULL, '2019-04-20', 'P', 'TM', 94, 1, '1932-04-25', '2 Menomonie Park', '126-527-6970', '(935) 2470535', 'casado', 'humanidades', 'crobuchon2l@pbs.org', 'crobuchon2l', 'Account Executive', NULL, NULL),
(95, 67237644, 'Floyd', 'Anstis', 'Male', 48, NULL, '2018-12-10', 'P', 'TT', 95, 1, '1935-11-09', '620 Judy Hill', '547-265-4113', '(857) 6733265', 'soltero', 'economia', 'fanstis2m@boston.com', 'fanstis2m', 'Health Coach III', NULL, NULL),
(96, 90169321, 'Aloin', 'Dibling', 'Male', 49, NULL, '2019-04-27', 'SP', 'TN', 96, 0, '1998-10-22', '12852 Browning Avenue', '506-769-2226', '(111) 3952071', 'casado', 'humanidades', 'adibling2n@washingtonpost.com', 'adibling2n', 'Business Systems Development Analyst', NULL, NULL),
(97, 45482862, 'Karyl', 'Rofe', 'Female', 98, NULL, '2019-08-28', 'P', 'TN', 97, 0, '1956-10-04', '93622 Brickson Park Park', '143-824-1392', '(391) 3787547', 'casado', 'humanidades', 'krofe2o@discuz.net', 'krofe2o', 'Nurse', NULL, NULL),
(98, 17248052, 'Micheil', 'Rackham', 'Male', 22, NULL, '2018-09-30', 'P', 'TT', 98, 1, '2000-02-04', '03355 Anthes Park', '583-619-3129', '(536) 6774708', 'casado', 'economia', 'mrackham2p@cnn.com', 'mrackham2p', 'Marketing Assistant', NULL, NULL),
(99, 16758012, 'Brnaby', 'Roads', 'Male', 8, NULL, '2018-11-17', 'V', 'TM', 99, 1, '1996-03-29', '64 Cambridge Circle', '687-818-7808', '(680) 9414551', 'soltero', 'economia', 'broads2q@t.co', 'broads2q', 'Teacher', NULL, NULL),
(100, 32977455, 'Kalvin', 'Cecely', 'Male', 26, NULL, '2019-06-06', 'SP', 'TM', 100, 0, '1973-01-24', '935 Lindbergh Place', '667-922-4245', '(409) 6753752', 'casado', 'economia', 'kcecely2r@google.fr', 'kcecely2r', 'Web Designer I', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos_x_carreras`
--

DROP TABLE IF EXISTS `alumnos_x_carreras`;
CREATE TABLE `alumnos_x_carreras` (
  `alumno_id` int(9) UNSIGNED NOT NULL,
  `carrera_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
CREATE TABLE `asistencia` (
  `carga_horaria_id` int(9) UNSIGNED DEFAULT NULL,
  `cursada_id` int(9) UNSIGNED DEFAULT NULL,
  `asistencia_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caja`
--

DROP TABLE IF EXISTS `caja`;
CREATE TABLE `caja` (
  `id_caja` int(9) UNSIGNED NOT NULL,
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `importe` decimal(10,0) NOT NULL,
  `fechayhora` datetime NOT NULL,
  `detalle` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `id_comienzo_entrada` int(9) UNSIGNED DEFAULT NULL,
  `id_fin_entrada` int(9) UNSIGNED DEFAULT NULL,
  `id_comienzo_salida` int(9) UNSIGNED DEFAULT NULL,
  `id_fin_salida` int(9) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `caja`
--

INSERT INTO `caja` (`id_caja`, `usuario_id`, `importe`, `fechayhora`, `detalle`, `id_comienzo_entrada`, `id_fin_entrada`, `id_comienzo_salida`, `id_fin_salida`) VALUES
(1, 1, '0', '1992-01-01 00:00:00', 'test', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carga_horaria`
--

DROP TABLE IF EXISTS `carga_horaria`;
CREATE TABLE `carga_horaria` (
  `carga_horaria_id` int(9) UNSIGNED NOT NULL,
  `fecha_cursada` date DEFAULT NULL,
  `clase_type_id` int(9) UNSIGNED DEFAULT NULL,
  `nota` int(4) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

DROP TABLE IF EXISTS `carreras`;
CREATE TABLE `carreras` (
  `carrera_id` int(9) UNSIGNED NOT NULL,
  `nombre` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `mod_id` int(9) UNSIGNED NOT NULL,
  `turno_id` int(9) UNSIGNED NOT NULL,
  `cantidadanios` varchar(250) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase_type`
--

DROP TABLE IF EXISTS `clase_type`;
CREATE TABLE `clase_type` (
  `clase_type_id` int(9) UNSIGNED NOT NULL,
  `clase_type` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `detalle_type` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concepto_type`
--

DROP TABLE IF EXISTS `concepto_type`;
CREATE TABLE `concepto_type` (
  `concepto_type_id` int(9) UNSIGNED NOT NULL,
  `concepto` varchar(100) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuotas`
--

DROP TABLE IF EXISTS `cuotas`;
CREATE TABLE `cuotas` (
  `id` int(9) UNSIGNED NOT NULL,
  `alumno_id` int(9) UNSIGNED NOT NULL,
  `concepto` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `importe` int(11) NOT NULL,
  `fecha_pasada` datetime DEFAULT NULL COMMENT 'fecha de pasada'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `cuotas`
--

INSERT INTO `cuotas` (`id`, `alumno_id`, `concepto`, `fecha`, `importe`, `fecha_pasada`) VALUES
(1, 1, 'matricula', '2019-02-08', 3000, NULL),
(2, 2, 'cuota1', '2019-01-14', 3000, NULL),
(3, 3, 'cuota2', '2019-04-27', 3000, NULL),
(4, 4, 'cuota3', '2018-11-26', 3000, NULL),
(5, 5, 'cuota4', '2019-08-20', 3000, NULL),
(6, 6, 'cuota5', '2019-04-20', 3000, NULL),
(7, 7, 'cuota6', '2019-05-22', 3000, NULL),
(8, 8, 'matricula', '2019-04-21', 3000, NULL),
(9, 9, 'cuota1', '2019-08-30', 3000, NULL),
(10, 10, 'cuota2', '2019-04-24', 3000, NULL),
(11, 11, 'cuota3', '2019-08-14', 3000, NULL),
(12, 12, 'cuota4', '2019-03-30', 3000, NULL),
(13, 13, 'cuota5', '2019-04-29', 3000, NULL),
(14, 14, 'cuota6', '2019-09-15', 3000, NULL),
(15, 15, 'matricula', '2019-02-17', 3000, NULL),
(16, 16, 'cuota1', '2019-07-01', 3000, NULL),
(17, 17, 'cuota2', '2019-08-18', 3000, NULL),
(18, 18, 'cuota3', '2018-09-26', 3000, NULL),
(19, 19, 'cuota4', '2019-09-16', 3000, NULL),
(20, 20, 'cuota5', '2019-03-08', 3000, NULL),
(21, 21, 'cuota6', '2019-05-11', 3000, NULL),
(22, 22, 'matricula', '2019-06-10', 3000, NULL),
(23, 23, 'cuota1', '2018-09-20', 3000, NULL),
(24, 24, 'cuota2', '2018-11-05', 3000, NULL),
(25, 25, 'cuota3', '2018-11-10', 3000, NULL),
(26, 26, 'cuota4', '2019-08-06', 3000, NULL),
(27, 27, 'cuota5', '2019-06-27', 3000, NULL),
(28, 28, 'cuota6', '2019-05-22', 3000, NULL),
(29, 29, 'matricula', '2019-06-23', 3000, NULL),
(30, 30, 'cuota1', '2019-06-09', 3000, NULL),
(31, 31, 'cuota2', '2018-10-31', 3000, NULL),
(32, 32, 'cuota3', '2018-11-02', 3000, NULL),
(33, 33, 'cuota4', '2019-02-13', 3000, NULL),
(34, 34, 'cuota5', '2019-07-21', 3000, NULL),
(35, 35, 'cuota6', '2018-09-19', 3000, NULL),
(36, 36, 'matricula', '2019-08-01', 3000, NULL),
(37, 37, 'cuota1', '2018-12-05', 3000, NULL),
(38, 38, 'cuota2', '2019-04-11', 3000, NULL),
(39, 39, 'cuota3', '2019-02-04', 3000, NULL),
(40, 40, 'cuota4', '2018-09-25', 3000, NULL),
(41, 41, 'cuota5', '2019-03-06', 3000, NULL),
(42, 42, 'cuota6', '2019-04-23', 3000, NULL),
(43, 43, 'matricula', '2019-01-15', 3000, NULL),
(44, 44, 'cuota1', '2019-06-24', 3000, NULL),
(45, 45, 'cuota2', '2019-05-26', 3000, NULL),
(46, 46, 'cuota3', '2019-07-06', 3000, NULL),
(47, 47, 'cuota4', '2019-01-14', 3000, NULL),
(48, 48, 'cuota5', '2019-05-10', 3000, NULL),
(49, 49, 'cuota6', '2018-11-20', 3000, NULL),
(50, 50, 'matricula', '2018-10-23', 3000, NULL),
(51, 51, 'cuota1', '2019-06-22', 3000, NULL),
(52, 52, 'cuota2', '2018-10-22', 3000, NULL),
(53, 53, 'cuota3', '2019-05-30', 3000, NULL),
(54, 54, 'cuota4', '2019-05-24', 3000, NULL),
(55, 55, 'cuota5', '2019-05-03', 3000, NULL),
(56, 56, 'cuota6', '2019-04-16', 3000, NULL),
(57, 57, 'matricula', '2019-06-26', 3000, NULL),
(58, 58, 'cuota1', '2019-03-16', 3000, NULL),
(59, 59, 'cuota2', '2019-05-19', 3000, NULL),
(60, 60, 'cuota3', '2019-03-18', 3000, NULL),
(61, 61, 'cuota4', '2019-06-05', 3000, NULL),
(62, 62, 'cuota5', '2019-08-22', 3000, NULL),
(63, 63, 'cuota6', '2019-07-14', 3000, NULL),
(64, 64, 'matricula', '2019-06-29', 3000, NULL),
(65, 65, 'cuota1', '2019-01-01', 3000, NULL),
(66, 66, 'cuota2', '2019-04-01', 3000, NULL),
(67, 67, 'cuota3', '2018-12-13', 3000, NULL),
(68, 68, 'cuota4', '2019-05-04', 3000, NULL),
(69, 69, 'cuota5', '2019-08-27', 3000, NULL),
(70, 70, 'cuota6', '2019-03-28', 3000, NULL),
(71, 71, 'matricula', '2019-01-23', 3000, NULL),
(72, 72, 'cuota1', '2019-08-29', 3000, NULL),
(73, 73, 'cuota2', '2018-12-22', 3000, NULL),
(74, 74, 'cuota3', '2019-09-13', 3000, NULL),
(75, 75, 'cuota4', '2019-04-28', 3000, NULL),
(76, 76, 'cuota5', '2019-04-04', 3000, NULL),
(77, 77, 'cuota6', '2019-06-17', 3000, NULL),
(78, 78, 'matricula', '2018-10-19', 3000, NULL),
(79, 79, 'cuota1', '2018-11-30', 3000, NULL),
(80, 80, 'cuota2', '2019-05-27', 3000, NULL),
(81, 81, 'cuota3', '2019-02-01', 3000, NULL),
(82, 82, 'cuota4', '2018-11-15', 3000, NULL),
(83, 83, 'cuota5', '2019-04-26', 3000, NULL),
(84, 84, 'cuota6', '2019-04-15', 3000, NULL),
(85, 85, 'matricula', '2018-12-11', 3000, NULL),
(86, 86, 'cuota1', '2019-01-11', 3000, NULL),
(87, 87, 'cuota2', '2019-03-08', 3000, NULL),
(88, 88, 'cuota3', '2019-01-10', 3000, NULL),
(89, 89, 'cuota4', '2018-11-16', 3000, NULL),
(90, 90, 'cuota5', '2019-06-30', 3000, NULL),
(91, 91, 'cuota6', '2018-10-14', 3000, NULL),
(92, 92, 'matricula', '2019-07-26', 3000, NULL),
(93, 93, 'cuota1', '2019-01-10', 3000, NULL),
(94, 94, 'cuota2', '2018-11-24', 3000, NULL),
(95, 95, 'cuota3', '2018-11-02', 3000, NULL),
(96, 96, 'cuota4', '2019-07-12', 3000, NULL),
(97, 97, 'cuota5', '2019-01-01', 3000, NULL),
(98, 98, 'cuota6', '2019-02-11', 3000, NULL),
(99, 99, 'matricula', '2019-08-25', 3000, NULL),
(100, 1, 'cuota1', '2019-01-30', 3000, NULL),
(101, 2, 'cuota2', '2019-01-26', 3000, NULL),
(102, 3, 'cuota3', '2019-08-08', 3000, NULL),
(103, 4, 'cuota4', '2019-05-10', 3000, NULL),
(104, 5, 'cuota5', '2019-09-07', 3000, NULL),
(105, 6, 'cuota6', '2018-12-03', 3000, NULL),
(106, 7, 'matricula', '2019-05-18', 3000, NULL),
(107, 8, 'cuota1', '2019-07-20', 3000, NULL),
(108, 9, 'cuota2', '2018-12-08', 3000, NULL),
(109, 10, 'cuota3', '2019-02-03', 3000, NULL),
(110, 11, 'cuota4', '2019-08-23', 3000, NULL),
(111, 12, 'cuota5', '2018-12-16', 3000, NULL),
(112, 13, 'cuota6', '2019-04-05', 3000, NULL),
(113, 14, 'matricula', '2019-08-11', 3000, NULL),
(114, 15, 'cuota1', '2018-12-13', 3000, NULL),
(115, 16, 'cuota2', '2019-05-27', 3000, NULL),
(116, 17, 'cuota3', '2019-06-28', 3000, NULL),
(117, 18, 'cuota4', '2018-12-10', 3000, NULL),
(118, 19, 'cuota5', '2018-09-20', 3000, NULL),
(119, 20, 'cuota6', '2018-12-30', 3000, NULL),
(120, 21, 'matricula', '2019-06-09', 3000, NULL),
(121, 22, 'cuota1', '2019-06-19', 3000, NULL),
(122, 23, 'cuota2', '2019-09-15', 3000, NULL),
(123, 24, 'cuota3', '2019-05-22', 3000, NULL),
(124, 25, 'cuota4', '2019-07-21', 3000, NULL),
(125, 26, 'cuota5', '2019-01-16', 3000, NULL),
(126, 27, 'cuota6', '2019-02-18', 3000, NULL),
(127, 28, 'matricula', '2019-03-15', 3000, NULL),
(128, 29, 'cuota1', '2019-05-31', 3000, NULL),
(129, 30, 'cuota2', '2019-09-11', 3000, NULL),
(130, 31, 'cuota3', '2018-12-19', 3000, NULL),
(131, 32, 'cuota4', '2018-10-24', 3000, NULL),
(132, 33, 'cuota5', '2019-01-21', 3000, NULL),
(133, 34, 'cuota6', '2018-12-11', 3000, NULL),
(134, 35, 'matricula', '2019-09-13', 3000, NULL),
(135, 36, 'cuota1', '2018-12-09', 3000, NULL),
(136, 37, 'cuota2', '2019-07-09', 3000, NULL),
(137, 38, 'cuota3', '2018-10-12', 3000, NULL),
(138, 39, 'cuota4', '2019-03-22', 3000, NULL),
(139, 40, 'cuota5', '2019-01-15', 3000, NULL),
(140, 41, 'cuota6', '2018-11-14', 3000, NULL),
(141, 42, 'matricula', '2019-05-17', 3000, NULL),
(142, 43, 'cuota1', '2019-05-14', 3000, NULL),
(143, 44, 'cuota2', '2019-02-05', 3000, NULL),
(144, 45, 'cuota3', '2019-04-05', 3000, NULL),
(145, 46, 'cuota4', '2019-06-24', 3000, NULL),
(146, 47, 'cuota5', '2019-03-15', 3000, NULL),
(147, 48, 'cuota6', '2019-06-05', 3000, NULL),
(148, 49, 'matricula', '2019-01-11', 3000, NULL),
(149, 50, 'cuota1', '2019-05-17', 3000, NULL),
(150, 51, 'cuota2', '2019-06-03', 3000, NULL),
(151, 52, 'cuota3', '2019-03-09', 3000, NULL),
(152, 53, 'cuota4', '2019-06-02', 3000, NULL),
(153, 54, 'cuota5', '2019-02-25', 3000, NULL),
(154, 55, 'cuota6', '2019-02-15', 3000, NULL),
(155, 56, 'matricula', '2019-07-19', 3000, NULL),
(156, 57, 'cuota1', '2019-03-18', 3000, NULL),
(157, 58, 'cuota2', '2018-12-21', 3000, NULL),
(158, 59, 'cuota3', '2019-02-12', 3000, NULL),
(159, 60, 'cuota4', '2018-12-01', 3000, NULL),
(160, 61, 'cuota5', '2019-04-08', 3000, NULL),
(161, 62, 'cuota6', '2019-05-02', 3000, NULL),
(162, 63, 'matricula', '2018-12-22', 3000, NULL),
(163, 64, 'cuota1', '2019-01-21', 3000, NULL),
(164, 65, 'cuota2', '2019-09-05', 3000, NULL),
(165, 66, 'cuota3', '2019-09-04', 3000, NULL),
(166, 67, 'cuota4', '2019-05-26', 3000, NULL),
(167, 68, 'cuota5', '2018-09-28', 3000, NULL),
(168, 69, 'cuota6', '2019-04-07', 3000, NULL),
(169, 70, 'matricula', '2018-10-13', 3000, NULL),
(170, 71, 'cuota1', '2018-12-24', 3000, NULL),
(171, 72, 'cuota2', '2019-02-12', 3000, NULL),
(172, 73, 'cuota3', '2019-09-08', 3000, NULL),
(173, 74, 'cuota4', '2018-12-11', 3000, NULL),
(174, 75, 'cuota5', '2019-08-01', 3000, NULL),
(175, 76, 'cuota6', '2019-02-19', 3000, NULL),
(176, 77, 'matricula', '2019-01-24', 3000, NULL),
(177, 78, 'cuota1', '2019-08-30', 3000, NULL),
(178, 79, 'cuota2', '2018-12-29', 3000, NULL),
(179, 80, 'cuota3', '2018-12-31', 3000, NULL),
(180, 81, 'cuota4', '2018-10-27', 3000, NULL),
(181, 82, 'cuota5', '2019-05-08', 3000, NULL),
(182, 83, 'cuota6', '2019-01-10', 3000, NULL),
(183, 84, 'matricula', '2019-08-13', 3000, NULL),
(184, 85, 'cuota1', '2019-07-15', 3000, NULL),
(185, 86, 'cuota2', '2019-02-17', 3000, NULL),
(186, 87, 'cuota3', '2019-08-16', 3000, NULL),
(187, 88, 'cuota4', '2019-05-16', 3000, NULL),
(188, 89, 'cuota5', '2019-07-22', 3000, NULL),
(189, 90, 'cuota6', '2019-04-30', 3000, NULL),
(190, 91, 'matricula', '2019-08-16', 3000, NULL),
(191, 92, 'cuota1', '2018-11-15', 3000, NULL),
(192, 93, 'cuota2', '2019-02-01', 3000, NULL),
(193, 94, 'cuota3', '2019-07-15', 3000, NULL),
(194, 95, 'cuota4', '2019-01-14', 3000, NULL),
(195, 96, 'cuota5', '2018-09-25', 3000, NULL),
(196, 97, 'cuota6', '2019-09-08', 3000, NULL),
(197, 98, 'matricula', '2018-12-11', 3000, NULL),
(198, 99, 'cuota1', '2019-06-21', 3000, NULL),
(199, 1, 'cuota2', '2019-07-19', 3000, NULL),
(200, 2, 'cuota3', '2018-12-25', 3000, NULL),
(201, 3, 'cuota4', '2019-06-11', 3000, NULL),
(202, 4, 'cuota5', '2019-02-28', 3000, NULL),
(203, 5, 'cuota6', '2019-05-07', 3000, NULL),
(204, 6, 'matricula', '2019-07-10', 3000, NULL),
(205, 7, 'cuota1', '2018-11-23', 3000, NULL),
(206, 8, 'cuota2', '2019-08-06', 3000, NULL),
(207, 9, 'cuota3', '2019-05-24', 3000, NULL),
(208, 10, 'cuota4', '2019-07-18', 3000, NULL),
(209, 11, 'cuota5', '2018-11-04', 3000, NULL),
(210, 12, 'cuota6', '2018-11-23', 3000, NULL),
(211, 13, 'matricula', '2019-08-08', 3000, NULL),
(212, 14, 'cuota1', '2018-11-01', 3000, NULL),
(213, 15, 'cuota2', '2019-05-05', 3000, NULL),
(214, 16, 'cuota3', '2018-11-20', 3000, NULL),
(215, 17, 'cuota4', '2018-10-06', 3000, NULL),
(216, 18, 'cuota5', '2018-12-01', 3000, NULL),
(217, 19, 'cuota6', '2019-02-24', 3000, NULL),
(218, 20, 'matricula', '2018-11-30', 3000, NULL),
(219, 21, 'cuota1', '2019-08-27', 3000, NULL),
(220, 22, 'cuota2', '2019-03-27', 3000, NULL),
(221, 23, 'cuota3', '2018-11-08', 3000, NULL),
(222, 24, 'cuota4', '2018-12-13', 3000, NULL),
(223, 25, 'cuota5', '2019-08-11', 3000, NULL),
(224, 26, 'cuota6', '2018-12-31', 3000, NULL),
(225, 27, 'matricula', '2019-07-21', 3000, NULL),
(226, 28, 'cuota1', '2019-07-24', 3000, NULL),
(227, 29, 'cuota2', '2019-06-16', 3000, NULL),
(228, 30, 'cuota3', '2019-08-06', 3000, NULL),
(229, 31, 'cuota4', '2018-12-25', 3000, NULL),
(230, 32, 'cuota5', '2019-03-20', 3000, NULL),
(231, 33, 'cuota6', '2019-07-23', 3000, NULL),
(232, 34, 'matricula', '2019-08-06', 3000, NULL),
(233, 35, 'cuota1', '2019-03-12', 3000, NULL),
(234, 36, 'cuota2', '2019-03-17', 3000, NULL),
(235, 37, 'cuota3', '2018-09-17', 3000, NULL),
(236, 38, 'cuota4', '2019-05-24', 3000, NULL),
(237, 39, 'cuota5', '2019-03-15', 3000, NULL),
(238, 40, 'cuota6', '2018-12-06', 3000, NULL),
(239, 41, 'matricula', '2019-04-02', 3000, NULL),
(240, 42, 'cuota1', '2019-07-30', 3000, NULL),
(241, 43, 'cuota2', '2019-05-21', 3000, NULL),
(242, 44, 'cuota3', '2019-05-12', 3000, NULL),
(243, 45, 'cuota4', '2019-04-29', 3000, NULL),
(244, 46, 'cuota5', '2019-07-09', 3000, NULL),
(245, 47, 'cuota6', '2019-03-31', 3000, NULL),
(246, 48, 'matricula', '2019-08-05', 3000, NULL),
(247, 49, 'cuota1', '2019-05-31', 3000, NULL),
(248, 50, 'cuota2', '2018-09-30', 3000, NULL),
(249, 51, 'cuota3', '2019-08-25', 3000, NULL),
(250, 52, 'cuota4', '2019-01-09', 3000, NULL),
(251, 53, 'cuota5', '2019-02-09', 3000, NULL),
(252, 54, 'cuota6', '2019-09-02', 3000, NULL),
(253, 55, 'matricula', '2019-03-12', 3000, NULL),
(254, 56, 'cuota1', '2018-11-26', 3000, NULL),
(255, 57, 'cuota2', '2019-07-03', 3000, NULL),
(256, 58, 'cuota3', '2019-02-04', 3000, NULL),
(257, 59, 'cuota4', '2018-10-20', 3000, NULL),
(258, 60, 'cuota5', '2019-07-26', 3000, NULL),
(259, 61, 'cuota6', '2018-10-02', 3000, NULL),
(260, 62, 'matricula', '2018-09-28', 3000, NULL),
(261, 63, 'cuota1', '2019-07-18', 3000, NULL),
(262, 64, 'cuota2', '2019-08-11', 3000, NULL),
(263, 65, 'cuota3', '2019-08-15', 3000, NULL),
(264, 66, 'cuota4', '2019-09-15', 3000, NULL),
(265, 67, 'cuota5', '2019-07-01', 3000, NULL),
(266, 68, 'cuota6', '2018-11-04', 3000, NULL),
(267, 69, 'matricula', '2019-07-29', 3000, NULL),
(268, 70, 'cuota1', '2019-04-01', 3000, NULL),
(269, 71, 'cuota2', '2019-03-15', 3000, NULL),
(270, 72, 'cuota3', '2019-07-20', 3000, NULL),
(271, 73, 'cuota4', '2019-03-25', 3000, NULL),
(272, 74, 'cuota5', '2018-11-14', 3000, NULL),
(273, 75, 'cuota6', '2019-03-25', 3000, NULL),
(274, 76, 'matricula', '2019-03-14', 3000, NULL),
(275, 77, 'cuota1', '2019-08-04', 3000, NULL),
(276, 78, 'cuota2', '2019-02-20', 3000, NULL),
(277, 79, 'cuota3', '2019-02-12', 3000, NULL),
(278, 80, 'cuota4', '2018-09-19', 3000, NULL),
(279, 81, 'cuota5', '2019-02-23', 3000, NULL),
(280, 82, 'cuota6', '2019-01-12', 3000, NULL),
(281, 83, 'matricula', '2018-10-24', 3000, NULL),
(282, 84, 'cuota1', '2018-11-14', 3000, NULL),
(283, 85, 'cuota2', '2019-02-17', 3000, NULL),
(284, 86, 'cuota3', '2018-11-19', 3000, NULL),
(285, 87, 'cuota4', '2018-09-22', 3000, NULL),
(286, 88, 'cuota5', '2019-08-12', 3000, NULL),
(287, 89, 'cuota6', '2019-04-09', 3000, NULL),
(288, 90, 'matricula', '2019-05-15', 3000, NULL),
(289, 91, 'cuota1', '2018-09-21', 3000, NULL),
(290, 92, 'cuota2', '2019-05-04', 3000, NULL),
(291, 93, 'cuota3', '2019-03-14', 3000, NULL),
(292, 94, 'cuota4', '2019-02-17', 3000, NULL),
(293, 95, 'cuota5', '2019-03-21', 3000, NULL),
(294, 96, 'cuota6', '2018-12-19', 3000, NULL),
(295, 97, 'matricula', '2019-06-22', 3000, NULL),
(296, 98, 'cuota1', '2019-04-25', 3000, NULL),
(297, 99, 'cuota2', '2019-08-26', 3000, NULL),
(298, 1, 'cuota3', '2019-06-23', 3000, NULL),
(299, 2, 'cuota4', '2019-02-05', 3000, NULL),
(300, 3, 'cuota5', '2019-04-04', 3000, NULL),
(301, 4, 'cuota6', '2019-05-18', 3000, NULL),
(302, 5, 'matricula', '2019-05-24', 3000, NULL),
(303, 6, 'cuota1', '2018-12-14', 3000, NULL),
(304, 7, 'cuota2', '2019-02-16', 3000, NULL),
(305, 8, 'cuota3', '2019-09-03', 3000, NULL),
(306, 9, 'cuota4', '2019-01-18', 3000, NULL),
(307, 10, 'cuota5', '2019-06-22', 3000, NULL),
(308, 11, 'cuota6', '2019-03-22', 3000, NULL),
(309, 12, 'matricula', '2019-09-07', 3000, NULL),
(310, 13, 'cuota1', '2019-01-26', 3000, NULL),
(311, 14, 'cuota2', '2019-07-25', 3000, NULL),
(312, 15, 'cuota3', '2018-10-01', 3000, NULL),
(313, 16, 'cuota4', '2019-08-24', 3000, NULL),
(314, 17, 'cuota5', '2019-02-18', 3000, NULL),
(315, 18, 'cuota6', '2018-11-19', 3000, NULL),
(316, 19, 'matricula', '2019-05-28', 3000, NULL),
(317, 20, 'cuota1', '2019-05-24', 3000, NULL),
(318, 21, 'cuota2', '2018-12-05', 3000, NULL),
(319, 22, 'cuota3', '2019-09-03', 3000, NULL),
(320, 23, 'cuota4', '2018-11-12', 3000, NULL),
(321, 24, 'cuota5', '2018-12-12', 3000, NULL),
(322, 25, 'cuota6', '2019-01-10', 3000, NULL),
(323, 26, 'matricula', '2019-03-11', 3000, NULL),
(324, 27, 'cuota1', '2018-12-20', 3000, NULL),
(325, 28, 'cuota2', '2018-12-20', 3000, NULL),
(326, 29, 'cuota3', '2019-03-23', 3000, NULL),
(327, 30, 'cuota4', '2019-04-29', 3000, NULL),
(328, 31, 'cuota5', '2018-09-21', 3000, NULL),
(329, 32, 'cuota6', '2019-07-05', 3000, NULL),
(330, 33, 'matricula', '2018-11-01', 3000, NULL),
(331, 34, 'cuota1', '2019-05-02', 3000, NULL),
(332, 35, 'cuota2', '2019-05-23', 3000, NULL),
(333, 36, 'cuota3', '2019-06-26', 3000, NULL),
(334, 37, 'cuota4', '2019-07-11', 3000, NULL),
(335, 38, 'cuota5', '2019-07-07', 3000, NULL),
(336, 39, 'cuota6', '2019-07-14', 3000, NULL),
(337, 40, 'matricula', '2018-10-23', 3000, NULL),
(338, 41, 'cuota1', '2019-04-23', 3000, NULL),
(339, 42, 'cuota2', '2019-07-05', 3000, NULL),
(340, 43, 'cuota3', '2018-11-21', 3000, NULL),
(341, 44, 'cuota4', '2018-12-08', 3000, NULL),
(342, 45, 'cuota5', '2019-08-23', 3000, NULL),
(343, 46, 'cuota6', '2019-04-03', 3000, NULL),
(344, 47, 'matricula', '2019-06-08', 3000, NULL),
(345, 48, 'cuota1', '2018-10-28', 3000, NULL),
(346, 49, 'cuota2', '2019-05-27', 3000, NULL),
(347, 50, 'cuota3', '2019-02-20', 3000, NULL),
(348, 51, 'cuota4', '2018-09-24', 3000, NULL),
(349, 52, 'cuota5', '2019-01-13', 3000, NULL),
(350, 53, 'cuota6', '2019-03-03', 3000, NULL),
(351, 54, 'matricula', '2019-08-01', 3000, NULL),
(352, 55, 'cuota1', '2019-07-02', 3000, NULL),
(353, 56, 'cuota2', '2018-10-12', 3000, NULL),
(354, 57, 'cuota3', '2019-02-25', 3000, NULL),
(355, 58, 'cuota4', '2019-03-23', 3000, NULL),
(356, 59, 'cuota5', '2019-03-06', 3000, NULL),
(357, 60, 'cuota6', '2019-03-10', 3000, NULL),
(358, 61, 'matricula', '2019-05-25', 3000, NULL),
(359, 62, 'cuota1', '2019-04-13', 3000, NULL),
(360, 63, 'cuota2', '2019-05-22', 3000, NULL),
(361, 64, 'cuota3', '2019-03-16', 3000, NULL),
(362, 65, 'cuota4', '2019-06-07', 3000, NULL),
(363, 66, 'cuota5', '2019-06-22', 3000, NULL),
(364, 67, 'cuota6', '2019-06-13', 3000, NULL),
(365, 68, 'matricula', '2018-12-29', 3000, NULL),
(366, 69, 'cuota1', '2019-06-12', 3000, NULL),
(367, 70, 'cuota2', '2019-01-16', 3000, NULL),
(368, 71, 'cuota3', '2019-04-16', 3000, NULL),
(369, 72, 'cuota4', '2019-06-02', 3000, NULL),
(370, 73, 'cuota5', '2018-12-25', 3000, NULL),
(371, 74, 'cuota6', '2018-12-06', 3000, NULL),
(372, 75, 'matricula', '2019-08-02', 3000, NULL),
(373, 76, 'cuota1', '2019-03-09', 3000, NULL),
(374, 77, 'cuota2', '2019-03-01', 3000, NULL),
(375, 78, 'cuota3', '2019-04-30', 3000, NULL),
(376, 79, 'cuota4', '2019-07-10', 3000, NULL),
(377, 80, 'cuota5', '2018-11-09', 3000, NULL),
(378, 81, 'cuota6', '2019-07-10', 3000, NULL),
(379, 82, 'matricula', '2018-11-26', 3000, NULL),
(380, 83, 'cuota1', '2019-08-04', 3000, NULL),
(381, 84, 'cuota2', '2019-04-13', 3000, NULL),
(382, 85, 'cuota3', '2019-05-18', 3000, NULL),
(383, 86, 'cuota4', '2019-03-14', 3000, NULL),
(384, 87, 'cuota5', '2019-07-31', 3000, NULL),
(385, 88, 'cuota6', '2019-04-25', 3000, NULL),
(386, 89, 'matricula', '2019-01-13', 3000, NULL),
(387, 90, 'cuota1', '2019-03-30', 3000, NULL),
(388, 91, 'cuota2', '2018-09-27', 3000, NULL),
(389, 92, 'cuota3', '2019-01-06', 3000, NULL),
(390, 93, 'cuota4', '2019-05-19', 3000, NULL),
(391, 94, 'cuota5', '2019-03-09', 3000, NULL),
(392, 95, 'cuota6', '2019-03-18', 3000, NULL),
(393, 96, 'matricula', '2019-02-28', 3000, NULL),
(394, 97, 'cuota1', '2018-10-25', 3000, NULL),
(395, 98, 'cuota2', '2019-08-12', 3000, NULL),
(396, 99, 'cuota3', '2019-07-02', 3000, NULL),
(397, 1, 'cuota4', '2019-01-23', 3000, NULL),
(398, 2, 'cuota5', '2019-01-30', 3000, NULL),
(399, 3, 'cuota6', '2019-04-28', 3000, NULL),
(400, 4, 'matricula', '2019-06-01', 3000, NULL),
(401, 5, 'cuota1', '2019-01-24', 3000, NULL),
(402, 6, 'cuota2', '2019-01-11', 3000, NULL),
(403, 7, 'cuota3', '2019-07-09', 3000, NULL),
(404, 8, 'cuota4', '2018-09-19', 3000, NULL),
(405, 9, 'cuota5', '2019-01-01', 3000, NULL),
(406, 10, 'cuota6', '2019-05-03', 3000, NULL),
(407, 11, 'matricula', '2019-08-10', 3000, NULL),
(408, 12, 'cuota1', '2019-03-06', 3000, NULL),
(409, 13, 'cuota2', '2019-09-09', 3000, NULL),
(410, 14, 'cuota3', '2018-12-22', 3000, NULL),
(411, 15, 'cuota4', '2019-07-09', 3000, NULL),
(412, 16, 'cuota5', '2019-05-03', 3000, NULL),
(413, 17, 'cuota6', '2018-10-23', 3000, NULL),
(414, 18, 'matricula', '2018-11-08', 3000, NULL),
(415, 19, 'cuota1', '2019-06-03', 3000, NULL),
(416, 20, 'cuota2', '2019-05-04', 3000, NULL),
(417, 21, 'cuota3', '2018-11-25', 3000, NULL),
(418, 22, 'cuota4', '2019-05-16', 3000, NULL),
(419, 23, 'cuota5', '2019-01-25', 3000, NULL),
(420, 24, 'cuota6', '2019-06-21', 3000, NULL),
(421, 25, 'matricula', '2019-09-01', 3000, NULL),
(422, 26, 'cuota1', '2019-01-26', 3000, NULL),
(423, 27, 'cuota2', '2019-06-25', 3000, NULL),
(424, 28, 'cuota3', '2019-07-17', 3000, NULL),
(425, 29, 'cuota4', '2019-07-27', 3000, NULL),
(426, 30, 'cuota5', '2018-10-05', 3000, NULL),
(427, 31, 'cuota6', '2019-07-18', 3000, NULL),
(428, 32, 'matricula', '2019-05-14', 3000, NULL),
(429, 33, 'cuota1', '2019-06-02', 3000, NULL),
(430, 34, 'cuota2', '2019-03-22', 3000, NULL),
(431, 35, 'cuota3', '2019-05-14', 3000, NULL),
(432, 36, 'cuota4', '2019-03-08', 3000, NULL),
(433, 37, 'cuota5', '2019-01-27', 3000, NULL),
(434, 38, 'cuota6', '2019-01-04', 3000, NULL),
(435, 39, 'matricula', '2019-05-17', 3000, NULL),
(436, 40, 'cuota1', '2018-12-07', 3000, NULL),
(437, 41, 'cuota2', '2018-11-22', 3000, NULL),
(438, 42, 'cuota3', '2019-07-28', 3000, NULL),
(439, 43, 'cuota4', '2019-09-08', 3000, NULL),
(440, 44, 'cuota5', '2018-12-16', 3000, NULL),
(441, 45, 'cuota6', '2019-06-14', 3000, NULL),
(442, 46, 'matricula', '2019-03-11', 3000, NULL),
(443, 47, 'cuota1', '2018-10-02', 3000, NULL),
(444, 48, 'cuota2', '2019-01-11', 3000, NULL),
(445, 49, 'cuota3', '2019-08-12', 3000, NULL),
(446, 50, 'cuota4', '2019-09-12', 3000, NULL),
(447, 51, 'cuota5', '2019-07-08', 3000, NULL),
(448, 52, 'cuota6', '2019-02-01', 3000, NULL),
(449, 53, 'matricula', '2018-11-30', 3000, NULL),
(450, 54, 'cuota1', '2019-05-15', 3000, NULL),
(451, 55, 'cuota2', '2019-06-18', 3000, NULL),
(452, 56, 'cuota3', '2019-08-03', 3000, NULL),
(453, 57, 'cuota4', '2019-01-14', 3000, NULL),
(454, 58, 'cuota5', '2018-12-19', 3000, NULL),
(455, 59, 'cuota6', '2019-07-17', 3000, NULL),
(456, 60, 'matricula', '2019-09-16', 3000, NULL),
(457, 61, 'cuota1', '2019-01-30', 3000, NULL),
(458, 62, 'cuota2', '2019-02-03', 3000, NULL),
(459, 63, 'cuota3', '2018-11-14', 3000, NULL),
(460, 64, 'cuota4', '2019-02-10', 3000, NULL),
(461, 65, 'cuota5', '2019-05-10', 3000, NULL),
(462, 66, 'cuota6', '2018-09-26', 3000, NULL),
(463, 67, 'matricula', '2019-06-09', 3000, NULL),
(464, 68, 'cuota1', '2019-04-20', 3000, NULL),
(465, 69, 'cuota2', '2019-03-09', 3000, NULL),
(466, 70, 'cuota3', '2018-10-02', 3000, NULL),
(467, 71, 'cuota4', '2019-02-20', 3000, NULL),
(468, 72, 'cuota5', '2019-02-01', 3000, NULL),
(469, 73, 'cuota6', '2019-05-28', 3000, NULL),
(470, 74, 'matricula', '2019-07-21', 3000, NULL),
(471, 75, 'cuota1', '2018-11-11', 3000, NULL),
(472, 76, 'cuota2', '2019-03-20', 3000, NULL),
(473, 77, 'cuota3', '2019-01-03', 3000, NULL),
(474, 78, 'cuota4', '2019-05-26', 3000, NULL),
(475, 79, 'cuota5', '2019-03-27', 3000, NULL),
(476, 80, 'cuota6', '2019-08-21', 3000, NULL),
(477, 81, 'matricula', '2019-02-19', 3000, NULL),
(478, 82, 'cuota1', '2019-04-27', 3000, NULL),
(479, 83, 'cuota2', '2019-03-16', 3000, NULL),
(480, 84, 'cuota3', '2019-08-28', 3000, NULL),
(481, 85, 'cuota4', '2018-12-26', 3000, NULL),
(482, 86, 'cuota5', '2019-06-11', 3000, NULL),
(483, 87, 'cuota6', '2019-09-10', 3000, NULL),
(484, 88, 'matricula', '2018-09-21', 3000, NULL),
(485, 89, 'cuota1', '2018-12-20', 3000, NULL),
(486, 90, 'cuota2', '2018-12-13', 3000, NULL),
(487, 91, 'cuota3', '2019-03-29', 3000, NULL),
(488, 92, 'cuota4', '2019-04-19', 3000, NULL),
(489, 93, 'cuota5', '2019-03-31', 3000, NULL),
(490, 94, 'cuota6', '2019-08-25', 3000, NULL),
(491, 95, 'matricula', '2019-08-10', 3000, NULL),
(492, 96, 'cuota1', '2019-01-09', 3000, NULL),
(493, 97, 'cuota2', '2018-11-20', 3000, NULL),
(494, 98, 'cuota3', '2018-12-07', 3000, NULL),
(495, 99, 'cuota4', '2018-12-11', 3000, NULL),
(496, 1, 'cuota5', '2019-05-12', 3000, NULL),
(497, 2, 'cuota6', '2018-09-24', 3000, NULL),
(498, 3, 'matricula', '2019-03-05', 3000, NULL),
(499, 4, 'cuota1', '2019-01-01', 3000, NULL),
(500, 5, 'cuota2', '2019-05-23', 3000, NULL),
(501, 6, 'cuota3', '2019-03-20', 3000, NULL),
(502, 7, 'cuota4', '2019-04-09', 3000, NULL),
(503, 8, 'cuota5', '2019-03-26', 3000, NULL),
(504, 9, 'cuota6', '2018-12-08', 3000, NULL),
(505, 10, 'matricula', '2018-09-25', 3000, NULL),
(506, 11, 'cuota1', '2018-11-14', 3000, NULL),
(507, 12, 'cuota2', '2018-10-13', 3000, NULL),
(508, 13, 'cuota3', '2019-01-06', 3000, NULL),
(509, 14, 'cuota4', '2019-01-01', 3000, NULL),
(510, 15, 'cuota5', '2019-04-06', 3000, NULL),
(511, 16, 'cuota6', '2019-01-16', 3000, NULL),
(512, 17, 'matricula', '2018-10-10', 3000, NULL),
(513, 18, 'cuota1', '2019-05-08', 3000, NULL),
(514, 19, 'cuota2', '2019-08-25', 3000, NULL),
(515, 20, 'cuota3', '2019-07-24', 3000, NULL),
(516, 21, 'cuota4', '2019-03-31', 3000, NULL),
(517, 22, 'cuota5', '2018-12-17', 3000, NULL),
(518, 23, 'cuota6', '2019-04-28', 3000, NULL),
(519, 24, 'matricula', '2019-03-14', 3000, NULL),
(520, 25, 'cuota1', '2019-08-24', 3000, NULL),
(521, 26, 'cuota2', '2019-05-28', 3000, NULL),
(522, 27, 'cuota3', '2019-07-03', 3000, NULL),
(523, 28, 'cuota4', '2019-05-22', 3000, NULL),
(524, 29, 'cuota5', '2019-01-25', 3000, NULL),
(525, 30, 'cuota6', '2019-02-02', 3000, NULL),
(526, 31, 'matricula', '2019-01-04', 3000, NULL),
(527, 32, 'cuota1', '2018-10-25', 3000, NULL),
(528, 33, 'cuota2', '2018-10-14', 3000, NULL),
(529, 34, 'cuota3', '2018-11-28', 3000, NULL),
(530, 35, 'cuota4', '2019-02-24', 3000, NULL),
(531, 36, 'cuota5', '2019-01-07', 3000, NULL),
(532, 37, 'cuota6', '2018-12-09', 3000, NULL),
(533, 38, 'matricula', '2019-07-25', 3000, NULL),
(534, 39, 'cuota1', '2018-09-22', 3000, NULL),
(535, 40, 'cuota2', '2019-02-28', 3000, NULL),
(536, 41, 'cuota3', '2018-12-05', 3000, NULL),
(537, 42, 'cuota4', '2019-05-28', 3000, NULL),
(538, 43, 'cuota5', '2019-05-14', 3000, NULL),
(539, 44, 'cuota6', '2018-12-14', 3000, NULL),
(540, 45, 'matricula', '2019-05-03', 3000, NULL),
(541, 46, 'cuota1', '2019-01-28', 3000, NULL),
(542, 47, 'cuota2', '2018-12-02', 3000, NULL),
(543, 48, 'cuota3', '2019-09-16', 3000, NULL),
(544, 49, 'cuota4', '2019-06-11', 3000, NULL),
(545, 50, 'cuota5', '2019-06-14', 3000, NULL),
(546, 51, 'cuota6', '2019-07-01', 3000, NULL),
(547, 52, 'matricula', '2019-07-12', 3000, NULL),
(548, 53, 'cuota1', '2019-02-15', 3000, NULL),
(549, 54, 'cuota2', '2019-08-17', 3000, NULL),
(550, 55, 'cuota3', '2018-10-16', 3000, NULL),
(551, 56, 'cuota4', '2019-06-17', 3000, NULL),
(552, 57, 'cuota5', '2019-09-14', 3000, NULL),
(553, 58, 'cuota6', '2019-03-16', 3000, NULL),
(554, 59, 'matricula', '2019-06-15', 3000, NULL),
(555, 60, 'cuota1', '2019-01-01', 3000, NULL),
(556, 61, 'cuota2', '2019-02-15', 3000, NULL),
(557, 62, 'cuota3', '2018-12-04', 3000, NULL),
(558, 63, 'cuota4', '2018-11-20', 3000, NULL),
(559, 64, 'cuota5', '2018-10-18', 3000, NULL),
(560, 65, 'cuota6', '2019-05-09', 3000, NULL),
(561, 66, 'matricula', '2018-09-22', 3000, NULL),
(562, 67, 'cuota1', '2018-10-11', 3000, NULL),
(563, 68, 'cuota2', '2019-09-09', 3000, NULL),
(564, 69, 'cuota3', '2019-05-10', 3000, NULL),
(565, 70, 'cuota4', '2019-06-26', 3000, NULL),
(566, 71, 'cuota5', '2018-10-11', 3000, NULL),
(567, 72, 'cuota6', '2019-04-08', 3000, NULL),
(568, 73, 'matricula', '2019-03-17', 3000, NULL),
(569, 74, 'cuota1', '2019-01-16', 3000, NULL),
(570, 75, 'cuota2', '2019-03-28', 3000, NULL),
(571, 76, 'cuota3', '2019-01-25', 3000, NULL),
(572, 77, 'cuota4', '2019-02-21', 3000, NULL),
(573, 78, 'cuota5', '2019-02-26', 3000, NULL),
(574, 79, 'cuota6', '2019-07-18', 3000, NULL),
(575, 80, 'matricula', '2019-03-04', 3000, NULL),
(576, 81, 'cuota1', '2019-07-30', 3000, NULL),
(577, 82, 'cuota2', '2019-05-13', 3000, NULL),
(578, 83, 'cuota3', '2019-09-08', 3000, NULL),
(579, 84, 'cuota4', '2019-04-05', 3000, NULL),
(580, 85, 'cuota5', '2018-09-23', 3000, NULL),
(581, 86, 'cuota6', '2019-07-04', 3000, NULL),
(582, 87, 'matricula', '2019-06-19', 3000, NULL),
(583, 88, 'cuota1', '2019-06-03', 3000, NULL),
(584, 89, 'cuota2', '2018-12-16', 3000, NULL),
(585, 90, 'cuota3', '2018-12-21', 3000, NULL),
(586, 91, 'cuota4', '2018-09-30', 3000, NULL),
(587, 92, 'cuota5', '2019-03-03', 3000, NULL),
(588, 93, 'cuota6', '2019-02-09', 3000, NULL),
(589, 94, 'matricula', '2019-03-08', 3000, NULL),
(590, 95, 'cuota1', '2019-06-18', 3000, NULL),
(591, 96, 'cuota2', '2018-12-04', 3000, NULL),
(592, 97, 'cuota3', '2019-06-07', 3000, NULL),
(593, 98, 'cuota4', '2019-09-11', 3000, NULL),
(594, 99, 'cuota5', '2019-07-11', 3000, NULL),
(595, 1, 'cuota6', '2019-07-17', 3000, NULL),
(596, 2, 'matricula', '2019-02-24', 3000, NULL),
(597, 3, 'cuota1', '2019-01-25', 3000, NULL),
(598, 4, 'cuota2', '2019-06-19', 3000, NULL),
(599, 5, 'cuota3', '2019-05-12', 3000, NULL),
(600, 6, 'cuota4', '2019-08-27', 3000, NULL),
(601, 7, 'cuota5', '2019-01-24', 3000, NULL),
(602, 8, 'cuota6', '2019-03-02', 3000, NULL),
(603, 9, 'matricula', '2018-10-19', 3000, NULL),
(604, 10, 'cuota1', '2018-11-17', 3000, NULL),
(605, 11, 'cuota2', '2019-07-20', 3000, NULL),
(606, 12, 'cuota3', '2019-03-19', 3000, NULL),
(607, 13, 'cuota4', '2019-04-09', 3000, NULL),
(608, 14, 'cuota5', '2018-12-25', 3000, NULL),
(609, 15, 'cuota6', '2019-03-16', 3000, NULL),
(610, 16, 'matricula', '2019-09-15', 3000, NULL),
(611, 17, 'cuota1', '2018-11-13', 3000, NULL),
(612, 18, 'cuota2', '2018-10-11', 3000, NULL),
(613, 19, 'cuota3', '2018-09-26', 3000, NULL),
(614, 20, 'cuota4', '2018-12-11', 3000, NULL),
(615, 21, 'cuota5', '2019-04-13', 3000, NULL),
(616, 22, 'cuota6', '2019-03-15', 3000, NULL),
(617, 23, 'matricula', '2019-05-16', 3000, NULL),
(618, 24, 'cuota1', '2019-01-19', 3000, NULL),
(619, 25, 'cuota2', '2019-06-26', 3000, NULL),
(620, 26, 'cuota3', '2018-11-20', 3000, NULL),
(621, 27, 'cuota4', '2019-05-13', 3000, NULL),
(622, 28, 'cuota5', '2019-07-16', 3000, NULL),
(623, 29, 'cuota6', '2018-12-06', 3000, NULL),
(624, 30, 'matricula', '2019-08-03', 3000, NULL),
(625, 31, 'cuota1', '2019-04-10', 3000, NULL),
(626, 32, 'cuota2', '2018-09-20', 3000, NULL),
(627, 33, 'cuota3', '2019-04-12', 3000, NULL),
(628, 34, 'cuota4', '2019-04-03', 3000, NULL),
(629, 35, 'cuota5', '2019-06-03', 3000, NULL),
(630, 36, 'cuota6', '2019-05-28', 3000, NULL),
(631, 37, 'matricula', '2018-12-01', 3000, NULL),
(632, 38, 'cuota1', '2019-03-01', 3000, NULL),
(633, 39, 'cuota2', '2018-10-17', 3000, NULL),
(634, 40, 'cuota3', '2019-07-07', 3000, NULL),
(635, 41, 'cuota4', '2019-01-23', 3000, NULL),
(636, 42, 'cuota5', '2019-07-20', 3000, NULL),
(637, 43, 'cuota6', '2018-10-23', 3000, NULL),
(638, 44, 'matricula', '2019-03-03', 3000, NULL),
(639, 45, 'cuota1', '2019-09-16', 3000, NULL),
(640, 46, 'cuota2', '2019-04-25', 3000, NULL),
(641, 47, 'cuota3', '2018-10-04', 3000, NULL),
(642, 48, 'cuota4', '2019-07-03', 3000, NULL),
(643, 49, 'cuota5', '2019-02-13', 3000, NULL),
(644, 50, 'cuota6', '2019-07-05', 3000, NULL),
(645, 51, 'matricula', '2019-04-06', 3000, NULL),
(646, 52, 'cuota1', '2019-01-23', 3000, NULL),
(647, 53, 'cuota2', '2018-09-28', 3000, NULL),
(648, 54, 'cuota3', '2019-01-24', 3000, NULL),
(649, 55, 'cuota4', '2018-11-04', 3000, NULL),
(650, 56, 'cuota5', '2019-03-22', 3000, NULL),
(651, 57, 'cuota6', '2019-08-25', 3000, NULL),
(652, 58, 'matricula', '2019-08-09', 3000, NULL),
(653, 59, 'cuota1', '2019-04-05', 3000, NULL),
(654, 60, 'cuota2', '2019-09-16', 3000, NULL),
(655, 61, 'cuota3', '2019-03-08', 3000, NULL),
(656, 62, 'cuota4', '2019-01-19', 3000, NULL),
(657, 63, 'cuota5', '2019-01-16', 3000, NULL),
(658, 64, 'cuota6', '2019-07-14', 3000, NULL),
(659, 65, 'matricula', '2019-08-22', 3000, NULL),
(660, 66, 'cuota1', '2019-08-09', 3000, NULL),
(661, 67, 'cuota2', '2018-11-08', 3000, NULL),
(662, 68, 'cuota3', '2019-07-14', 3000, NULL),
(663, 69, 'cuota4', '2018-10-15', 3000, NULL),
(664, 70, 'cuota5', '2019-01-18', 3000, NULL),
(665, 71, 'cuota6', '2018-11-05', 3000, NULL),
(666, 72, 'matricula', '2018-11-28', 3000, NULL),
(667, 73, 'cuota1', '2019-03-17', 3000, NULL),
(668, 74, 'cuota2', '2019-03-09', 3000, NULL),
(669, 75, 'cuota3', '2019-05-19', 3000, NULL),
(670, 76, 'cuota4', '2019-01-15', 3000, NULL),
(671, 77, 'cuota5', '2019-05-09', 3000, NULL),
(672, 78, 'cuota6', '2019-02-19', 3000, NULL),
(673, 79, 'matricula', '2019-05-26', 3000, NULL),
(674, 80, 'cuota1', '2019-06-01', 3000, NULL),
(675, 81, 'cuota2', '2018-09-21', 3000, NULL),
(676, 82, 'cuota3', '2019-09-06', 3000, NULL),
(677, 83, 'cuota4', '2019-02-20', 3000, NULL),
(678, 84, 'cuota5', '2019-09-06', 3000, NULL),
(679, 85, 'cuota6', '2018-12-03', 3000, NULL),
(680, 86, 'matricula', '2019-03-21', 3000, NULL),
(681, 87, 'cuota1', '2018-10-27', 3000, NULL),
(682, 88, 'cuota2', '2019-05-27', 3000, NULL),
(683, 89, 'cuota3', '2019-08-17', 3000, NULL),
(684, 90, 'cuota4', '2018-11-12', 3000, NULL),
(685, 91, 'cuota5', '2019-05-19', 3000, NULL),
(686, 92, 'cuota6', '2018-10-26', 3000, NULL),
(687, 93, 'matricula', '2019-03-05', 3000, NULL),
(688, 94, 'cuota1', '2019-06-26', 3000, NULL),
(689, 95, 'cuota2', '2019-03-07', 3000, NULL),
(690, 96, 'cuota3', '2018-10-16', 3000, NULL),
(691, 97, 'cuota4', '2019-04-08', 3000, NULL),
(692, 98, 'cuota5', '2019-04-28', 3000, NULL),
(693, 99, 'cuota6', '2019-08-17', 3000, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
CREATE TABLE `departamentos` (
  `depto_id` int(9) UNSIGNED NOT NULL,
  `dpto_name` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dependencies`
--

DROP TABLE IF EXISTS `dependencies`;
CREATE TABLE `dependencies` (
  `materia_id` int(9) UNSIGNED NOT NULL,
  `dependency` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentacion`
--

DROP TABLE IF EXISTS `documentacion`;
CREATE TABLE `documentacion` (
  `documentacion_id` int(9) UNSIGNED NOT NULL,
  `alumno_id` int(9) UNSIGNED NOT NULL,
  `fecha_alta` datetime DEFAULT NULL,
  `doc_type_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doc_type`
--

DROP TABLE IF EXISTS `doc_type`;
CREATE TABLE `doc_type` (
  `doc_type_id` int(9) UNSIGNED NOT NULL,
  `type_name` varchar(100) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluaciones`
--

DROP TABLE IF EXISTS `evaluaciones`;
CREATE TABLE `evaluaciones` (
  `evaluacion_id` int(9) UNSIGNED NOT NULL,
  `cursada_id` int(9) UNSIGNED NOT NULL,
  `eval_type_id` int(9) UNSIGNED DEFAULT NULL,
  `nota` int(3) UNSIGNED DEFAULT NULL,
  `observaciones` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eval_type`
--

DROP TABLE IF EXISTS `eval_type`;
CREATE TABLE `eval_type` (
  `eval_type_id` int(9) UNSIGNED NOT NULL,
  `type_name` varchar(100) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

DROP TABLE IF EXISTS `materias`;
CREATE TABLE `materias` (
  `materia_id` int(9) UNSIGNED NOT NULL,
  `nombre` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `id_alumno` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias_x_alumno_x_carrera`
--

DROP TABLE IF EXISTS `materias_x_alumno_x_carrera`;
CREATE TABLE `materias_x_alumno_x_carrera` (
  `alumno_id` int(9) UNSIGNED NOT NULL,
  `materia_id` int(9) UNSIGNED NOT NULL,
  `carrera_id` int(9) UNSIGNED NOT NULL,
  `periodo_id` int(9) UNSIGNED NOT NULL,
  `nota` int(4) UNSIGNED NOT NULL,
  `fecha_inscripcion` date NOT NULL,
  `cursada_id` int(9) UNSIGNED DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `motivo_fin` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias_x_carreras`
--

DROP TABLE IF EXISTS `materias_x_carreras`;
CREATE TABLE `materias_x_carreras` (
  `carrera_id` int(9) UNSIGNED NOT NULL,
  `materia_id` int(9) UNSIGNED NOT NULL,
  `depto_id` int(9) UNSIGNED DEFAULT NULL,
  `anio_carrera` int(2) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modalidades`
--

DROP TABLE IF EXISTS `modalidades`;
CREATE TABLE `modalidades` (
  `mod_id` int(9) UNSIGNED NOT NULL,
  `p` int(11) NOT NULL,
  `sp` int(11) NOT NULL,
  `v` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

DROP TABLE IF EXISTS `movimientos`;
CREATE TABLE `movimientos` (
  `id_operacion` int(9) UNSIGNED NOT NULL,
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `id_caja` int(9) UNSIGNED NOT NULL,
  `importe` decimal(10,0) NOT NULL,
  `fechayhora` datetime NOT NULL,
  `detalle` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `movimiento_type_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`id_operacion`, `usuario_id`, `id_caja`, `importe`, `fechayhora`, `detalle`, `movimiento_type_id`) VALUES
(1, 1, 1, '2000', '1992-01-01 00:00:00', 'pago cuota', 1),
(2, 1, 1, '4000', '1992-01-01 00:00:00', 'pagoinscripcion', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos_types`
--

DROP TABLE IF EXISTS `movimientos_types`;
CREATE TABLE `movimientos_types` (
  `movimiento_type_id` int(9) UNSIGNED NOT NULL,
  `cuenta_type` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `internal_code` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `cuenta_contable` varchar(100) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `movimientos_types`
--

INSERT INTO `movimientos_types` (`movimiento_type_id`, `cuenta_type`, `internal_code`, `cuenta_contable`) VALUES
(1, 'caja', '000001', 'caja y banco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

DROP TABLE IF EXISTS `pagos`;
CREATE TABLE `pagos` (
  `id` int(9) UNSIGNED NOT NULL,
  `alumno_id` int(9) UNSIGNED NOT NULL,
  `concepto` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `importe` int(11) NOT NULL,
  `fecha_pasada` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id`, `alumno_id`, `concepto`, `fecha`, `importe`, `fecha_pasada`) VALUES
(1, 46, 'matricula', '2018-09-29', 3000, NULL),
(2, 52, 'cuota1', '2019-04-17', 3000, NULL),
(3, 99, 'cuota2', '2019-03-02', 3000, NULL),
(4, 70, 'cuota3', '2019-01-22', 3000, NULL),
(5, 59, 'cuota4', '2019-08-17', 3000, NULL),
(6, 40, 'cuota5', '2019-06-02', 3000, NULL),
(7, 8, 'cuota6', '2019-07-19', 3000, NULL),
(8, 39, 'matricula', '2019-08-29', 3000, NULL),
(9, 85, 'cuota1', '2018-10-27', 3000, NULL),
(10, 10, 'cuota2', '2019-05-07', 3000, NULL),
(11, 96, 'cuota3', '2018-12-17', 3000, NULL),
(12, 95, 'cuota4', '2019-08-20', 3000, NULL),
(13, 12, 'cuota5', '2018-12-28', 3000, NULL),
(14, 84, 'cuota6', '2019-05-30', 3000, NULL),
(15, 2, 'matricula', '2018-11-14', 3000, NULL),
(16, 50, 'cuota1', '2019-09-16', 3000, NULL),
(17, 85, 'cuota2', '2019-07-13', 3000, NULL),
(18, 22, 'cuota3', '2019-03-26', 3000, NULL),
(19, 94, 'cuota4', '2019-03-11', 3000, NULL),
(20, 93, 'cuota5', '2019-03-12', 3000, NULL),
(21, 80, 'cuota6', '2019-09-16', 3000, NULL),
(22, 35, 'matricula', '2019-06-19', 3000, NULL),
(23, 65, 'cuota1', '2019-07-01', 3000, NULL),
(24, 80, 'cuota2', '2018-10-07', 3000, NULL),
(25, 60, 'cuota3', '2019-02-01', 3000, NULL),
(26, 85, 'cuota4', '2019-05-30', 3000, NULL),
(27, 87, 'cuota5', '2018-11-17', 3000, NULL),
(28, 40, 'cuota6', '2019-05-20', 3000, NULL),
(29, 39, 'matricula', '2019-04-06', 3000, NULL),
(30, 12, 'cuota1', '2019-06-14', 3000, NULL),
(31, 42, 'cuota2', '2019-02-02', 3000, NULL),
(32, 12, 'cuota3', '2019-02-14', 3000, NULL),
(33, 37, 'cuota4', '2019-06-10', 3000, NULL),
(34, 53, 'cuota5', '2019-06-19', 3000, NULL),
(35, 52, 'cuota6', '2019-05-16', 3000, NULL),
(36, 55, 'matricula', '2019-02-07', 3000, NULL),
(37, 42, 'cuota1', '2018-11-20', 3000, NULL),
(38, 71, 'cuota2', '2019-05-11', 3000, NULL),
(39, 94, 'cuota3', '2019-09-07', 3000, NULL),
(40, 83, 'cuota4', '2019-03-11', 3000, NULL),
(41, 22, 'cuota5', '2018-10-15', 3000, NULL),
(42, 55, 'cuota6', '2018-12-13', 3000, NULL),
(43, 96, 'matricula', '2019-02-05', 3000, NULL),
(44, 66, 'cuota1', '2019-05-03', 3000, NULL),
(45, 11, 'cuota2', '2019-08-26', 3000, NULL),
(46, 44, 'cuota3', '2019-03-19', 3000, NULL),
(47, 78, 'cuota4', '2019-06-07', 3000, NULL),
(48, 65, 'cuota5', '2019-08-30', 3000, NULL),
(49, 51, 'cuota6', '2019-08-06', 3000, NULL),
(50, 82, 'matricula', '2019-07-06', 3000, NULL),
(51, 47, 'cuota1', '2018-11-28', 3000, NULL),
(52, 62, 'cuota2', '2019-04-04', 3000, NULL),
(53, 25, 'cuota3', '2019-03-12', 3000, NULL),
(54, 53, 'cuota4', '2019-04-15', 3000, NULL),
(55, 14, 'cuota5', '2019-05-07', 3000, NULL),
(56, 31, 'cuota6', '2019-08-16', 3000, NULL),
(57, 76, 'matricula', '2018-11-08', 3000, NULL),
(58, 77, 'cuota1', '2019-07-17', 3000, NULL),
(59, 2, 'cuota2', '2019-01-12', 3000, NULL),
(60, 78, 'cuota3', '2019-05-24', 3000, NULL),
(61, 30, 'cuota4', '2019-03-03', 3000, NULL),
(62, 67, 'cuota5', '2019-02-13', 3000, NULL),
(63, 42, 'cuota6', '2018-09-24', 3000, NULL),
(64, 86, 'matricula', '2018-11-09', 3000, NULL),
(65, 73, 'cuota1', '2018-10-02', 3000, NULL),
(66, 70, 'cuota2', '2019-07-07', 3000, NULL),
(67, 82, 'cuota3', '2018-12-11', 3000, NULL),
(68, 39, 'cuota4', '2019-03-26', 3000, NULL),
(69, 13, 'cuota5', '2018-12-03', 3000, NULL),
(70, 32, 'cuota6', '2019-05-30', 3000, NULL),
(71, 33, 'matricula', '2018-09-24', 3000, NULL),
(72, 55, 'cuota1', '2018-10-27', 3000, NULL),
(73, 62, 'cuota2', '2019-05-22', 3000, NULL),
(74, 36, 'cuota3', '2019-04-03', 3000, NULL),
(75, 72, 'cuota4', '2019-04-14', 3000, NULL),
(76, 21, 'cuota5', '2019-01-27', 3000, NULL),
(77, 3, 'cuota6', '2018-10-14', 3000, NULL),
(78, 82, 'matricula', '2018-12-26', 3000, NULL),
(79, 83, 'cuota1', '2019-07-26', 3000, NULL),
(80, 61, 'cuota2', '2018-11-07', 3000, NULL),
(81, 53, 'cuota3', '2018-09-21', 3000, NULL),
(82, 38, 'cuota4', '2019-01-19', 3000, NULL),
(83, 46, 'cuota5', '2019-03-31', 3000, NULL),
(84, 37, 'cuota6', '2019-08-16', 3000, NULL),
(85, 65, 'matricula', '2019-05-06', 3000, NULL),
(86, 45, 'cuota1', '2018-11-19', 3000, NULL),
(87, 5, 'cuota2', '2019-03-15', 3000, NULL),
(88, 50, 'cuota3', '2018-09-21', 3000, NULL),
(89, 33, 'cuota4', '2019-09-02', 3000, NULL),
(90, 91, 'cuota5', '2018-11-16', 3000, NULL),
(91, 35, 'cuota6', '2018-10-16', 3000, NULL),
(92, 28, 'matricula', '2018-12-02', 3000, NULL),
(93, 68, 'cuota1', '2018-10-30', 3000, NULL),
(94, 71, 'cuota2', '2018-11-01', 3000, NULL),
(95, 22, 'cuota3', '2019-08-04', 3000, NULL),
(96, 4, 'cuota4', '2019-06-05', 3000, NULL),
(97, 11, 'cuota5', '2018-10-27', 3000, NULL),
(98, 75, 'cuota6', '2018-11-23', 3000, NULL),
(99, 17, 'matricula', '2018-11-25', 3000, NULL),
(100, 44, 'cuota1', '2019-05-01', 3000, NULL),
(101, 89, 'cuota2', '2018-10-18', 3000, NULL),
(102, 61, 'cuota3', '2018-10-23', 3000, NULL),
(103, 13, 'cuota4', '2019-03-19', 3000, NULL),
(104, 88, 'cuota5', '2019-07-11', 3000, NULL),
(105, 62, 'cuota6', '2019-09-11', 3000, NULL),
(106, 72, 'matricula', '2019-01-14', 3000, NULL),
(107, 44, 'cuota1', '2019-01-10', 3000, NULL),
(108, 37, 'cuota2', '2019-04-29', 3000, NULL),
(109, 63, 'cuota3', '2019-09-09', 3000, NULL),
(110, 92, 'cuota4', '2019-02-08', 3000, NULL),
(111, 96, 'cuota5', '2018-11-08', 3000, NULL),
(112, 84, 'cuota6', '2019-07-31', 3000, NULL),
(113, 58, 'matricula', '2019-01-09', 3000, NULL),
(114, 93, 'cuota1', '2019-05-09', 3000, NULL),
(115, 46, 'cuota2', '2019-06-27', 3000, NULL),
(116, 30, 'cuota3', '2019-04-17', 3000, NULL),
(117, 11, 'cuota4', '2019-04-01', 3000, NULL),
(118, 85, 'cuota5', '2018-11-28', 3000, NULL),
(119, 99, 'cuota6', '2019-07-14', 3000, NULL),
(120, 37, 'matricula', '2018-09-21', 3000, NULL),
(121, 25, 'cuota1', '2019-02-15', 3000, NULL),
(122, 36, 'cuota2', '2019-06-02', 3000, NULL),
(123, 14, 'cuota3', '2019-08-27', 3000, NULL),
(124, 94, 'cuota4', '2019-03-08', 3000, NULL),
(125, 70, 'cuota5', '2019-08-29', 3000, NULL),
(126, 21, 'cuota6', '2019-03-06', 3000, NULL),
(127, 44, 'matricula', '2019-07-27', 3000, NULL),
(128, 46, 'cuota1', '2018-09-19', 3000, NULL),
(129, 32, 'cuota2', '2019-03-28', 3000, NULL),
(130, 27, 'cuota3', '2019-01-25', 3000, NULL),
(131, 38, 'cuota4', '2019-07-24', 3000, NULL),
(132, 38, 'cuota5', '2019-03-18', 3000, NULL),
(133, 68, 'cuota6', '2019-03-07', 3000, NULL),
(134, 34, 'matricula', '2018-12-07', 3000, NULL),
(135, 78, 'cuota1', '2019-06-30', 3000, NULL),
(136, 37, 'cuota2', '2019-07-16', 3000, NULL),
(137, 81, 'cuota3', '2019-06-04', 3000, NULL),
(138, 93, 'cuota4', '2019-09-07', 3000, NULL),
(139, 39, 'cuota5', '2019-04-11', 3000, NULL),
(140, 72, 'cuota6', '2019-03-26', 3000, NULL),
(141, 41, 'matricula', '2019-02-05', 3000, NULL),
(142, 6, 'cuota1', '2019-07-04', 3000, NULL),
(143, 67, 'cuota2', '2019-07-13', 3000, NULL),
(144, 55, 'cuota3', '2019-01-05', 3000, NULL),
(145, 71, 'cuota4', '2019-01-17', 3000, NULL),
(146, 84, 'cuota5', '2019-02-27', 3000, NULL),
(147, 56, 'cuota6', '2019-08-03', 3000, NULL),
(148, 34, 'matricula', '2018-12-05', 3000, NULL),
(149, 47, 'cuota1', '2018-12-18', 3000, NULL),
(150, 19, 'cuota2', '2018-12-14', 3000, NULL),
(151, 90, 'cuota3', '2019-04-15', 3000, NULL),
(152, 25, 'cuota4', '2019-07-26', 3000, NULL),
(153, 81, 'cuota5', '2019-02-26', 3000, NULL),
(154, 92, 'cuota6', '2018-10-13', 3000, NULL),
(155, 72, 'matricula', '2019-04-13', 3000, NULL),
(156, 28, 'cuota1', '2019-03-27', 3000, NULL),
(157, 49, 'cuota2', '2019-04-04', 3000, NULL),
(158, 46, 'cuota3', '2019-09-15', 3000, NULL),
(159, 93, 'cuota4', '2019-04-08', 3000, NULL),
(160, 39, 'cuota5', '2019-08-09', 3000, NULL),
(161, 84, 'cuota6', '2019-04-05', 3000, NULL),
(162, 3, 'matricula', '2019-03-01', 3000, NULL),
(163, 85, 'cuota1', '2018-10-14', 3000, NULL),
(164, 90, 'cuota2', '2019-05-04', 3000, NULL),
(165, 64, 'cuota3', '2019-02-25', 3000, NULL),
(166, 75, 'cuota4', '2019-03-11', 3000, NULL),
(167, 83, 'cuota5', '2019-05-05', 3000, NULL),
(168, 41, 'cuota6', '2019-01-09', 3000, NULL),
(169, 64, 'matricula', '2019-08-23', 3000, NULL),
(170, 63, 'cuota1', '2019-01-03', 3000, NULL),
(171, 15, 'cuota2', '2019-02-18', 3000, NULL),
(172, 55, 'cuota3', '2019-07-19', 3000, NULL),
(173, 28, 'cuota4', '2018-11-02', 3000, NULL),
(174, 76, 'cuota5', '2018-11-29', 3000, NULL),
(175, 44, 'cuota6', '2019-05-14', 3000, NULL),
(176, 86, 'matricula', '2019-04-20', 3000, NULL),
(177, 17, 'cuota1', '2019-02-09', 3000, NULL),
(178, 58, 'cuota2', '2019-08-20', 3000, NULL),
(179, 50, 'cuota3', '2018-10-07', 3000, NULL),
(180, 42, 'cuota4', '2019-08-11', 3000, NULL),
(181, 29, 'cuota5', '2019-02-02', 3000, NULL),
(182, 84, 'cuota6', '2018-12-13', 3000, NULL),
(183, 47, 'matricula', '2019-05-31', 3000, NULL),
(184, 33, 'cuota1', '2019-07-17', 3000, NULL),
(185, 57, 'cuota2', '2019-01-30', 3000, NULL),
(186, 92, 'cuota3', '2019-03-22', 3000, NULL),
(187, 12, 'cuota4', '2019-04-30', 3000, NULL),
(188, 29, 'cuota5', '2019-05-10', 3000, NULL),
(189, 72, 'cuota6', '2018-12-13', 3000, NULL),
(190, 48, 'matricula', '2018-11-10', 3000, NULL),
(191, 19, 'cuota1', '2018-11-16', 3000, NULL),
(192, 84, 'cuota2', '2019-09-09', 3000, NULL),
(193, 98, 'cuota3', '2019-05-09', 3000, NULL),
(194, 63, 'cuota4', '2018-09-27', 3000, NULL),
(195, 49, 'cuota5', '2019-02-06', 3000, NULL),
(196, 60, 'cuota6', '2019-06-13', 3000, NULL),
(197, 94, 'matricula', '2019-03-28', 3000, NULL),
(198, 83, 'cuota1', '2019-07-22', 3000, NULL),
(199, 40, 'cuota2', '2019-04-21', 3000, NULL),
(200, 93, 'cuota3', '2018-12-18', 3000, NULL),
(201, 4, 'cuota4', '2019-01-02', 3000, NULL),
(202, 22, 'cuota5', '2018-12-12', 3000, NULL),
(203, 73, 'cuota6', '2019-01-15', 3000, NULL),
(204, 1, 'matricula', '2019-03-13', 3000, NULL),
(205, 20, 'cuota1', '2018-10-21', 3000, NULL),
(206, 87, 'cuota2', '2018-10-05', 3000, NULL),
(207, 9, 'cuota3', '2019-01-03', 3000, NULL),
(208, 58, 'cuota4', '2018-10-30', 3000, NULL),
(209, 21, 'cuota5', '2019-08-08', 3000, NULL),
(210, 56, 'cuota6', '2019-06-07', 3000, NULL),
(211, 33, 'matricula', '2018-10-15', 3000, NULL),
(212, 50, 'cuota1', '2018-10-05', 3000, NULL),
(213, 68, 'cuota2', '2019-05-16', 3000, NULL),
(214, 21, 'cuota3', '2018-11-15', 3000, NULL),
(215, 14, 'cuota4', '2019-06-16', 3000, NULL),
(216, 84, 'cuota5', '2019-06-09', 3000, NULL),
(217, 75, 'cuota6', '2019-06-29', 3000, NULL),
(218, 57, 'matricula', '2019-06-08', 3000, NULL),
(219, 92, 'cuota1', '2018-11-18', 3000, NULL),
(220, 72, 'cuota2', '2019-04-25', 3000, NULL),
(221, 77, 'cuota3', '2019-03-20', 3000, NULL),
(222, 87, 'cuota4', '2019-01-19', 3000, NULL),
(223, 69, 'cuota5', '2018-09-17', 3000, NULL),
(224, 2, 'cuota6', '2019-01-13', 3000, NULL),
(225, 22, 'matricula', '2019-02-24', 3000, NULL),
(226, 30, 'cuota1', '2019-02-07', 3000, NULL),
(227, 98, 'cuota2', '2019-08-09', 3000, NULL),
(228, 92, 'cuota3', '2019-03-10', 3000, NULL),
(229, 47, 'cuota4', '2019-08-16', 3000, NULL),
(230, 83, 'cuota5', '2019-09-07', 3000, NULL),
(231, 35, 'cuota6', '2019-07-31', 3000, NULL),
(232, 17, 'matricula', '2018-10-30', 3000, NULL),
(233, 1, 'cuota1', '2019-04-08', 3000, NULL),
(234, 93, 'cuota2', '2018-10-31', 3000, NULL),
(235, 45, 'cuota3', '2019-04-16', 3000, NULL),
(236, 51, 'cuota4', '2018-11-13', 3000, NULL),
(237, 65, 'cuota5', '2018-10-14', 3000, NULL),
(238, 85, 'cuota6', '2019-08-16', 3000, NULL),
(239, 1, 'matricula', '2019-07-31', 3000, NULL),
(240, 62, 'cuota1', '2019-02-17', 3000, NULL),
(241, 83, 'cuota2', '2019-01-20', 3000, NULL),
(242, 98, 'cuota3', '2018-10-07', 3000, NULL),
(243, 83, 'cuota4', '2019-01-09', 3000, NULL),
(244, 29, 'cuota5', '2019-05-11', 3000, NULL),
(245, 16, 'cuota6', '2019-09-11', 3000, NULL),
(246, 38, 'matricula', '2019-01-14', 3000, NULL),
(247, 65, 'cuota1', '2018-12-08', 3000, NULL),
(248, 73, 'cuota2', '2019-01-31', 3000, NULL),
(249, 95, 'cuota3', '2018-10-26', 3000, NULL),
(250, 90, 'cuota4', '2019-07-11', 3000, NULL),
(251, 28, 'cuota5', '2019-01-15', 3000, NULL),
(252, 55, 'cuota6', '2019-08-11', 3000, NULL),
(253, 48, 'matricula', '2019-01-29', 3000, NULL),
(254, 40, 'cuota1', '2018-12-19', 3000, NULL),
(255, 61, 'cuota2', '2018-10-12', 3000, NULL),
(256, 48, 'cuota3', '2019-06-04', 3000, NULL),
(257, 62, 'cuota4', '2019-02-25', 3000, NULL),
(258, 65, 'cuota5', '2019-02-04', 3000, NULL),
(259, 45, 'cuota6', '2018-12-12', 3000, NULL),
(260, 2, 'matricula', '2019-05-26', 3000, NULL),
(261, 43, 'cuota1', '2018-09-19', 3000, NULL),
(262, 93, 'cuota2', '2019-04-04', 3000, NULL),
(263, 30, 'cuota3', '2019-08-26', 3000, NULL),
(264, 46, 'cuota4', '2018-11-11', 3000, NULL),
(265, 35, 'cuota5', '2018-11-11', 3000, NULL),
(266, 98, 'cuota6', '2019-03-23', 3000, NULL),
(267, 61, 'matricula', '2019-02-20', 3000, NULL),
(268, 60, 'cuota1', '2019-06-13', 3000, NULL),
(269, 54, 'cuota2', '2019-04-17', 3000, NULL),
(270, 78, 'cuota3', '2018-12-16', 3000, NULL),
(271, 11, 'cuota4', '2018-11-17', 3000, NULL),
(272, 56, 'cuota5', '2019-06-13', 3000, NULL),
(273, 55, 'cuota6', '2019-05-09', 3000, NULL),
(274, 78, 'matricula', '2019-02-23', 3000, NULL),
(275, 34, 'cuota1', '2018-11-30', 3000, NULL),
(276, 24, 'cuota2', '2019-05-27', 3000, NULL),
(277, 4, 'cuota3', '2018-12-28', 3000, NULL),
(278, 11, 'cuota4', '2019-03-15', 3000, NULL),
(279, 29, 'cuota5', '2019-06-02', 3000, NULL),
(280, 42, 'cuota6', '2018-10-31', 3000, NULL),
(281, 24, 'matricula', '2019-07-24', 3000, NULL),
(282, 41, 'cuota1', '2019-03-22', 3000, NULL),
(283, 18, 'cuota2', '2019-05-15', 3000, NULL),
(284, 78, 'cuota3', '2019-03-28', 3000, NULL),
(285, 94, 'cuota4', '2018-11-06', 3000, NULL),
(286, 97, 'cuota5', '2019-09-11', 3000, NULL),
(287, 70, 'cuota6', '2018-12-10', 3000, NULL),
(288, 11, 'matricula', '2018-10-03', 3000, NULL),
(289, 24, 'cuota1', '2019-03-02', 3000, NULL),
(290, 29, 'cuota2', '2019-03-15', 3000, NULL),
(291, 27, 'cuota3', '2019-06-24', 3000, NULL),
(292, 28, 'cuota4', '2019-06-07', 3000, NULL),
(293, 81, 'cuota5', '2018-12-19', 3000, NULL),
(294, 42, 'cuota6', '2018-09-28', 3000, NULL),
(295, 23, 'matricula', '2019-08-30', 3000, NULL),
(296, 27, 'cuota1', '2019-03-20', 3000, NULL),
(297, 38, 'cuota2', '2019-04-14', 3000, NULL),
(298, 62, 'cuota3', '2019-02-27', 3000, NULL),
(299, 47, 'cuota4', '2019-03-16', 3000, NULL),
(300, 26, 'cuota5', '2018-11-24', 3000, NULL),
(301, 79, 'cuota6', '2019-02-08', 3000, NULL),
(302, 74, 'matricula', '2019-08-31', 3000, NULL),
(303, 56, 'cuota1', '2019-06-14', 3000, NULL),
(304, 85, 'cuota2', '2019-01-29', 3000, NULL),
(305, 13, 'cuota3', '2018-10-07', 3000, NULL),
(306, 58, 'cuota4', '2018-10-31', 3000, NULL),
(307, 94, 'cuota5', '2019-09-05', 3000, NULL),
(308, 94, 'cuota6', '2019-04-07', 3000, NULL),
(309, 59, 'matricula', '2019-08-18', 3000, NULL),
(310, 64, 'cuota1', '2018-10-17', 3000, NULL),
(311, 87, 'cuota2', '2019-09-15', 3000, NULL),
(312, 27, 'cuota3', '2018-10-16', 3000, NULL),
(313, 81, 'cuota4', '2019-09-10', 3000, NULL),
(314, 22, 'cuota5', '2019-04-08', 3000, NULL),
(315, 27, 'cuota6', '2019-09-06', 3000, NULL),
(316, 97, 'matricula', '2019-02-05', 3000, NULL),
(317, 20, 'cuota1', '2019-07-14', 3000, NULL),
(318, 77, 'cuota2', '2018-12-15', 3000, NULL),
(319, 77, 'cuota3', '2019-08-28', 3000, NULL),
(320, 69, 'cuota4', '2019-03-13', 3000, NULL),
(321, 9, 'cuota5', '2018-09-21', 3000, NULL),
(322, 25, 'cuota6', '2018-10-03', 3000, NULL),
(323, 84, 'matricula', '2018-11-18', 3000, NULL),
(324, 57, 'cuota1', '2019-07-04', 3000, NULL),
(325, 35, 'cuota2', '2019-09-11', 3000, NULL),
(326, 44, 'cuota3', '2019-08-22', 3000, NULL),
(327, 56, 'cuota4', '2019-05-10', 3000, NULL),
(328, 17, 'cuota5', '2019-05-28', 3000, NULL),
(329, 83, 'cuota6', '2018-12-07', 3000, NULL),
(330, 1, 'matricula', '2019-01-04', 3000, NULL),
(331, 36, 'cuota1', '2019-06-24', 3000, NULL),
(332, 20, 'cuota2', '2019-04-24', 3000, NULL),
(333, 32, 'cuota3', '2019-07-23', 3000, NULL),
(334, 70, 'cuota4', '2018-12-26', 3000, NULL),
(335, 25, 'cuota5', '2019-03-30', 3000, NULL),
(336, 52, 'cuota6', '2019-01-02', 3000, NULL),
(337, 49, 'matricula', '2019-05-21', 3000, NULL),
(338, 37, 'cuota1', '2018-09-28', 3000, NULL),
(339, 82, 'cuota2', '2018-12-14', 3000, NULL),
(340, 39, 'cuota3', '2019-06-02', 3000, NULL),
(341, 81, 'cuota4', '2019-01-08', 3000, NULL),
(342, 47, 'cuota5', '2018-12-05', 3000, NULL),
(343, 12, 'cuota6', '2019-03-13', 3000, NULL),
(344, 58, 'matricula', '2018-12-05', 3000, NULL),
(345, 17, 'cuota1', '2018-11-17', 3000, NULL),
(346, 51, 'cuota2', '2019-05-23', 3000, NULL),
(347, 58, 'cuota3', '2018-10-08', 3000, NULL),
(348, 17, 'cuota4', '2019-06-11', 3000, NULL),
(349, 97, 'cuota5', '2018-11-01', 3000, NULL),
(350, 87, 'cuota6', '2019-03-06', 3000, NULL),
(351, 93, 'matricula', '2018-10-06', 3000, NULL),
(352, 11, 'cuota1', '2019-07-11', 3000, NULL),
(353, 23, 'cuota2', '2019-09-11', 3000, NULL),
(354, 94, 'cuota3', '2018-11-09', 3000, NULL),
(355, 71, 'cuota4', '2019-02-03', 3000, NULL),
(356, 5, 'cuota5', '2019-08-21', 3000, NULL),
(357, 21, 'cuota6', '2019-06-26', 3000, NULL),
(358, 56, 'matricula', '2019-04-13', 3000, NULL),
(359, 86, 'cuota1', '2019-04-18', 3000, NULL),
(360, 61, 'cuota2', '2019-02-03', 3000, NULL),
(361, 96, 'cuota3', '2018-10-28', 3000, NULL),
(362, 6, 'cuota4', '2019-06-13', 3000, NULL),
(363, 70, 'cuota5', '2018-12-19', 3000, NULL),
(364, 52, 'cuota6', '2019-08-03', 3000, NULL),
(365, 88, 'matricula', '2019-03-15', 3000, NULL),
(366, 97, 'cuota1', '2018-10-15', 3000, NULL),
(367, 26, 'cuota2', '2019-01-27', 3000, NULL),
(368, 82, 'cuota3', '2018-09-24', 3000, NULL),
(369, 73, 'cuota4', '2018-09-30', 3000, NULL),
(370, 76, 'cuota5', '2018-12-02', 3000, NULL),
(371, 7, 'cuota6', '2019-01-06', 3000, NULL),
(372, 18, 'matricula', '2019-09-16', 3000, NULL),
(373, 35, 'cuota1', '2019-07-25', 3000, NULL),
(374, 50, 'cuota2', '2018-10-18', 3000, NULL),
(375, 35, 'cuota3', '2019-09-16', 3000, NULL),
(376, 18, 'cuota4', '2019-02-21', 3000, NULL),
(377, 6, 'cuota5', '2019-01-23', 3000, NULL),
(378, 15, 'cuota6', '2018-11-25', 3000, NULL),
(379, 33, 'matricula', '2019-02-14', 3000, NULL),
(380, 35, 'cuota1', '2019-07-09', 3000, NULL),
(381, 18, 'cuota2', '2019-01-14', 3000, NULL),
(382, 99, 'cuota3', '2019-04-16', 3000, NULL),
(383, 6, 'cuota4', '2018-11-26', 3000, NULL),
(384, 37, 'cuota5', '2019-08-22', 3000, NULL),
(385, 80, 'cuota6', '2019-03-05', 3000, NULL),
(386, 69, 'matricula', '2019-03-12', 3000, NULL),
(387, 94, 'cuota1', '2019-02-27', 3000, NULL),
(388, 47, 'cuota2', '2018-09-24', 3000, NULL),
(389, 30, 'cuota3', '2019-07-26', 3000, NULL),
(390, 66, 'cuota4', '2018-12-27', 3000, NULL),
(391, 16, 'cuota5', '2018-09-20', 3000, NULL),
(392, 39, 'cuota6', '2019-09-03', 3000, NULL),
(393, 90, 'matricula', '2019-05-12', 3000, NULL),
(394, 73, 'cuota1', '2019-01-20', 3000, NULL),
(395, 43, 'cuota2', '2018-09-29', 3000, NULL),
(396, 93, 'cuota3', '2019-07-08', 3000, NULL),
(397, 77, 'cuota4', '2019-05-28', 3000, NULL),
(398, 99, 'cuota5', '2018-10-01', 3000, NULL),
(399, 19, 'cuota6', '2018-09-22', 3000, NULL),
(400, 21, 'matricula', '2019-01-02', 3000, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periodo`
--

DROP TABLE IF EXISTS `periodo`;
CREATE TABLE `periodo` (
  `periodo_id` int(9) UNSIGNED NOT NULL,
  `periodo_type` varchar(100) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `permission_id` int(9) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `module` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `action` varchar(50) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`permission_id`, `title`, `module`, `action`) VALUES
(1, 'Users Module insert', 'users', 'insert'),
(2, 'Users Module delete', 'users', 'delete'),
(3, 'Users Module show', 'users', 'show'),
(4, 'Users Module list', 'users', 'list'),
(5, 'Users Module update', 'users', 'update'),
(6, 'Roles Module show', 'roles', 'show'),
(7, 'Roles Module list', 'roles', 'list'),
(8, 'Roles Module insert', 'roles', 'insert'),
(9, 'Roles Module update', 'roles', 'update'),
(10, 'Roles Module delete', 'roles', 'delete'),
(11, 'Permissions show', 'permissions', 'show'),
(12, 'Permissions list', 'permissions', 'list'),
(13, 'Permissions insert', 'permissions', 'insert'),
(14, 'Permissions update', 'permissions', 'update'),
(15, 'Permissions delete', 'permissions', 'delete'),
(16, 'User-Roles add user roles', 'user-roles', 'user_add_role'),
(17, 'User-Roles remove user roles', 'user-roles', 'user_remove_roles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permission_role`
--

DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role` (
  `permission_id` int(9) UNSIGNED NOT NULL,
  `role_id` int(9) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(3, 3),
(4, 3),
(1, 4),
(2, 4),
(5, 4),
(6, 9),
(7, 9),
(8, 9),
(9, 9),
(10, 9),
(11, 10),
(12, 10),
(13, 10),
(14, 10),
(15, 10),
(17, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permission_user`
--

DROP TABLE IF EXISTS `permission_user`;
CREATE TABLE `permission_user` (
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `permission_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `permission_user`
--

INSERT INTO `permission_user` (`usuario_id`, `permission_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 5),
(1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `role_id` int(9) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `parent` int(9) UNSIGNED DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`role_id`, `name`, `parent`, `is_active`) VALUES
(1, 'SUPER_ADMIN', NULL, 1),
(2, 'SYSTEM_ADMIN', 1, 1),
(3, 'USERS_READER', 8, 1),
(4, 'USERS_WRITER', 8, 1),
(5, 'SELF_USER', 8, 1),
(6, 'SELF_ROLES', 8, 1),
(7, 'SELF_PERMISSIONS', 10, 1),
(8, 'USERS_ADMIN', 2, 1),
(9, 'ROLES_ADMIN', 2, 1),
(10, 'PERMISSIONS_ADMIN', 2, 1),
(11, 'USER_PERMISSIONS_ADMIN', 8, 1),
(12, 'SENSORS_ADMIN', 14, 1),
(13, 'CONSUMES_ADMIN', 14, 1),
(14, 'BUSINESS_ADMIN', 2, 1),
(15, 'CLIENTS_ADMIN', 14, 1),
(16, 'USER_ROLES_ADMIN', 8, 1),
(17, 'LOCATIONS_ADMIN', 14, 1),
(18, 'SECTORS_ADMIN', 14, 1),
(19, 'SENSOR_TYPES_ADMIN', 14, 1),
(20, 'SENSORS_ADMIN', 14, 1),
(21, 'ALARM_RULES_ADMIN', 14, 1),
(36, 'LOCATIONS_ADMIN', 14, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

DROP TABLE IF EXISTS `turnos`;
CREATE TABLE `turnos` (
  `turno_id` int(9) UNSIGNED NOT NULL,
  `m` int(11) NOT NULL,
  `t` int(11) NOT NULL,
  `n` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `dni` int(9) NOT NULL,
  `clave` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `usuario` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `fechadecumpleanios` date NOT NULL,
  `email` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `perfil` varchar(15) COLLATE latin1_spanish_ci DEFAULT NULL,
  `turno` varchar(15) COLLATE latin1_spanish_ci DEFAULT NULL,
  `tel` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `celular` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `direccion1` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `direccion2` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `provincia` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `ciudad` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `country` varchar(191) COLLATE latin1_spanish_ci DEFAULT NULL,
  `codigopostal` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT 1,
  `profile_image` varchar(191) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `role_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`usuario_id`, `role_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `dni` int(9) NOT NULL,
  `clave` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `usuario` varchar(200) COLLATE latin1_spanish_ci NOT NULL,
  `fechadecumpleanios` date NOT NULL,
  `email` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `perfil` varchar(15) COLLATE latin1_spanish_ci DEFAULT NULL,
  `turno` varchar(15) COLLATE latin1_spanish_ci DEFAULT NULL,
  `tel` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `celular` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `direccion1` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `direccion2` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `provincia` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `ciudad` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `codigopostal` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `is_active` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `profile_image` varchar(191) COLLATE latin1_spanish_ci DEFAULT NULL,
  `country` varchar(150) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `apellido`, `nombre`, `dni`, `clave`, `usuario`, `fechadecumpleanios`, `email`, `perfil`, `turno`, `tel`, `celular`, `direccion1`, `direccion2`, `provincia`, `ciudad`, `codigopostal`, `is_active`, `profile_image`, `country`) VALUES
(1, 'santobuono', 'ivan', 36485205, '$2a$10$d0zxAgzwMy1e5I2jq.8NweaNh.6gDMG1FDzNwzjn5ndSTX.JNJdzG', 'mecalux', '1992-02-19', 'ivan@ivan.com', 'master', NULL, '42503412', '1130881719', 'calle falsa 123 dto 1', 'calle falsa 123 dto 2', 'BS AS', 'quilmes', '1878', 1, NULL, 'argentina'),
(2, 'benitez', 'leonel', 36485205, '$2a$10$cq6f2gVA054TKNP0Rz8TF.BIMpeMIY1YpsS6UZNsvyVCP0gJqcb/q', 'mecalux2', '1992-02-19', 'leonle@leonel.com', 'empleado', NULL, '42503412', '1130881719', 'calle falsa 123 dto 1', 'calle falsa 123 dto 2', 'BS AS', 'quilmes', '1878', 1, NULL, 'argentina'),
(4, 'santos', 'leo', 124124124, '42501719', 'santos', '2019-09-16', 'mecaluxivansantobuono@gmail.com', 'master', 'TM', '124124124', '12312412124', 'asd 1231', 'asdaf 12412', 'buenos aires', 'quilmes', '1878', 1, 'default.jpg', 'Argentina');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`alumno_id`),
  ADD KEY `alumnos_carreras_FK` (`id_carrera`);

--
-- Indices de la tabla `alumnos_x_carreras`
--
ALTER TABLE `alumnos_x_carreras`
  ADD PRIMARY KEY (`alumno_id`,`carrera_id`),
  ADD KEY `alumnos_x_carreras_to_carreras_FK` (`carrera_id`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`asistencia_id`),
  ADD KEY `asistencia_FK` (`cursada_id`),
  ADD KEY `asistencia_FK_1` (`carga_horaria_id`);

--
-- Indices de la tabla `caja`
--
ALTER TABLE `caja`
  ADD PRIMARY KEY (`id_caja`,`usuario_id`),
  ADD KEY `caja_FK` (`usuario_id`);

--
-- Indices de la tabla `carga_horaria`
--
ALTER TABLE `carga_horaria`
  ADD PRIMARY KEY (`carga_horaria_id`),
  ADD KEY `carga_horaria_FK` (`clase_type_id`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`carrera_id`),
  ADD KEY `carreras_modalidades_FK` (`mod_id`),
  ADD KEY `carreras_turnos_FK` (`turno_id`);

--
-- Indices de la tabla `clase_type`
--
ALTER TABLE `clase_type`
  ADD PRIMARY KEY (`clase_type_id`);

--
-- Indices de la tabla `concepto_type`
--
ALTER TABLE `concepto_type`
  ADD PRIMARY KEY (`concepto_type_id`);

--
-- Indices de la tabla `cuotas`
--
ALTER TABLE `cuotas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuotas_alumno_FK` (`alumno_id`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`depto_id`);

--
-- Indices de la tabla `dependencies`
--
ALTER TABLE `dependencies`
  ADD PRIMARY KEY (`materia_id`,`dependency`);

--
-- Indices de la tabla `documentacion`
--
ALTER TABLE `documentacion`
  ADD PRIMARY KEY (`documentacion_id`,`alumno_id`),
  ADD KEY `documentacion_FK` (`doc_type_id`),
  ADD KEY `documentacion_to_alumnos_FK` (`alumno_id`);

--
-- Indices de la tabla `doc_type`
--
ALTER TABLE `doc_type`
  ADD PRIMARY KEY (`doc_type_id`);

--
-- Indices de la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  ADD PRIMARY KEY (`evaluacion_id`,`cursada_id`),
  ADD KEY `evaluaciones_FK` (`cursada_id`),
  ADD KEY `evaluaciones_to_eval_type_FK` (`eval_type_id`);

--
-- Indices de la tabla `eval_type`
--
ALTER TABLE `eval_type`
  ADD PRIMARY KEY (`eval_type_id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`materia_id`);

--
-- Indices de la tabla `materias_x_alumno_x_carrera`
--
ALTER TABLE `materias_x_alumno_x_carrera`
  ADD PRIMARY KEY (`alumno_id`,`materia_id`,`carrera_id`,`periodo_id`),
  ADD UNIQUE KEY `materias_x_alumno_x_carrera_UN` (`cursada_id`),
  ADD KEY `materias_x_alumno_x_carrera_to_mat_to_carrera_FK` (`carrera_id`,`materia_id`),
  ADD KEY `materias_x_alumno_x_carrera_to_periodo_FK` (`periodo_id`);

--
-- Indices de la tabla `materias_x_carreras`
--
ALTER TABLE `materias_x_carreras`
  ADD PRIMARY KEY (`carrera_id`,`materia_id`),
  ADD KEY `materias_x_carreras_to_materia_FK` (`materia_id`),
  ADD KEY `materias_x_carreras_FK` (`depto_id`);

--
-- Indices de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  ADD PRIMARY KEY (`mod_id`);

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`id_operacion`,`usuario_id`,`id_caja`),
  ADD KEY `entradas_to_caja_FK` (`id_caja`,`usuario_id`),
  ADD KEY `movimientos_to_type_mov_FK` (`movimiento_type_id`);

--
-- Indices de la tabla `movimientos_types`
--
ALTER TABLE `movimientos_types`
  ADD PRIMARY KEY (`movimiento_type_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagos_alumno_FK` (`alumno_id`);

--
-- Indices de la tabla `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`periodo_id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`permission_id`);

--
-- Indices de la tabla `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`),
  ADD UNIQUE KEY `permission_role_permission_id_role_id_key` (`permission_id`,`role_id`),
  ADD KEY `permission_role_role_id_fkey` (`role_id`);

--
-- Indices de la tabla `permission_user`
--
ALTER TABLE `permission_user`
  ADD PRIMARY KEY (`usuario_id`,`permission_id`),
  ADD KEY `permission_user_permission_id_fkey` (`permission_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`),
  ADD KEY `roles_parent_fkey` (`parent`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`turno_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usuario_id`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`usuario_id`,`role_id`),
  ADD KEY `user_roles_role_id_fkey` (`role_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `alumno_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `carga_horaria`
--
ALTER TABLE `carga_horaria`
  MODIFY `carga_horaria_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `carrera_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clase_type`
--
ALTER TABLE `clase_type`
  MODIFY `clase_type_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `concepto_type`
--
ALTER TABLE `concepto_type`
  MODIFY `concepto_type_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuotas`
--
ALTER TABLE `cuotas`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=694;

--
-- AUTO_INCREMENT de la tabla `doc_type`
--
ALTER TABLE `doc_type`
  MODIFY `doc_type_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `materia_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  MODIFY `mod_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `movimientos_types`
--
ALTER TABLE `movimientos_types`
  MODIFY `movimiento_type_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=401;

--
-- AUTO_INCREMENT de la tabla `periodo`
--
ALTER TABLE `periodo`
  MODIFY `periodo_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `permission_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `turno_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `usuario_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos_x_carreras`
--
ALTER TABLE `alumnos_x_carreras`
  ADD CONSTRAINT `alumnos_x_carreras_to_alumnos_FK` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`alumno_id`),
  ADD CONSTRAINT `alumnos_x_carreras_to_carreras_FK` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`carrera_id`);

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `asistencia_FK` FOREIGN KEY (`cursada_id`) REFERENCES `materias_x_alumno_x_carrera` (`cursada_id`),
  ADD CONSTRAINT `asistencia_FK_1` FOREIGN KEY (`carga_horaria_id`) REFERENCES `carga_horaria` (`carga_horaria_id`);

--
-- Filtros para la tabla `caja`
--
ALTER TABLE `caja`
  ADD CONSTRAINT `caja_FK` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`);

--
-- Filtros para la tabla `carga_horaria`
--
ALTER TABLE `carga_horaria`
  ADD CONSTRAINT `carga_horaria_FK` FOREIGN KEY (`clase_type_id`) REFERENCES `clase_type` (`clase_type_id`);

--
-- Filtros para la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD CONSTRAINT `carreras_modalidades_FK` FOREIGN KEY (`mod_id`) REFERENCES `modalidades` (`mod_id`),
  ADD CONSTRAINT `carreras_turnos_FK` FOREIGN KEY (`turno_id`) REFERENCES `turnos` (`turno_id`);

--
-- Filtros para la tabla `cuotas`
--
ALTER TABLE `cuotas`
  ADD CONSTRAINT `cuotas_alumno_FK` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`alumno_id`);

--
-- Filtros para la tabla `dependencies`
--
ALTER TABLE `dependencies`
  ADD CONSTRAINT `dependencies_FK` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`materia_id`);

--
-- Filtros para la tabla `documentacion`
--
ALTER TABLE `documentacion`
  ADD CONSTRAINT `documentacion_FK` FOREIGN KEY (`doc_type_id`) REFERENCES `doc_type` (`doc_type_id`),
  ADD CONSTRAINT `documentacion_to_alumnos_FK` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`alumno_id`);

--
-- Filtros para la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  ADD CONSTRAINT `evaluaciones_FK` FOREIGN KEY (`cursada_id`) REFERENCES `materias_x_alumno_x_carrera` (`cursada_id`),
  ADD CONSTRAINT `evaluaciones_to_eval_type_FK` FOREIGN KEY (`eval_type_id`) REFERENCES `eval_type` (`eval_type_id`);

--
-- Filtros para la tabla `materias_x_alumno_x_carrera`
--
ALTER TABLE `materias_x_alumno_x_carrera`
  ADD CONSTRAINT `materias_x_alumno_x_carrera_to_alumnoFK` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`alumno_id`),
  ADD CONSTRAINT `materias_x_alumno_x_carrera_to_mat_to_carrera_FK` FOREIGN KEY (`carrera_id`,`materia_id`) REFERENCES `materias_x_carreras` (`carrera_id`, `materia_id`),
  ADD CONSTRAINT `materias_x_alumno_x_carrera_to_periodo_FK` FOREIGN KEY (`periodo_id`) REFERENCES `periodo` (`periodo_id`);

--
-- Filtros para la tabla `materias_x_carreras`
--
ALTER TABLE `materias_x_carreras`
  ADD CONSTRAINT `materias_x_carreras_FK` FOREIGN KEY (`depto_id`) REFERENCES `departamentos` (`depto_id`),
  ADD CONSTRAINT `materias_x_carreras_to_carrera_FK` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`carrera_id`),
  ADD CONSTRAINT `materias_x_carreras_to_materia_FK` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`materia_id`);

--
-- Filtros para la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD CONSTRAINT `entradas_to_caja_FK` FOREIGN KEY (`id_caja`,`usuario_id`) REFERENCES `caja` (`id_caja`, `usuario_id`),
  ADD CONSTRAINT `movimientos_to_type_mov_FK` FOREIGN KEY (`movimiento_type_id`) REFERENCES `movimientos_types` (`movimiento_type_id`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_alumno_FK` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`alumno_id`);

--
-- Filtros para la tabla `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`permission_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `permission_user`
--
ALTER TABLE `permission_user`
  ADD CONSTRAINT `permission_user_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  ADD CONSTRAINT `permission_user_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`permission_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `roles_parent_fkey` FOREIGN KEY (`parent`) REFERENCES `roles` (`role_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_user_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
