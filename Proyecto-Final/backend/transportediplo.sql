-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-08-2022 a las 00:04:19
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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `coleccion`
--

INSERT INTO `coleccion` (`id`, `titulo`, `informacion`, `img_id`) VALUES
(1, 'Ford T (1908)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis        accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio        pariatur quaerat. Perferendis, cum?', 'gz7y573e3droygexirua'),
(2, 'Rolls Royce Phantom (1925)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis\r\n        accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio\r\n        pariatur quaerat. Perferendis, cum?', 'wewfwqfyjixjn21f7ga6'),
(3, 'Mercedes Benz 300 SL (1957)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis\r\n        accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio\r\n        pariatur quaerat. Perferendis, cum?', 'mxjjdfeccrqzenflp0xs'),
(15, 'Alfa Romeo 8C (1938)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio pariatur quaerat. Perferendis, cum?', 'dxbrot8xbiakr6htqg3x'),
(9, 'Cadillac Eldorado (1959)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio pariatur quaerat. Perferendis, cum?', 'lrcfr1ypby0lvjtq1sid'),
(16, 'Aston Martin DB5 (1964)', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam, minima delectus dolore quis accusantium id tempora mollitia? Illum error dignissimos quibusdam cumque architecto, consequuntur distinctio pariatur quaerat. Perferendis, cum?', 'xeeleg6drkae5b2wdxfo');

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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Está prueba fue editada, ahora con img', 'Está prueba fue editada', 'prueba1', 'txotohqgvpakvp2knkwl'),
(2, 'prueba28', 'prueba2', 'prueba2', NULL),
(3, 'prueba3', 'prueba3', 'prueba3', 'ty6mebduntxf1vtymiux'),
(9, 'otra prueba', 'otra prueba ', 'Esto es una prueba más', '');

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
