CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
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
