const db = require("../models");

module.exports = function (db) {
  return {
    // Get all examples
    getMuseums: function (req, res) {
      db.museums.findAll({ where: { user_id: req.session.passport.user.id, LocationId: req.params.id } }).then(function (dbMuseums) {
        res.json(dbMuseums);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    }
  };
};
