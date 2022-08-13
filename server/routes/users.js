const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/signup', async (req, res) => {
  await User.findOne({ email: req.body.email }).then((user) => {
    if(user) {
      return res.status(400).json({
        success: 'false',
        user,
        message: 'email is already in use'
      });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
      });

      newUser.save();
      return res.status(200).json({
        success: 'true',
        data: newUser
      })
    }
  })
})

router.get('/:user_id/watched', async(req, res) => {
  await User.findOne({userId: req.params.user_id})
  .then(user => {
    console.log(user);
    res.status(200).json(user.watched_movies)
  })
  .catch(err => res.status(404).json(err));
})

module.exports = router;