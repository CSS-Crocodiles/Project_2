const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);
  const GoogleController = require('../controllers/googleController')(db);
  const LocationController = require('../controllers/locationController')(db);
  const MuseumController = require('../controllers/museumsController')(db);
  const ParksController = require('../controllers/parksController')(db);
  const RestaurantController = require('../controllers/restaurantController')(db);
  const TrailsController = require('../controllers/trailsController')(db);
  const CreateController = require('../controllers/createController')(db);
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
  router.get('/getGoogleData', GoogleController.getTrip); // <-- TO DO: delete this line once Places connections are working
  // router.post('/getGoogleData', GoogleController.getTripNew);
  router.post('/getGoogleData', GoogleController.getTripNewDetails);
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
  // POST create a new musuem
  // router.post('/museums', MuseumController.createMuseum);
  // // (maybe add a DELETE here to remove a Museum?)
  router.delete('/museums/:id', MuseumController.deleteMuseum);

  // // PARKS:
  // // GET specific Park based on Park id
  router.get('/parks/:id', ParksController.getSinglePark);
  // // (maybe add a DELETE here to remove a Park?)
  router.delete('/parks/:id', ParksController.deletePark);

  // // RESTAURANTS:
  // // GET specific Restaurant based on Restaurants id
  router.get('/restaurants/:id', RestaurantController.getSingleRestaurant);
  // // (maybe add a DELETE here to remove a Restaurant?)
  router.delete('/restaurants/:id', RestaurantController.deleteRestaurant);

  // // TRAILS:
  // // GET specific Trail based on Trails id
  router.get('/trails/:id', TrailsController.getSingleTrail);
  // // (maybe add a DELETE here to remove a Trail?)
  router.delete('/trails/:id', TrailsController.deleteTrail);

  // CREATE:
  // POST to create a museum under a specific location
  router.post('/location/:id/museums', CreateController.createMuseum);
  // POST to create a trail under a specific location
  router.post('/location/:id/trails', CreateController.createTrail);
  // POST to create a park under a specific location
  router.post('/location/:id/parks', CreateController.createPark);
  // POST to create a restaurant under a specific location
  router.post('/location/:id/restaurants', CreateController.createRestaurant);
  return router;
};
