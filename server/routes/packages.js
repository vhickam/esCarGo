const express = require('express');
const Package = require('../models/Package')

const router = express.Router();

// Route to get my packages
router.get('/', (req, res, next) => {
  Package.find({shipper: req.user._id})
    .then(packages => {
      res.json(packages);
    })
    .catch(err => next(err))
});

// Route to add a package
router.post('/', (req, res, next) => {
  let {name, size, pickup, dropoff, duedate} = req.body
  const shipper =  req.user._id;
  Package.create({name, size, pickup, dropoff, duedate, shipper})
    .then(package => {
      res.json({
        success: true,
        package
      });
    })
    .catch(err => next(err))
});

module.exports = router;