\echo 'Delete and recreate rollplay db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE rollplay;
CREATE DATABASE rollplay;
\connect rollplay

\i rollplay-schema.sql
\i rollplay-seed.sql

\echo 'Delete and recreate rollplay_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE rollplay_test;
CREATE DATABASE rollplay_test;
\connect rollplay_test

\i rollplay-schema.sql
