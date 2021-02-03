CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) UNIQUE,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age TEXT DEFAULT 'Not provided',
  about TEXT NOT NULL,
  picture TEXT,
  email TEXT NOT NULL,
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE evaluations (
    id SERIAL PRIMARY KEY,
    user_evaluating TEXT,
    -- your username
    user_evaluated TEXT,
    -- other user you are looking at
    evaluation TEXT DEFAULT 'undecided'
    -- accepted or rejected
);
