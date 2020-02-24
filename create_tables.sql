-- CREATE DATABASE vanchack_db;
CREATE SEQUENCE favorite_id START 1 INCREMENT 1;

CREATE TABLE favorite (
    id integer PRIMARY KEY DEFAULT NEXTVAL('favorite_id'),
    name text UNIQUE NOT NULL,
    color text NOT NULL,
    animal text NOT NULL CHECK (animal IN ('cats', 'dogs'))
);

