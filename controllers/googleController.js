const axios = require('axios');

module.exports = function () {
  return {
    getTrip: async function (req, res) {
      try {
        const neighborhood = 'chelsea';
        const borough = 'manhattan';
        const city = 'new+york+city';
        const category = 'burgers';
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=AIzaSyDTt9aaiFRWAsIfdmvIN7tCBSzVc-eDEmU`);
        console.log(`--> RESPOSNE data:  ${data}`);
        res.json(data);
      } catch (err) {
        console.log('ERROR IN CATCH', err);
      }
    }
  };
};
