const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('dashboard');
});

router.get('/dashboard', async (req, res) => {
  res.render('dashboard');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/register', async (req, res) => {
  res.render('register');
});



// router.get('/', async (req, res) => {
//     res.render('main')
//   });

module.exports = router;