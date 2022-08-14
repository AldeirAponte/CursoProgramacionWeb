-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 14-08-2022 a las 02:44:37
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportediplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coleccion`
--

DROP TABLE IF EXISTS `coleccion`;
CREATE TABLE IF NOT EXISTS `coleccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `informacion` text NOT NULL,
  `imagen` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `coleccion`
--

INSERT INTO `coleccion` (`id`, `titulo`, `informacion`, `imagen`) VALUES
(1, 'Ford T (1908)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis        accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio        pariatur quaerat. Perferendis, cum?', ''),
(2, 'Rolls Royce Phantom (1925)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis\r\n        accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio\r\n        pariatur quaerat. Perferendis, cum?', ''),
(3, 'Mercedes Benz 300 SL (1957)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis\r\n        accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio\r\n        pariatur quaerat. Perferendis, cum?', ''),
(10, 'Prueba para Eliminar', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio pariatur quaerat. Perferendis, cum?', ''),
(9, 'Prueba para Editar', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio pariatur quaerat. Perferendis, cum?', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Está prueba fue editada', 'Está prueba fue editada', 'prueba1'),
(2, 'prueba28', 'prueba2', 'prueba2'),
(3, 'prueba3', 'prueba3', 'prueba3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'aldeir', 'e10adc3949ba59abbe56e057f20f883e'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
