DROP DATABASE IF EXISTS reviews_list

CREATE DATABASE reviews_list

USE reviews_list

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(40)
)

CREATE TABLE review (
  id INT NOT NULL AUTO_INCREMENT,
  createdAt DATA,
  message TEXT,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY (host_id) REFERENCES host(id)
)

CREATE TABLE host (
  id INT NOT NULL AUTO_INCREMENT,
  reply TEXT,
  PRIMARY KEY (id)
)

