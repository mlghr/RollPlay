-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email, is_admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        'me@me.com',
        FALSE),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'Admin!',
        'me@me.com',
        TRUE);

INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (1, 2, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (2, 3, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (3, 4, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (4, 5, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (5, 6, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (6, 7, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (7, 8, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (8, 9, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (9, 10, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (10, 11, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (11, 12, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (12, 13, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (13, 14, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (14, 15, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (15, 16, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (16, 17, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (17, 18, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (18, 19, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (19, 20, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (20, 21, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (21, 22, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (22, 23, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (23, 24, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (24, 25, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (25, 26, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (26, 27, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (27, 28, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (28, 29, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (29, 30, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (30, 31, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (31, 32, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (32, 33, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (33, 34, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (34, 35, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (35, 36, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (36, 37, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (37, 38, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (38, 39, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (39, 40, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (40, 41, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (41, 42, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (42, 43, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (43, 44, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (44, 45, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (45, 46, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (46, 47, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (47, 48, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (48, 49, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (49, 50, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (50, 51, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (51, 52, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (52, 53, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (53, 54, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (54, 55, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (55, 56, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (56, 57, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (57, 58, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (58, 59, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (59, 60, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (60, 61, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (61, 62, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (62, 63, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (63, 64, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (64, 65, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (65, 66, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (66, 67, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (67, 68, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (68, 69, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (69, 70, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (70, 71, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (71, 72, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (72, 73, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (73, 74, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (74, 75, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (75, 76, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (76, 77, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (77, 78, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (78, 79, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (79, 80, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (80, 81, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (81, 82, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (82, 83, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (83, 84, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (84, 85, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (85, 86, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (86, 87, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (87, 88, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (88, 89, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (89, 90, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (90, 91, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (91, 92, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (92, 93, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (93, 94, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (94, 95, rejected);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (95, 96, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (96, 97, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (97, 98, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (98, 99, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (99, 100, accepted);
INSERT INTO evaluations (user_evaluating, user_evaluated, evaluation) VALUES (100, 101, rejected);
