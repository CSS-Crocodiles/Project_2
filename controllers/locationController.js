const Museums = require('../models/museums');
const Trails = require('../models/trails');
const Restaurants = require('../models/restaurant');
const Parks = require('../models/parks');
// const Location = require('../models/location');

module.exports = function (db) {
  return {
    // Get all locations
    getLocation: function (req, res) {
      db.Location.findAll({ where: { UserId: req.session.passport.user.id }
      }).then(function (dbLocations) {
        res.json(dbLocations);
      });
    },
    // Get single Location
    getSingleLocation: function (req, res) {
      db.Location.findByPk({ where: { id: req.params.id,
        include: [Museums, Trails, Parks, Restaurants] }
      }).then(function (dbSingleLoc) {
        res.json(dbSingleLoc);
      });
    },
    // Create a new example Which page??
    // first ask where do you want to go? - that could create this location
    createLocation: function (req, res) {
      db.Location.create(req.body).then(function (dbNewLoc) {
        res.json(dbNewLoc);
      });
    },
    // Delete an example by id
    deleteLocation: function (req, res) {
      db.Location.destroy({ where: { id: req.params.id } }).then(function (dbDeleteLoc) {
        res.json(dbDeleteLoc);
      });
    }
  };
};
