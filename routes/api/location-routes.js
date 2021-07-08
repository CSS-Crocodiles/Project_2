const router = require('express').Router();
// const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
//   const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // App
  // LOCATIONS:
  // GET User's Location's
  router.get('/locations', AppController.getLocations);
  // POST all of User's Location's
  router.post('/locations', AppController.createLocationse);
  // GET specific Location based on location id
  router.get('/locations/:id', AppController.getSingleLocation);
  // POST specific Location based on location id with all
  // of their places to visit ('parks', 'trails', 'musuems', restaurant').
  router.post('/locations/:id', AppController.getSingleLocation);
  // (maybe add a DELETE here to remove a location?)
  //  router.delete('/locations/:id', AppController.deleteLocations);
  // (maybe add a PUT here to update location parameters like date?)

  return router;
};
