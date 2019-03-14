const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();




router.get('/random', (req,res,next) => {
  console.log('RANDOM')
})


router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

module.exports = router;
