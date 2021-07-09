
const router = require('express').Router();

module.exports = (db) => {
  const MuseumController = require('../controllers/museumController')(db);
  // App
  // LOCATIONS:
  // GET User's Location's Museums
  router.get('/museums', MuseumController.getMuseums);
  // POST all of User's Location's
  router.post('/museums', MuseumController.createMuseums);
  // GET specific Location based on location id
  router.get('/museums/:id', MuseumController.getSingleMuseum);
  // POST specific Location based on location id with all
  // of their places to visit ('parks', 'trails', 'musuems', restaurant').
  router.post('/museums/:id', MuseumController.getSingleMuseum);
  // (maybe add a DELETE here to remove a location?)
  router.delete('/museums/:id', MuseumController.deleteMuseum);
  // (maybe add a PUT here to update location parameters like date?)
};
