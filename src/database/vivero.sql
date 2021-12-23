DROP DATABASE IF EXISTS vivero_database;
CREATE DATABASE vivero_database;
USE vivero_database;

drop table if exists `users`;
create table users(
`id` int(10) unsigned not null auto_increment,
`first_name` varchar(100) not null,
`last_name` varchar(100) not null,
`email` varchar(100) not null,
`password` varchar(200) not null,
`image` varchar(100) null default 'default-user.png',
primary key (`id`));

drop table if exists `categories`;
create table categories(
`id` int(10) unsigned not null auto_increment,
`name` varchar(50) not null,
primary key (`id`));

drop table if exists `materials`;
create table materials(
`id` int(10) unsigned not null auto_increment,
`name` varchar(50) not null,
primary key (`id`));

drop table if exists `products`;
create table products(
`id` int(10) unsigned not null auto_increment,
`name` varchar(100) not null,
`description` varchar(300) not null,
`price` decimal(7,2) not null,
`quantity_S` int(10) unsigned null default 0,
`quantity_M` int(10) unsigned null default 0,
`quantity_L` int(10) unsigned null default 0,
`image_1` varchar(100) NULL DEFAULT 'default-image.svg',
`image_2` varchar(100) NULL DEFAULT 'default-image.svg',
`image_3` varchar(100) NULL DEFAULT 'default-image.svg',
`category_id` int(10) unsigned not null,
`material_id` int(10) unsigned not null,
primary key (`id`),
foreign key(`category_id`) references `categories`(`id`),
foreign key(`material_id`) references `materials`(`id`));

drop table if exists `comments`;
create table comments(
`id` int(10) unsigned not null auto_increment,
`title` varchar(100) not null,
`content` varchar(500) not null,
`created_at` DATETIME not null default now(),
`user_id` int(10) unsigned not null,
`product_id` int(10) unsigned not null,
primary key (`id`),
foreign key(`user_id`) references `users`(`id`),
foreign key(`product_id`) references `products`(`id`));