const express = require('express');
const Package = require('../models/Package')

const router = express.Router();

// Route to get all packages
router.get('/', (req, res, next) => {
  Package.find()
    .then(packages => {
      res.json(packages);
    })
    .catch(err => next(err))
});

// Route to add a package
router.post('/', (req, res, next) => {
  let {name, size, pickup, dropoff, duedate} = req.body
  Package.create({name, size, pickup, dropoff, duedate})
    .then(package => {
      res.json({
        success: true,
        package
      });
    })
    .catch(err => next(err))
});

module.exports = router;