CREATE TABLE users (
    username text PRIMARY KEY,
    password text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    phone text NOT NULL,
    join_at timestamp WITHOUT time zone NOT NULL,
    last_login_at timestamp with time zone
);

CREATE TABLE characters (
    id SERIAL PRIMARY Key,
    name text NOT NULL,
    age integer NOT NULL,
    c_class text NOT NULL,
    race text NOT NULL,
    background text NOT NULL,
    details text
);

CREATE TABLE dummies (
    id SERIAL PRIMARY Key,
    name text NOT NULL,
    age integer NOT NULL,
    c_class text NOT NULL,
    race text NOT NULL,
    background text NOT NULL,
    details text
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    from_username text NOT NULL REFERENCES users,
    to_username text NOT NULL REFERENCES users,
    body text NOT NULL,
    sent_at timestamp with time zone NOT NULL,
    read_at timestamp with time zone
);
