
const router = require('express').Router();

module.exports = (db) => {
  const TrailsController = require('../controllers/trailsController')(db);
  // App
  // LOCATIONS:
  // GET User's Location's Trails
  router.get('/trails', TrailsController.getTrails);
  // POST all of Locations's Trail'
  router.post('/trails', TrailsController.createTrails);
  // GET specific Trail based on location id
  router.get('/trails/:id', TrailsController.getSingleTrail);
  // POST specific Trail based on location id with all
  router.post('/trails/:id', TrailsController.getSingleTrail);
  // (maybe add a DELETE here to remove a Trail?)
  router.delete('/trails/:id', TrailsController.deleteTrail);
};
