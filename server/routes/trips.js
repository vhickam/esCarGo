const express = require('express');
const Trip = require('../models/Trip')

const router = express.Router();

// Route to get my trips
router.get('/', (req, res, next) => {
  Trip.find({driver: req.user._id})
    .then(trips => {
      res.json(trips);
    })
    .catch(err => next(err))
});

// Route to add a trip
router.post('/', (req, res, next) => {
  let { date, start, end} = req.body
  const driver =  req.user._id;
  Trip.create({ date, start, end, driver })
    .then(trip => {
      res.json({
        success: true,
        trip
      });
    })
    .catch(err => next(err))
});

//route to get trip details
router.get('/trip/:id', (req, res, next) => {
  Trip.findById(req.params.id)
    .then(thetrip => {
      res.json(thetrip);
    })
    .catch(err => next(err))
});

module.exports = router;
