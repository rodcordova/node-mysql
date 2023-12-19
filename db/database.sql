CREATE DATABASE IF NOT EXISTS companydb;
use companydb;

CREATE TABLE employe(
id int(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary INT(5) DEFAULT NULL,
PRIMARY KEY (id)
);
DESCRIBE employe;

SELECT 1+1 AS result;

INSERT INTO employe VALUES
(1,'joe',1000),
(2,'henry',2000),
(3,'sam',3000);

SELECT * FROM employe;