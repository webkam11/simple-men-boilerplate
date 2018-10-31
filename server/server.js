const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Get env config
require('dotenv').config();
const config = require('../config/config')();

// Set routes
const users = require('./routes/api/user');

const app = express();
const { PORT = 3000 } = process.env;
const db = config.mongo.uri;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./dist/'));

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(`${err}`));

// Use routes
app.use('/api/users', users);

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

app.listen(PORT, err => {
  if (err) console.log(err);
  console.info(`==> Listening on port ${PORT}`);
});
