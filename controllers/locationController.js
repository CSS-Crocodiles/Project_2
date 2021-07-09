module.exports = function (db) {
  return {
    // Get all locations
    getLocation: function (req, res) {
      db.Location.findAll({ where: { UserId: req.params.id, {
        // be sure to include its associated Products
        include: [{model: museums}, {model: parks}, {model: trails}, {model: restaurant}]
      } 
    } }).then(function (dbLocations) {
        res.json(dbLocations);
      });
    },
    // Get single Location
    getSingleLocation: function (req, res) {
      db.Location.findByPk({ where: { id: req.params.id } }).then(function (dbSingleLocation) {
        res.json(dbSingleLocation);
      });
    },
    // Create a new example HOW DO WE DO THIS ONE???
    // first ask where do you want to go? - that could create this location
    createLocation: function (req, res) {
      db.Location.create(req.body).then(function (dbLocations) {
        res.json(dbLocations);
      });
    },
    // Delete an example by id
    deleteLocation: function (req, res) {
      db.Location.destroy({ where: { id: req.params.id } }).then(function (dbLocations) {
        res.json(dbLocations);
      });
    }
  };
};
