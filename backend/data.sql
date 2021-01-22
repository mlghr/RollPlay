DROP DATABASE IF EXISTS "dnd";

CREATE DATABASE "dnd";

\c "dnd";

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    password text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    age integer,
    game_interests text
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
    -- Dummy profiles will be substitued in occasionally if there are very few users
);

CREATE TABLE evaluations (
    id SERIAL PRIMARY KEY,
    user_evaluating integer,
    -- you
    user_evaluated integer,
    -- other user you are looking at
    evaluation text DEFAULT 'undecided'
    -- accepted or rejected
);

--Dummy data

INSERT INTO users (username, password, first_name, last_name, email, age, game_interests) VALUES
    ('ducksarefun', 'ducks', 'Fred',  'fredson', 'thing@stuff.com', 20, 'Chess, checkers.'),
    ('ducksarecool', 'ducks', 'Bob',  'bobson', 'thing@stuff.com', 30, 'Any board games!'),
    ('ducksaregreat', 'ducks', 'Cindy',  'cindyson', 'thing@stuff.com', 40, 'Mostly video games.'),
    ('ducksarefine', 'ducks', 'LaShaniqua',  'lashaniquason', 'thing@stuff.com', 50, 'Anything you want to play.'),
    ('ducksarenotpreferred', 'ducks', 'El toro',  'eltorosen', 'thing@stuff.com', 60, 'I dont like games, not sure why I signed up.'),
    ('ducksaredumb', 'ducks', 'Chad', 'chadson', 'thing@stuff.com', 12, 'SPORTS GAMES');

INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES
    (1, 3, 'accepted'),
    (1, 2, 'undecided'),
    (2, 3, 'accepted'),
    (2, 1, 'rejected'),
    (3, 1, 'accepted'),
    (3, 2, 'rejected');

INSERT INTO characters (name, age, c_class, race, background, details) VALUES
    ('Jerk', 30, 'Warrior', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Guy', 20, 'Cleric', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Lady', 40, 'Rogue', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Momo', 50, 'Barbarian', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Yorn', 80, 'Wizard', 'Human', 'Outlander', 'Really interesting backstory'),
    ('Belm', 60, 'Warrior', 'Human', 'Outlander', 'Really interesting backstory');
