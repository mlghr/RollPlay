CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) UNIQUE,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age TEXT DEFAULT 'Not provided',
  about TEXT NOT NULL,
  picture TEXT DEFAULT 'https://source.unsplash.com/random/600x700',
  email TEXT NOT NULL,
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE evaluations (
    evaluating_user_id INTEGER REFERENCES users(id),
    -- logged in user
    evaluated_user_id INTEGER REFERENCES users(id),
    -- other user you are looking at
    evaluation TEXT,
    -- accepted or rejected
    PRIMARY KEY(evaluating_user_id, evaluated_user_id)
);
