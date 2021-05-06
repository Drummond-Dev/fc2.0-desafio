CREATE DATABASE desafio;

USE desafio;

CREATE TABLE desafio.peoples (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL) ENGINE=InnoDB;

INSERT INTO desafio.peoples (name) VALUES ("Daniel Drummond");