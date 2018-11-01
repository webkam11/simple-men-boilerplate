/* eslint-disable no-console */

// Load env config
require('dotenv').config();

// Require npm modules
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Load routes
const users = require('./routes/api/user');

// Initialize app
const app = express();
const { PORT = 5000, DB_HOST, DB_PORT, DB_NAME } = process.env;
const db = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Initialize middleware
app.use(helmet());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(express.static('./dist/'));

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected Successfully to MongoDB'))
  .catch(err => console.log(err));

// Use routes

app.use('/api/users', users);

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

// Listen on the designated port
app.listen(PORT, err => {
  if (err) console.log(err);
  console.info(`==> Listening on port ${PORT}`);
});
