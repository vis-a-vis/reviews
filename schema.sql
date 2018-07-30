DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
USE reviews;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  roomId int(100) NOT NULL,
  userName varchar(50) NOT NULL,
  img varchar(250),
  date DATETIME,
  review varchar(1000),
  accuracy int NOT NULL,
  communication int NOT NULL,
  cleanliness int NOT NULL,
  location int NOT NULL,
  checkin int NOT NULL,
  value int NOT NULL,
  average int NOT NULL,
  PRIMARY KEY(id)
);

LOAD DATA LOCAL INFILE './reviews.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
