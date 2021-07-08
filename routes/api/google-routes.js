const router = require('express').Router();
// const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

// ARE GOING TO NEED TO REQUIRE YOUR JS FILE HERE (sorry you prob already know that!)

module.exports = (passport, db) => {
//   const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication DON'T THINK YOU NEED THE AUTHENTICATION CODE BUT LEFT IT JUST IN CASE

  //   router.post('/register', AuthController.register);
  //   router.post('/login', AuthController.login);
  //   router.get('/logout', AuthController.logout);
  //   router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  //   router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  //   router.post('/user/confirm', AuthController.confirmAuth);

  // App

  router.get('/getGoogleData', AppController.getExamples);
  return router;
};
