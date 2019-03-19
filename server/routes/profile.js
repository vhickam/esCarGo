const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

const User = require('../models/User')


router.get('/profile', isLoggedIn, (req, res, next) => {
  res.json({
    user: req.user
  });
});

module.exports = router;