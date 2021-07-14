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
          restaurant_name: 'example',
          address: 'sample location',
          price_level: 1,
          hours: 'Monday: Closed Tuesday: 4:00 – 10:00 PM Wednesday: 4:00 – 10:00 PM Thursday: 4:00 – 10:00 PM Friday: 4:00 – 10:00 PM Saturday: 11:00 AM – 3:00 PM, 4:00 – 10:00 PM Sunday: 11:00 AM – 3:00 PM',
          LocationId: 1
        }).then(() => {
          db.Trails.create({
            id: 1,
            trail_name: 'sample trail',
            address: '1234 pretty trail lane',
            LocationId: 1,
            hours: 'Monday: Closed Tuesday: 4:00 – 10:00 PM Wednesday: 4:00 – 10:00 PM Thursday: 4:00 – 10:00 PM Friday: 4:00 – 10:00 PM Saturday: 11:00 AM – 3:00 PM, 4:00 – 10:00 PM Sunday: 11:00 AM – 3:00 PM',
            price_level: 1
          }).then(() => {
            db.Parks.create({
              id: 1,
              park_name: 'sample park',
              address: '1234 pretty park lane',
              LocationId: 1,
              hours: 'Monday: Closed Tuesday: 4:00 – 10:00 PM Wednesday: 4:00 – 10:00 PM Thursday: 4:00 – 10:00 PM Friday: 4:00 – 10:00 PM Saturday: 11:00 AM – 3:00 PM, 4:00 – 10:00 PM Sunday: 11:00 AM – 3:00 PM',
              price_level: 10
            }).then(() => {
              db.Museums.create({
                id: 1,
                museum_name: 'the best museum',
                address: '1234 pretty museum',
                price_level: 20,
                hours: 'Monday: Closed Tuesday: 4:00 – 10:00 PM Wednesday: 4:00 – 10:00 PM Thursday: 4:00 – 10:00 PM Friday: 4:00 – 10:00 PM Saturday: 11:00 AM – 3:00 PM, 4:00 – 10:00 PM Sunday: 11:00 AM – 3:00 PM',
                LocationId: 1
              });
            });
          });
        });
      });
    });
  });
};
