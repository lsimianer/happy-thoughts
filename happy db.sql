DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;
USE playlist_db;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NULL,
    artist VARCHAR(30) NULL,
    genre VARCHAR(50) NULL,
    PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES( "tubthumping", "chumbawumbathump", "pop");

INSERT INTO songs (title, artist, genre)
VALUES( "fatlip", "sum41", "punk");

INSERT INTO songs (title, artist, genre)
VALUES( "mountains", "good charlotte", "pop");

select * from playlist_db.songs where id= 2;

WHERE genre= +"genre"