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
    .then(users => res.json(users));
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

  newUser.save().then(users => res.json(users));
});

/**
 * @route   DELETE api/users/:id
 * @desc    Delete a User
 * @access  Public
 */
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(item =>
      item.remove().then(() =>
        res.json({
          success: true,
          message: `${item.name} has been successful deleted`,
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
