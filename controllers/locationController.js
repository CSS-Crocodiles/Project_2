/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-spacing
const {Museums} = require('../models/museums');
const Trails = require('../models/trails');
const Restaurants = require('../models/restaurant');
const Parks = require('../models/parks');

// const Location = require('../models/location');

module.exports = function (db) {
  return {
    // Get all locations WORKS
    getLocation: function (req, res) {
      db.Location.findAll({
        where: {
          user_id: req.session.passport.user.id }
      }).then(function (dbLocations) {
        res.json(dbLocations);
      });
    },
    // Get single Location WORKS (still need to include, Parks, Trails and Restaurants)
    getSingleLocation: function (req, res) {
      console.log('THE DATA COMING IN ', req.params.id);
      db.Location.findOne({
        where: { id: req.params.id },
        include: [ { model: db.Parks }, { model: db.Museums }, { model: db.Restaurant }, { model: db.Trails }
        ] },
      console.log('MUSEUMS? ', db.Museums)
      ).then(function (dbSingleLoc) {
        res.json(dbSingleLoc);
      });
    },
    // WORKS
    // first ask where do you want to go? - that could create this location
    createLocation: function (req, res) {
      console.log('THE DATA COMING IN ', req.body);
      db.Location.create({ ...req.body, user_id: req.session.passport.user.id }).then(function (dbNewLoc) {
        console.log('HERE IS THE NEW LOCATION DATA: ', dbNewLoc);
        res.json(dbNewLoc);
      });
    },

    // createLocation: function (req, res) {
    //   console.log('THE DATA COMING IN ', req.body);
    //   db.Location.create({
    //     location_name: req.body.name,
    //     starting_date: req.body.start,
    //     ending_date: req.body.end,
    //     user_id: req.session.passport.user.id }).then(function (dbNewLoc) {
    //     console.log('HERE IS THE NEW LOCATION DATA: ', dbNewLoc);
    //     res.json(dbNewLoc);
    //   });
    // },

    // Delete an example by id WORKS
    deleteLocations: function (req, res) {
      console.log('REQUEST coming in: ', req.params.id);
      db.Location.destroy({ where: { id: req.params.id } }).then(function (dbDeleteLoc) {
        res.json(dbDeleteLoc);
      });
    }
  };
};
