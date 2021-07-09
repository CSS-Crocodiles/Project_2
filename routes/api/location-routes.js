const router = require('express').Router();

module.exports = (db) => {
  const LocationController = require('../controllers/locationController')(db);
  // App
  // LOCATIONS:
  // GET User's Location's
  router.get('/locations', LocationController.getLocations);
  // POST all of User's Location's
  router.post('/locations', LocationController.createLocationse);
  // GET specific Location based on location id
  router.get('/locations/:id', LocationController.getSingleLocation);
  // POST specific Location based on location id with all
  // of their places to visit ('parks', 'trails', 'musuems', restaurant').
  router.post('/locations/:id', LocationController.getSingleLocation);
  // (maybe add a DELETE here to remove a location?)
  router.delete('/locations/:id', LocationController.deleteLocations);
  // (maybe add a PUT here to update location parameters like date?)
};
