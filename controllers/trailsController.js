// eslint-disable-next-line no-unused-vars
const db = require('../models');

module.exports = function (db) {
  return {
    // Get all examples
    // getExamples: function (req, res) {
    //   db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
    //   res.json(dbExamples);
    // });
    // },
    getSingleTrail: function (req, res) {
      console.log('THE DATA COMING IN ', req.params.id);
      db.Trails.findOne({
        where: { id: req.params.id }
        // include: [{model: db.Trails}]
      },
      console.log('Trails? ', db.Trails)
      ).then(function (dbSingleTrail) {
        res.json(dbSingleTrail);
      });
    },
    // Delete an trail by id
    deleteTrail: function (req, res) {
      db.Trails.destroy({ where: { id: req.params.id } }).then(function (dbTrail) {
        res.json(dbTrail);
      });
    }
  };
};
