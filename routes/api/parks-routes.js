
const router = require('express').Router();

module.exports = (db) => {
  const ParksController = require('../controllers/parksController')(db);
  // App
  // LOCATIONS:
  // GET User's Location's Parks
  router.get('/parks', ParksController.getParks);
  // POST all of User's Parks'
  router.post('/parks', ParksController.createParks);
  // GET specific Park based on location id
  router.get('/parks/:id', ParksController.getSingleParks);
  // POST specific Parks based on location id with all
  router.post('/parks/:id', ParksController.getSingleParks);
  // (maybe add a DELETE here to remove a Park?)
  router.delete('/parks/:id', ParksController.deleteParks);
};
