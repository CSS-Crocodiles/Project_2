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
        user_id: 2
      }).then(() => {
        db.Restaurant.create({
          restaurant_name: 'Mad Hatter',
          address: 'sample location',
          price_level: 1,
          website: 'www.madhatterbakeshop.com/',
          LocationId: 1
        }).then(() => {
          db.Trails.create({
            id: 1,
            trail_name: 'sample trail',
            address: '1234 pretty trail lane',
            price_level: 1,
            website: 'www.sampletrail.com/',
            LocationId: 1
          }).then(() => {
            db.Parks.create({
              id: 1,
              park_name: 'sample park',
              address: '1234 pretty park lane',
              LocationId: 1,
              website: 'www.samplepark.com/',
              price_level: 10
            }).then(() => {
              db.Museums.create({
                id: 1,
                museum_name: 'the best museum',
                address: '1234 pretty museum',
                price_level: 20,
                website: 'www.thebestmuseum.com/',                
                LocationId: 1
              });
            });
          });
        });
      });
    });
  });
};
