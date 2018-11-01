const express = require('express');

const router = express.Router();

// User model
const User = require('../../models/User');

/**
 * @route   GET api/users
 * @desc    Get all Users
 * @access  Public
 */
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   GET api/users/:id
 * @desc    Get a User
 * @access  Public
 */
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   POST api/users
 * @desc    Create a User
 * @access  Public
 */
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
  });

  newUser
    .save()
    .then(user =>
      res.json({
        success: true,
        message: `${user.name} has been successful created`,
      })
    )
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   PUT api/users/:id
 * @desc    Update a User
 * @access  Public
 */
router.put('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      // Update name here
      user.set({ name: req.body.name });
      user.save().then(() =>
        res.json({
          success: true,
          message: `${user.name} has been successful updated`,
        })
      );
    })
    .catch(err =>
      res.status(404).json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   DELETE api/users/:id
 * @desc    Delete a User
 * @access  Public
 */
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      user.remove().then(() =>
        res.json({
          success: true,
          message: `${user.name} has been successful deleted`,
        })
      )
    )
    .catch(err =>
      res.status(404).json({
        success: false,
        message: `${err}`,
      })
    );
});

module.exports = router;
