DROP DATABASE IF EXISTS "dnd";

CREATE DATABASE "dnd";

\c "dnd";

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    password text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL
);

CREATE TABLE characters
(
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    age integer NOT NULL,
    c_class text NOT NULL,
    race text NOT NULL,
    background text NOT NULL,
    details text,
    is_dummy bool DEFAULT FALSE
);

INSERT INTO characters (name, age, c_class, race, background, details) VALUES
    ('Jerk', 30, 'Warrior', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Guy', 20, 'Cleric', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Lady', 40, 'Rogue', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Momo', 50, 'Barbarian', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Yorn', 80, 'Wizard', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Belm', 60, 'Warrior', 'Human', 'Outlander', 'Really interesting backstory');
