DROP DATABASE IF EXISTS reviews_list;
CREATE DATABASE reviews_list;
USE reviews_list;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  userName varchar(50) NOT NULL,
  img varchar(250),
  addedAt DATETIME,
  review varchar(1000),
  PRIMARY KEY(id)
);

-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   name varchar(50) NOT NULL,
--   img varchar(250),
--   PRIMARY KEY(id)
-- );

-- CREATE TABLE reviews (
--   id int NOT NULL AUTO_INCREMENT,
--   addedAt DATETIME,
--   review varchar(1000),
--   user_id int NOT NULL,
--   PRIMARY KEY(id),
--   FOREIGN KEY(user_id) REFERENCES users(id)
-- );
