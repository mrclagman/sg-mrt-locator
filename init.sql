CREATE TABLE IF NOT EXISTS stations (
  id int NOT NULL AUTO_INCREMENT,
  station_code varchar(8) NOT NULL,
  name varchar(255) NOT NULL,
  train_line varchar(8) NOT NULL,
  PRIMARY KEY (id, station_code)
);


CREATE TABLE IF NOT EXISTS train_lines (
  id int NOT NULL AUTO_INCREMENT,
  line_code varchar(8) NOT NULL,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id, line_code)
);

CREATE TABLE IF NOT EXISTS interchanges (
  id int NOT NULL AUTO_INCREMENT,
  sourceLine varchar(8) NOT NULL,
  destinationLine varchar(8) NOT NULL,
  station varchar(255) NOT NULL,
  PRIMARY KEY (id, station)
);