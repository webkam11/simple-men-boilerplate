# Simple MEN boilerplate

A simple MEN (MongoDB, Express and Node) backend boilerplate.
Add your own client-side.

## Prerequisite

You must have MongoDB installed locally or a MongoDB account (There are free/paid accounts online) in order to perfom CRUD operations on the database provided by MongoDB.

Local MongoDB setup [for Mac](https://medium.com/@himeshvats19/up-running-with-mongodb-in-7-simple-steps-using-brew-on-macos-sierra-785730a7e6b0)

## Installation

Git clone the Github repository and use npm to install the project dependencies.

```
$ git clone https://github.com/kamlouis/simple-men-boilerplate.git
$ cd simple-men-boilerplate
$ npm i
```

## Usage

Create a .env file in the root directory.
Inside the .env file add the following:

```
DB_PORT=27017
DB_HOST=localhost
DB_NAME=<NAME_OF_MONGO_DATABASE>
```

### Run MongoDB

If you installed on macOS via homebrew, please follow instructions below.

Open the terminal and switch to the folder below:

```
$ cd /usr/local/Cellar/mongodb/4.0.2
```

Please note the last folder will be based on your MongoDB version number at the time you installed/updated MongoDB.
At the time of writing my MongoDB version number is 4.0.2.

Then execute the following command:

```
$ mongod
```

### Run Server

```
npm start
```

### HTTP Verbs

Here is an overview of the routes we will require, what they will do, and the HTTP Verbs used to access them.

| HTTP METHOD    | GET               | POST          | PUT                         | DELETE           |
| -------------- | ----------------- | ------------- | --------------------------- | ---------------- |
| CRUD OP        | READ              | CREATE        | UPDATE                      | DELETE           |
| /api/users     | Get all the users | Create a user |                             | Delete all users |
| /api/users/:id | Get a single user |               | Update a user with new info | Delete a user    |

Install [Postman](https://www.getpostman.com/) to test our routes.

## Linting

Uses ESLint

.eslintrc.json, configured to use [airbnb](https://github.com/airbnb/javascript) Style Guide

## Code Formatting

Uses Prettier

## License

Mit License: [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

## Credits

Based on the mern shopping list by [Brad Traversy](https://github.com/bradtraversy/mern_shopping_list)
