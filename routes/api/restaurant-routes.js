
const router = require('express').Router();

module.exports = (db) => {
  const RestaurantsController = require('../controllers/restaurantsController')(db);
  // App
  // LOCATIONS:
  // GET User's Location's Restaurants
  router.get('/restaurants', RestaurantsController.getRestaurants);
  // POST all of User's Restaurants'
  router.post('/restaurants', RestaurantsController.createRestaurants);
  // GET specific Restaurants based on location id
  router.get('/restaurants/:id', RestaurantsController.getSingleRestaurant);
  // POST specific Restaurants based on location id with all
  router.post('/restaurants/:id', RestaurantsController.getSingleRestaurant);
  // (maybe add a DELETE here to remove a Restaurants?)
  router.delete('/restaurants/:id', RestaurantsController.deleteRestaurant);
};
