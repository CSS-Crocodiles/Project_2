const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);
  const GoogleController = require('../controllers/googleController')(db);


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

  // LOCATIONS:
  // GET User's Location's
  // POST all of User's Location's
  // GET specific Location based on location id
  // POST specific Location based on location id with all
  // of their places to visit ('parks', 'trails', 'musuems', restaurant').
  // (maybe add a DELETE here to remove a location?)
  // (maybe add a PUT here to update location parameters like date?)

  // RESTAURANTS
  // GET restaurants based on location id
  // POST restaurant based on location id
  // GET specific restaurant based on restaurant id
  // POST specific restaurant based on restaurant id
  // (maybe add a DELETE here to remove a restaurant?)

  // TRAILS
  // GET trails based on location id
  // POST trails based on location id
  // GET specific trails based on trails id
  // POST specific trails based on trails id
  // (maybe add a DELETE here to remove a trails?)

  // PARKS
  // GET parks based on location id
  // POST parks based on location id
  // GET specific parks based on parks id
  // POST specific parks based on parks id
  // (maybe add a DELETE here to remove a parks?)

  // MUSEUMS
  // GET museums based on location id
  // POST museums based on location id
  // GET specific museum based on museums id
  // POST specific museum based on museum id
  // (maybe add a DELETE here to remove a museum?)

  // 2 routes, from the 'search' page to first GET trip ideas based on location with the parameters
  // of: dates and parks, trails, museums and restaurants.
  // And then POST all of this info

  // These example GET, POST and DELETE are connected to 'controllers/appController'
  // to keep the data gathered secured. So most of the CRUD route functions are actually
  // written there
  router.get('/examples', AppController.getExamples);
  router.post('/examples', AppController.createExample);
  router.delete('/examples/:id', AppController.deleteExample);
  router.get('/getGoogleData', GoogleController.getTrip);


  return router;
};
