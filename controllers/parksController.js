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
    // Create a new example
    // createExample: function (req, res) {
    // db.Example.create(req.body).then(function (dbExample) {
    //   res.json(dbExample);
    // });
    // },
    // Delete an example by id
    deletePark: function (req, res) {
      db.Parks.destroy({ where: { id: req.params.id } }).then(function (dbPark) {
        res.json(dbPark);
      });
    }
  };
};
