DROP DATABASE IF EXISTS restaurants_db;
CREATE DATABASE restaurants_db;
USE restaurants_db;

CREATE TABLE restaurants
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
    price varchar, NOT NULL,
	rating varchar(10),
    review text(),
	PRIMARY KEY (id)
);

USE restaurants_db;

CREATE TABLE profiles
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);