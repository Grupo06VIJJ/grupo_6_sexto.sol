-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-01-2022 a las 21:32:56
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viverodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Con flor'),
(2, 'Sin flor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `content` varchar(500) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materials`
--

CREATE TABLE `materials` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `materials`
--

INSERT INTO `materials` (`id`, `name`) VALUES
(1, 'plástico'),
(2, 'porcelana'),
(3, 'cerámica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `description` varchar(300) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `quantity_S` int(10) UNSIGNED DEFAULT 0,
  `quantity_M` int(10) UNSIGNED DEFAULT 0,
  `quantity_L` int(10) UNSIGNED DEFAULT 0,
  `imagen` blob DEFAULT 'default-image.svg',
  `category_id` int(10) UNSIGNED NOT NULL,
  `material_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `quantity_S`, `quantity_M`, `quantity_L`, `imagen`, `category_id`, `material_id`) VALUES
(1, 'Cola de Tigre', '\"La sansevieria trifasciata es una planta muy utilizada en el interior y que destaca por su fácil cuidado. A menudo es llamada también cola de lucio, lengua de suegra, lengua de gato, lengua de tigre o espada de San Jorge. Cuenta con muchas subespecies, como la sansevieria laurentii.\"', '3000.00', 1, 3, 1, 0x64656661756c742d696d6167652e737667, 2, 1),
(2, 'Monstera deliciosa', 'Monstera deliciosa, llamada comúnmente cerimán o costilla de Adán, es una especie de planta trepadora de la familia Araceae, endémica de selvas tropicales, que se distribuye desde el centro y sur de México hasta el norte de Argentina.', '2000.00', 1, 5, 1, 0x64656661756c742d696d6167652e737667, 2, 0),
(3, 'Potus', '	Epipremnum aureum, comúnmente conocido como potus, pothos o potos es una especie de la familia Araceae nativa del sudeste asiático y Nueva Guinea. En ocasiones es confundida con philodendron en las floristerías.', '2501.00', 4, 8, 0, 0x64656661756c742d696d6167652e737667, 2, 0),
(4, 'Begonia', '	Son plantas terrestres (a veces epífitas) herbáceas, algunas de porte semiarbustivo o incluso pequeños árboles y otras trepadoras, perennes excepto en climas fríos, es el aérea donde la planta muere. Las flores son muy diversas tanto en forma y tamaño como en color; son unisexuales, la masculina co', '3650.00', 0, 8, 2, 0x64656661756c742d696d6167652e737667, 1, 1),
(5, '	Bromelia', 'Bromelia es un género tropical americano de plantas de la familia Bromeliaceae, aunque comúnmente se llama con el mismo nombre a plantas de otros géneros de la misma familia. Sus flores tienen un cáliz muy profundo.', '1245.00', 0, 0, 0, 0x64656661756c742d696d6167652e737667, 1, 2),
(6, 'Crisantemo amarillo', '', '2056.00', 4, 0, 0, 0x64656661756c742d696d6167652e737667, 1, 3),
(7, 'Rosas blancas', 'Por su significado de paz y tranquilidad, las flores blancas son también las más utilizadas para dar ánimos a una persona que padece una enfermedad. Nada como la frescura de las rosas blancas o de cualquier otro tipo de flor de este color para demostrar tu apoyo en los malos momentos.', '2530.00', 0, 4, 0, 0x64656661756c742d696d6167652e737667, 1, 2),
(8, 'Rosas rojas', 'Este tipo de flores se ha considerado siempre un símbolo de amor, pasión, belleza y respeto. Lo más frecuente es que sea un regalo a una pareja, por ser un color pasional, excitante y que muestra respeto y amor unidos.', '1020.00', 0, 0, 0, 0x64656661756c742d696d6167652e737667, 1, 2),
(9, 'Santa Rita', '', '1000.00', 0, 0, 5, 0x64656661756c742d696d6167652e737667, 1, 1),
(10, 'Hortencia', '', '1500.00', 0, 45, 78, 0x64656661756c742d696d6167652e737667, 1, 1),
(11, 'Rosas rojas en ramo', '', '1200.00', 0, 0, 0, 0x64656661756c742d696d6167652e737667, 1, 3),
(12, 'Claveles', '', '1360.00', 0, 15, 74, 0x64656661756c742d696d6167652e737667, 1, 2),
(13, 'Arbol de Jade', '', '2035.00', 0, 0, 0, 0x64656661756c742d696d6167652e737667, 2, 2),
(14, 'Margaritas', '', '5632.00', 0, 2, 0, 0x64656661756c742d696d6167652e737667, 1, 3),
(15, '	Aloe Vera', '', '2013.00', 0, 0, 0, 0x64656661756c742d696d6167652e737667, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_spanish2_ci DEFAULT 'default-user.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `image`) VALUES
(1, 'Felicitas', 'Gonzalez', '', '', 'default-user.png'),
(2, 'Horacio', 'Quiroga', '', '', 'default-user.png'),
(3, 'Juan', 'Pérez', '', '', 'default-user.png'),
(4, 'Valeria', 'Yashan', '', '', 'default-user.png'),
(5, 'Sarita', 'Bonita', '', '', 'default-user.png'),
(6, 'Alejandra', 'Yashan', '', '', 'default-user.png'),
(7, 'Olivia', 'Yashan', '', '', 'default-user.png'),
(8, 'Juana', 'Yashan', '', '', 'default-user.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `material_id` (`material_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
