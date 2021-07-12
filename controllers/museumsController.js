const db = require("../models");

module.exports = function (db) {
  return {
    //DON'T NEED GET ALL ANYMORE!!
    // Get all examples
    // getMuseums: function (req, res) {
    //   console.log('THE DATA COMING IN ', req)
    //   db.Museums.findAll({ 
    //     where: { 
    //       user_id: req.session.passport.user.id, 
    //       LocationId: req.params.id 
    //     } 
    //     }).then(function (dbMuseums) {
    //     res.json(dbMuseums);
    //   });
    // },
    getSingleMuseum: function (req, res) {
      console.log('THE DATA COMING IN ', req.params.id)
    db.Museums.findOne({ 
        where: { id:req.params.id}, 
        // include: [{model: db.Museums}]
      },
      console.log('MUSEUM? ', db.Museums)
    ).then(function (dbSingleMus) {
      res.json(dbSingleMus);
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
