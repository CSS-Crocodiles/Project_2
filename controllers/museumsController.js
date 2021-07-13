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
    // Create a new MUSEUM
    // createMuseum: function (req, res) {
    //   console.log('THE DATA COMING IN ', req.body);
    //   db.Museums.create(req.body)
    //   .then(function (newMuseum) {
    //     res.json(newMuseum);
    //   });
    // },

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
