module.exports = function (db) {
    return {

createMuseum: function (req, res) {
    console.log('THE DATA COMING IN ', req.params.id);
    db.Location.findOne({
      where: { id: req.params.id }
    //   include: 
    //   [ { model: db.Parks }, { model: db.Museums },{ model: db.Trails }, { model: db.Restaurant }] 
},
    console.log('MUSEUMS? ', db.Museums)
    ),
    db.Museums.create({...req.body, LocationId:req.params.id })
    .then(function (newMuseum) {
      res.json(newMuseum);
    });
    }
  }
}