// eslint-disable-next-line no-unused-vars
const db = require('../models');

module.exports = function (db) {
  return {
    // Get all examples
    // getExamples: function (req, res) {
    //  db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
    //    res.json(dbExamples);
    // });
    // },
    getSinglePark: function (req, res) {
      console.log('THE DATA COMING IN ', req.params.id);
      db.Parks.findOne({
        where: { id: req.params.id }
        // include: [{model: db.Parks}]
      },
      console.log('PARK? ', db.Parks)
      ).then(function (dbSinglePark) {
        res.json(dbSinglePark);
      });
    },
    // CREATE new Park
    createPark: function (req, res) {
      db.Location.findOne({
        where: { id: req.params.id }
      },
      console.log('WHAT IS HERE?!??',req.params.id)
      );
      db.Parks.create({ ...req.body, LocationId: req.params.id })
        .then(function (newPark) {
          res.json(newPark);
        });
    },
    // Delete an example by id
    deletePark: function (req, res) {
      db.Parks.destroy({ where: { id: req.params.id } }).then(function (dbPark) {
        res.json(dbPark);
      });
    }
  };
};
