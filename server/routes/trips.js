const express = require('express');
const Trip = require('../models/Trip')

const router = express.Router();

// Route to get all trips
router.get('/', (req, res, next) => {
  Trip.find()
    .then(trips => {
      res.json(trips);
    })
    .catch(err => next(err))
});

// Route to add a trip
router.post('/', (req, res, next) => {
  let { date, start, end} = req.body
  Trip.create({ date, start, end })
    .then(trip => {
      res.json({
        success: true,
        trip
      });
    })
    .catch(err => next(err))
});

module.exports = router;
