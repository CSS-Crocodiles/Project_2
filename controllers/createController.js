/* eslint-disable no-unused-expressions */
module.exports = function (db) {
  return {

    createMuseum: function (req, res) {
      console.log('THE DATA COMING IN ', req.params.id);
      db.Location.findOne({
        where: { id: req.params.id }
        //   include:
        //   [ { model: db.Parks }, { model: db.Museums },{ model: db.Trails }, { model: db.Restaurant }]
      },
      console.log('MUSEUMS? ', db.Museums)
      );
      db.Museums.create({ ...req.body, LocationId: req.params.id })
        .then(function (newMuseum) {
          res.json(newMuseum);
        });
    },
    createTrail: function (req, res) {
      db.Location.findOne({
        where: { id: req.params.id }
      },
      console.log('TRAILS?', db.Trails)
      );
      db.Trails.create({ ...req.body, LocationId: req.params.id })
        .then(function (newTrail) {
          res.json(newTrail);
        });
    },
    createPark: function (req, res) {
      db.Location.findOne({
        where: { id: req.params.id }
      },
      console.log('PARKS?', db.Parks)
      );
      db.Parks.create({ ...req.body, LocationId: req.params.id })
        .then(function (newPark) {
          res.json(newPark);
        });
    },
    createRestaurant: function (req, res) {
      db.Location.findOne({
        where: { id: req.params.id }
      },
      console.log('RESTAURANTS?', db.Restaurant)
      );
      db.Restaurant.create({ ...req.body, LocationId: req.params.id })
        .then(function (newRestaurant) {
          res.json(newRestaurant);
        });
    }
  };
};
