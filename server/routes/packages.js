const express = require('express');
const Package = require('../models/Package')
const Trip = require('../models/Trip')

const router = express.Router();


router.get('/test', (req, res, next) => {
  console.log('test')
});


// Route to add a package to trip
router.post('/all', (req, res, next) => {
  let { package, tripID } = req.body
  // console.log("the trip id:", tripID)
  // console.log("the package id:", packageID)

  Trip.update(
    {_id: tripID}, 
    {$push: {packages: package}}
    ).exec()
  .then(mod => {
    res.redirect('back');
  })

});


// Route to get all packages
router.get('/all', (req, res, next) => {
  //console.log('all')
  Package.find()
    .then(allpackages => {
      res.json(allpackages);
    })
    .catch(err => next(err))
});

// Route to get my packages
router.get('/', (req, res, next) => {
  console.log('shipper')
  Package.find({shipper: req.user._id}) //{shipper: req.user._id}
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