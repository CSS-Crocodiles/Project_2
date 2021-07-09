module.exports = (db) => {
  db.User.create({
    firstName: 'Adam',
    lastName: 'Gates',
    email: 'adam@gates.com',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  }).then(() => {
    db.User.create({
      firstName: 'Uma',
      lastName: 'Pearson',
      email: 'uma@pearson.com',
      password: process.env.USER_PWD,
      isAdmin: false
    }).then(() => {
      db.Location.create({
        location_name: 'example location',
        starting_date: 'April 20, 2022',
        ending_date: 'April 30, 2022',
        User_Id: 2
      }).then(() => {
        db.restaurant.create({
          restaurant_name: 'example',
          address: 'sample location',
          hours: '1030',
          price_level: 2,
          LocationId: 1
        }).then(() => {
          db.trails.create({
            id: 1,
            trail_name: 'sample trail',
            address: '1234 pretty trail lane',
            LocationId: 1
          }).then(() => {
            db.parks.create({
              id: 1,
              park_name: 'sample park',
              address: '1234 pretty park lane',
              LocationId: 1
            }).then(() => {
              db.museums.create({
                id: 1,
                museum_name: 'the best museum',
                address: '1234 pretty museum',
                cost: 20,
                hours: 10,
                LocationId: 1
              });
            });
          });
        });
      });
    });
  });
};
