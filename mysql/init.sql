CREATE DATABASE pfa;

USE pfa;

CREATE TABLE pfa.peoples (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL) ENGINE=InnoDB;

INSERT INTO pfa.peoples (name) VALUES ("Daniel Drummond");
