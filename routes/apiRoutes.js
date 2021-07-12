const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);
  const GoogleController = require('../controllers/googleController')(db);
  const LocationController = require('../controllers/locationController')(db);
  const MuseumController = require('../controllers/museumsController')(db);
  // const ParksController = require('../controllers/parksController')(db);
  // const RestaurantsController = require('../controllers/restaurantsController')(db);
  // const TrailsController = require('../controllers/trailsController')(db);

  // Authentication
  // NOTES FROM KATELIN:
  // looks like all of the GETs, POSTs, PUTs, DELETES are written in
  // 'controllers/authController' to make sure the user info is secure
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  // NOTES FROM KATELIN:
  // HERE IS WHERE WE NEED TO ADD OUR API ROUTES:
  // Don't think we need to do many more CRUD for USER bc its under AUTHENTICATION
  // from each user's homepage do they have a link to each trip they've created based

  router.get('/examples', AppController.getExamples);
  router.post('/examples', AppController.createExample);
  router.delete('/examples/:id', AppController.deleteExample);
  // GET Route for the google api data
  router.get('/getGoogleData', GoogleController.getTrip);
  // // LOCATIONS:
  // // GET User's Location's
  // // ** Should probably be '/user' bc most likely user page**
  router.get('/location', LocationController.getLocation);
  // // POST create a new location - need a page for this**
  router.post('/location', LocationController.createLocation);
  // // GET specific Location based on location id with all
  // // of their places to visit ('parks', 'trails', 'musuems', restaurant').
  router.get('/location/:id', LocationController.getSingleLocation);
  // // (maybe add a DELETE here to remove a location?)
  router.delete('/location/:id', LocationController.deleteLocations);
  // // (maybe add a PUT here to update location parameters like date?)

  // // MUSEUMS:
  // // GET specific Museum based on Museums id
  router.get('/museums/:id', MuseumController.getSingleMuseum);
  // // (maybe add a DELETE here to remove a Museum?)
  router.delete('/museums/:id', MuseumController.deleteMuseum);

  // // PARKS:
  // // GET specific Park based on Park id
  // router.get('/parks/:id', ParksController.getSingleParks);
  // // (maybe add a DELETE here to remove a Park?)
  // router.delete('/parks/:id', ParksController.deleteParks);

  // // RESTAURANTS:
  // // GET specific Restaurant based on Restaurants id
  // router.get('/restaurants/:id', RestaurantsController.getSingleRestaurant);
  // // (maybe add a DELETE here to remove a Restaurant?)
  // router.delete('/restaurants/:id', RestaurantsController.deleteRestaurant);

  // // TRAILS:
  // // GET specific Trail based on Trails id
  // router.get('/trails/:id', TrailsController.getSingleTrail);
  // // (maybe add a DELETE here to remove a Trail?)
  // router.delete('/trails/:id', TrailsController.deleteTrail);

  return router;
};
