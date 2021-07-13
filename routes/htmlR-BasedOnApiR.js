// Hamelet and William - 
// Friday night I'd started creating the htmlRoutes 
// to connect to the API routes 
// ** Lines 110-146 on 'routes/htmlRoutes.js' for /location
//  which I'm pretty sure is your 'savedtrips' handlebars
// and location/:id which is individual trips with their
// museums and such BUT its not correct and I'll fix it in
// this file **
// and left some notes for how you so you could plug in
// the handlerbars you were creating and grab from the
// correct API route.
// I put these on a seperate page because I know Hamlet
// was working on stuff and I didnt want to mess things up!

router.get('/location', function (req, res) {
    if (req.isAuthenticated()) {
      db.Location.findAll({ where: { UserId: req.session.passport.user.id },
        raw: true }).then(function (dbLocations) {
        res.render('savedtrips', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          msg: 'Welcome Back USER!',
          locations: dbLocations
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // AGAIN will prob need to change route depending on front end
  // ALSO NEED HANDLEBAR IT CONNECTS TO
  router.get('/location/:id', function (req, res) {
    if (req.isAuthenticated()) {
      db.Location.findOne({ where: { id: req.params.id},
        include: [ { model: db.Parks }, { model: db.Museums }, //{ model: db.Trails }, { model: db.Restaurant }] 
      ],
      raw: true }).then(function (data) {
        res.render('location-detail', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          data: data.dataValues
        });
      });
    } else {
      res.redirect('/');
    }
  });

  router.get('/museums/:id', function (req, res) {
    if (req.isAuthenticated()) {
      db.Museums.findOne({ where: { id: req.params.id}, raw: true 
    }).then(function (data) {
        res.render('museum-detail', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          data: data.dataValues
        });
      });
    } else {
      res.redirect('/');
    }
  });

  //THIS ROUTE IS FOR THE createController.js
  router.get('/location/:id/museums', function (req, res) {
    if (req.isAuthenticated()) {
      db.Museums.findOne({ where: { id: req.params.id}, raw: true 
    }).then(function (data) {
        res.render('museum-detail', {
            userInfo: req.session.passport.user,
            isloggedin: req.isAuthenticated(),
            data: data.dataValues
          });
      });
    } else {
      res.redirect('/');
    }
  });

  router.get('/museums/:id', function (req, res) {
    if (req.isAuthenticated()) {
        // console.log('THE DATA COMING IN ', req.params.id);
        db.Location.findOne({ where: { id: req.params.id }},
        console.log('MUSEUMS? ', db.Museums)
        ),
        db.Museums.create({...req.body, LocationId:req.params.id, raw: true 
    }).then(function (data) {
        res.render('museum-detail', {
            userInfo: req.session.passport.user,
            isloggedin: req.isAuthenticated(),
            data: data.dataValues
          });
      });
    } else {
      res.redirect('/');
    }
  });