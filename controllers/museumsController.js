// eslint-disable-next-line no-unused-vars
const db = require('../models');

module.exports = function (db) {
  return {
    // DON'T NEED GET ALL ANYMORE!!
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
      console.log('THE DATA COMING IN ', req.params.id);
      db.Museums.findOne({
        where: { id: req.params.id }
        // include: [{model: db.Museums}]
      },
      console.log('MUSEUM? ', db.Museums)
      ).then(function (dbSingleMus) {
        res.json(dbSingleMus);
      });
    },
    // NOW ON createController.js
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

    // Delete an example by id
    deleteMuseum: function (req, res) {
      db.Museums.destroy({ 
        where: 
        { id: req.params.id } 
      }).then(function (dbDeleteMus) {
        res.json(dbDeleteMus);
      });
    }
  };
};
