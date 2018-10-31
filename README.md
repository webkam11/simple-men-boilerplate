# Simple MEN boilerplate

A simple MEN (MongoDB, Express and Node) backend boilerplate.
Add your own client-side.

## Prerequisite

You must have MongoDB installed locally or a MongoDB account (There are free/paid accounts online).

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
DB_URI=mongodb://localhost:27017/<NAME_OF_MONGO_DATABASE>
```

Local MongoDB usage.

Run your local MongoDB instance (If unsure, please see link for local MongoDB installation for Mac).

## Linting

Uses ESLint

.eslintrc.json, configured to use [airbnb](https://github.com/airbnb/javascript) Style Guide

## Code Formatting

Uses Prettier

## License

Mit License: [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

## Credits

Based on the mern shopping list by [Brad Traversy](https://github.com/bradtraversy/mern_shopping_list)
