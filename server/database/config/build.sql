BEGIN;

DROP TABLE IF EXISTS users cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE corsce(
    id SERIAL PRIMARY KEY NOT NULL,
    coesce_name VARCHAR(100) NOT NULL,
    corsce_link VARCHAR(200) NOT NULL,
    Auther_name VARCHAR(100) NOT NULL
);

INSERT INTO users (name) VALUES
  ('Ali'),
  ('Mo'),
  ('John');

INSERT INTO corsce(coesce_name,corsce_link,Auther_name) VALUES 
    ('java script','http://jon done','jon done'),
    ('node crach corsce','http://jon done','jon done'),
    ('jest crach corsce','http://jon done','jon done');


COMMIT;
