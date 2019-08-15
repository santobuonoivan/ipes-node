-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 15-08-2019 a las 23:25:52
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

DROP TABLE IF EXISTS `materias`;
CREATE TABLE `materias` (
  `materia_id` int(9) UNSIGNED NOT NULL,
  `id_carrera` int(9) UNSIGNED NOT NULL,
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
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias_x_carreras`
--

DROP TABLE IF EXISTS `materias_x_carreras`;
CREATE TABLE `materias_x_carreras` (
  `carrera_id` int(9) UNSIGNED NOT NULL,
  `materia_id` int(9) UNSIGNED NOT NULL
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permission_role`
--

DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role` (
  `permission_id` int(9) UNSIGNED NOT NULL,
  `role_id` int(9) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permission_user`
--

DROP TABLE IF EXISTS `permission_user`;
CREATE TABLE `permission_user` (
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `permission_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

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
-- Estructura de tabla para la tabla `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
  `usuario_id` int(9) UNSIGNED NOT NULL,
  `role_id` int(9) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`alumno_id`),
  ADD KEY `alumnos_documentacion_FK` (`id_documentacion`),
  ADD KEY `alumnos_carreras_FK` (`id_carrera`);

--
-- Indices de la tabla `alumnos_x_carreras`
--
ALTER TABLE `alumnos_x_carreras`
  ADD PRIMARY KEY (`alumno_id`,`carrera_id`),
  ADD KEY `alumnos_x_carreras_to_carreras_FK` (`carrera_id`);

--
-- Indices de la tabla `caja`
--
ALTER TABLE `caja`
  ADD PRIMARY KEY (`id_caja`,`usuario_id`),
  ADD KEY `caja_FK` (`usuario_id`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`carrera_id`),
  ADD KEY `carreras_modalidades_FK` (`mod_id`),
  ADD KEY `carreras_turnos_FK` (`turno_id`);

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
  ADD PRIMARY KEY (`id_entrada`,`usuario_id`,`id_caja`),
  ADD KEY `entradas_to_caja_FK` (`id_caja`,`usuario_id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`materia_id`),
  ADD KEY `materias_carrera_FK` (`id_carrera`);

--
-- Indices de la tabla `materias_x_alumno_x_carrera`
--
ALTER TABLE `materias_x_alumno_x_carrera`
  ADD PRIMARY KEY (`alumno_id`,`materia_id`,`carrera_id`,`periodo_id`),
  ADD KEY `materias_x_alumno_x_carrera_to_mat_to_carrera_FK` (`carrera_id`,`materia_id`),
  ADD KEY `materias_x_alumno_x_carrera_to_periodo_FK` (`periodo_id`);

--
-- Indices de la tabla `materias_x_carreras`
--
ALTER TABLE `materias_x_carreras`
  ADD PRIMARY KEY (`carrera_id`,`materia_id`),
  ADD KEY `materias_x_carreras_to_materia_FK` (`materia_id`);

--
-- Indices de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  ADD PRIMARY KEY (`mod_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagos_alumno_FK` (`id_alumno`);

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
-- Indices de la tabla `salidas`
--
ALTER TABLE `salidas`
  ADD PRIMARY KEY (`id_salida`,`usuario_id`,`id_caja`),
  ADD KEY `salidas_FK` (`id_caja`,`usuario_id`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`turno_id`);

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
  MODIFY `alumno_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `carrera_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `periodo`
--
ALTER TABLE `periodo`
  MODIFY `periodo_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `permission_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `turno_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_documentacion_FK` FOREIGN KEY (`id_documentacion`) REFERENCES `documentacion` (`id`);

--
-- Filtros para la tabla `alumnos_x_carreras`
--
ALTER TABLE `alumnos_x_carreras`
  ADD CONSTRAINT `alumnos_x_carreras_to_alumnos_FK` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`alumno_id`),
  ADD CONSTRAINT `alumnos_x_carreras_to_carreras_FK` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`carrera_id`);

--
-- Filtros para la tabla `caja`
--
ALTER TABLE `caja`
  ADD CONSTRAINT `caja_FK` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`);

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
  ADD CONSTRAINT `cuotas_alumno_FK` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`alumno_id`);

--
-- Filtros para la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD CONSTRAINT `entradas_to_caja_FK` FOREIGN KEY (`id_caja`,`usuario_id`) REFERENCES `caja` (`id_caja`, `usuario_id`);

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
  ADD CONSTRAINT `materias_x_carreras_to_carrera_FK` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`carrera_id`),
  ADD CONSTRAINT `materias_x_carreras_to_materia_FK` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`materia_id`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_alumno_FK` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`alumno_id`);

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
-- Filtros para la tabla `salidas`
--
ALTER TABLE `salidas`
  ADD CONSTRAINT `salidas_FK` FOREIGN KEY (`id_caja`,`usuario_id`) REFERENCES `caja` (`id_caja`, `usuario_id`);

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
