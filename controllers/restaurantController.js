// eslint-disable-next-line no-unused-vars
const db = require('../models');

module.exports = function (db) {
  return {
    // Get all examples
  //  getExamples: function (req, res) {
    // db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
    // res.json(dbExamples);
    // });
    // },
    getSingleRestaurant: function (req, res) {
      console.log('THE DATA COMING IN ', req.params.id);
      db.Restaurant.findOne({
        where: { id: req.params.id }
        // include: [{model: db.Restaurants}]
      },
      console.log('RESTAURANT? ', db.Restaurant)
      ).then(function (dbSingleRestaurant) {
        res.json(dbSingleRestaurant);
      });
    },
    // CREATE new Restaurant
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
    },
    // Delete an example by id
    deleteRestaurant: function (req, res) {
      db.Restaurant.destroy({ where: { id: req.params.id } }).then(function (dbRestaurant) {
        res.json(dbRestaurant);
      });
    }
  };
};
