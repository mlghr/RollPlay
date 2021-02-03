-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, age, about, email, is_admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        '38',
        'This is the about',
        'me@me.com',
        FALSE),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'Admin!',
        '27',
        'This is the about',
        'me@me.com',
        TRUE);