# About the app

Rollplay is a tinder-like React-based application that allows its users to meet others that are interested in playing the games they like. The back-end of this app is Node.js/Express and the database used is PostgreSQL. Make sure you have Node.js and PostgreSQL installed before continuing.


## To run project

First, `git clone` the project into an empty folder.

`cd rollplay`

This next line is enough to install all dependencies between folders. Make sure that all of the dependencies in the root folder, back-end, and front-end install successfully.

- From the *root* folder:
`npm run rollplay`

This should also return you to your root project folder. To run the app from this point, create your database from the terminal.

`createdb rollplay`

After the database is created, use the rollplay.sql file to create the schema and to seed. From the *backend* folder,

Use this command for Windows - `psql -f rollplay.sql` or use the equivalent for MacOS --> `psql > rollplay.sql` 

Enter 'yes' for both prompts to create and seed the database.

Lastly, return to your *root* folder and,

`npm run dev`

The browser should open with the project at [localhost 3000](http://localhost:3000).