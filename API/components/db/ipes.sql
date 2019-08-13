-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 08-08-2019 a las 21:34:58
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
  `id` int(9) UNSIGNED NOT NULL,
  `dni` int(9) UNSIGNED NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `sexo` varchar(5) COLLATE latin1_spanish_ci NOT NULL,
  `legajo` int(11) NOT NULL,
  `id_carrera` int(9) UNSIGNED DEFAULT NULL,
  `fechadeinscripcion` date NOT NULL,
  `modalidad` varchar(5) COLLATE latin1_spanish_ci NOT NULL,
  `turno` varchar(5) COLLATE latin1_spanish_ci NOT NULL,
  `anio_carrera` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `fechadenacimiento` date NOT NULL,
  `direccion` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `tel` varchar(25) COLLATE latin1_spanish_ci DEFAULT NULL,
  `celular` varchar(25) COLLATE latin1_spanish_ci DEFAULT NULL,
  `estadocivil` varchar(30) COLLATE latin1_spanish_ci DEFAULT NULL,
  `secundario` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `facebook` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `trabajo` varchar(70) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_documentacion` int(9) UNSIGNED DEFAULT NULL,
  `conocio` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `promo` varchar(250) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `alumnos`:
--   `id_carrera`
--       `carreras` -> `id`
--   `id_documentacion`
--       `documentacion` -> `id`
--

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
-- RELACIONES PARA LA TABLA `caja`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

DROP TABLE IF EXISTS `carreras`;
CREATE TABLE `carreras` (
  `id` int(9) UNSIGNED NOT NULL,
  `nombre` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `modalidades` int(9) UNSIGNED NOT NULL,
  `turnos` int(9) UNSIGNED NOT NULL,
  `cantidadanios` varchar(250) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `carreras`:
--   `modalidades`
--       `modalidades` -> `id`
--   `turnos`
--       `turnos` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuotas`
--

DROP TABLE IF EXISTS `cuotas`;
CREATE TABLE `cuotas` (
  `id` int(9) UNSIGNED NOT NULL,
  `id_alumno` int(9) UNSIGNED NOT NULL,
  `concepto` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `importe` int(11) NOT NULL,
  `pasada` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `cuotas`:
--   `id_alumno`
--       `alumnos` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentacion`
--

DROP TABLE IF EXISTS `documentacion`;
CREATE TABLE `documentacion` (
  `id` int(9) UNSIGNED NOT NULL,
  `titulo` tinyint(1) DEFAULT NULL,
  `dni` tinyint(1) DEFAULT NULL,
  `fotos` tinyint(1) DEFAULT NULL,
  `cert_salud` tinyint(1) DEFAULT NULL,
  `esmatricula` int(11) DEFAULT NULL,
  `escuota` int(11) DEFAULT NULL,
  `escertificacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `documentacion`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas`
--

DROP TABLE IF EXISTS `entradas`;
CREATE TABLE `entradas` (
  `id_entrada` int(9) UNSIGNED NOT NULL,
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `id_caja` int(9) UNSIGNED NOT NULL,
  `importe` decimal(10,0) NOT NULL,
  `fechayhora` datetime NOT NULL,
  `detalle` varchar(250) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `entradas`:
--   `id_caja`
--       `caja` -> `id_caja`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

DROP TABLE IF EXISTS `materias`;
CREATE TABLE `materias` (
  `id` int(9) UNSIGNED NOT NULL,
  `id_carrera` int(9) UNSIGNED NOT NULL,
  `nombre` varchar(70) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `materias`:
--   `id_carrera`
--       `carreras` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modalidades`
--

DROP TABLE IF EXISTS `modalidades`;
CREATE TABLE `modalidades` (
  `id` int(9) UNSIGNED NOT NULL,
  `p` int(11) NOT NULL,
  `sp` int(11) NOT NULL,
  `v` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `modalidades`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

DROP TABLE IF EXISTS `notas`;
CREATE TABLE `notas` (
  `id` int(9) UNSIGNED NOT NULL,
  `id_alumno` int(9) UNSIGNED NOT NULL,
  `id_materia` int(9) UNSIGNED NOT NULL,
  `nota` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `notas`:
--   `id_alumno`
--       `alumnos` -> `id`
--   `id_materia`
--       `materias` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

DROP TABLE IF EXISTS `pagos`;
CREATE TABLE `pagos` (
  `id` int(9) UNSIGNED NOT NULL,
  `id_alumno` int(9) UNSIGNED NOT NULL,
  `concepto` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `importe` int(11) NOT NULL,
  `pasada` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `pagos`:
--   `id_alumno`
--       `alumnos` -> `id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salidas`
--

DROP TABLE IF EXISTS `salidas`;
CREATE TABLE `salidas` (
  `id_salida` int(9) UNSIGNED NOT NULL,
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `id_caja` int(9) UNSIGNED NOT NULL,
  `importe` decimal(10,0) NOT NULL,
  `fechayhora` datetime NOT NULL,
  `detalle` varchar(250) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `salidas`:
--   `id_caja`
--       `caja` -> `id_caja`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

DROP TABLE IF EXISTS `turnos`;
CREATE TABLE `turnos` (
  `id` int(9) UNSIGNED NOT NULL,
  `m` int(11) NOT NULL,
  `t` int(11) NOT NULL,
  `n` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `turnos`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `apellido` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `dni` int(9) NOT NULL,
  `clave` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `usuario` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `fechadecumpleanios` date NOT NULL,
  `email` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `perfil` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `turno` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `tel` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `celular` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `direccion1` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `direccion2` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `provincia` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `ciudad` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `codigopostal` varchar(10) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- RELACIONES PARA LA TABLA `usuarios`:
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumnos_documentacion_FK` (`id_documentacion`),
  ADD KEY `alumnos_carreras_FK` (`id_carrera`);

--
-- Indices de la tabla `caja`
--
ALTER TABLE `caja`
  ADD PRIMARY KEY (`id_caja`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carreras_modalidades_FK` (`modalidades`),
  ADD KEY `carreras_turnos_FK` (`turnos`);

--
-- Indices de la tabla `cuotas`
--
ALTER TABLE `cuotas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuotas_alumno_FK` (`id_alumno`);

--
-- Indices de la tabla `documentacion`
--
ALTER TABLE `documentacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`id_entrada`),
  ADD KEY `entradas_FK` (`id_caja`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `materias_carrera_FK` (`id_carrera`);

--
-- Indices de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `notas`
--
ALTER TABLE `notas`
  ADD KEY `notas_alumno_FK` (`id_alumno`),
  ADD KEY `notas_materia_FK` (`id_materia`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagos_alumno_FK` (`id_alumno`);

--
-- Indices de la tabla `salidas`
--
ALTER TABLE `salidas`
  ADD PRIMARY KEY (`id_salida`),
  ADD KEY `salidas_FK` (`id_caja`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `caja`
--
ALTER TABLE `caja`
  MODIFY `id_caja` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuotas`
--
ALTER TABLE `cuotas`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `documentacion`
--
ALTER TABLE `documentacion`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `entradas`
--
ALTER TABLE `entradas`
  MODIFY `id_entrada` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `salidas`
--
ALTER TABLE `salidas`
  MODIFY `id_salida` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_carreras_FK` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id`),
  ADD CONSTRAINT `alumnos_documentacion_FK` FOREIGN KEY (`id_documentacion`) REFERENCES `documentacion` (`id`);

--
-- Filtros para la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD CONSTRAINT `carreras_modalidades_FK` FOREIGN KEY (`modalidades`) REFERENCES `modalidades` (`id`),
  ADD CONSTRAINT `carreras_turnos_FK` FOREIGN KEY (`turnos`) REFERENCES `turnos` (`id`);

--
-- Filtros para la tabla `cuotas`
--
ALTER TABLE `cuotas`
  ADD CONSTRAINT `cuotas_alumno_FK` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id`);

--
-- Filtros para la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD CONSTRAINT `entradas_FK` FOREIGN KEY (`id_caja`) REFERENCES `caja` (`id_caja`);

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_carrera_FK` FOREIGN KEY (`id_carrera`) REFERENCES `carreras` (`id`);

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_alumno_FK` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id`),
  ADD CONSTRAINT `notas_materia_FK` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_alumno_FK` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id`);

--
-- Filtros para la tabla `salidas`
--
ALTER TABLE `salidas`
  ADD CONSTRAINT `salidas_FK` FOREIGN KEY (`id_caja`) REFERENCES `caja` (`id_caja`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
