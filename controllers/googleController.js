const axios = require('axios');

module.exports = function () {
  return {
    getTrip: async function (req, res) { // <-- TO DO:  delete function if it proves unneccessary
      try {
        const neighborhood = 'chelsea';
        const borough = 'manhattan';
        const city = 'new+york+city';
        const category = 'burgers';
        // process.env.GOOGLE_MAPS_KEY
        // const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=AIzaSyDTt9aaiFRWAsIfdmvIN7tCBSzVc-eDEmU`);
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${process.env.GOOGLE_MAPS_KEY}`);
        console.log(`--> RESPOSNE data:  ${data}`);
        res.json(data);
      } catch (err) {
        console.log('ERROR IN CATCH', err);
      }
    },
    getTripNew: async function (req, res) {
      try {
        const getCity = req.body.city;
        const getState = req.body.state;
        // --> this works:  const urlResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${getCity}+${getState}&type=restaurant&radius=5000&strictbounds&fields=name,opening_hours&key=${process.env.GOOGLE_MAPS_KEY}`);
        const urlResponse = await (`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJHSHXl4T0rIkRmwZHPIxZC6Y&key=${process.env.GOOGLE_MAPS_KEY}`);
        console.log(`--> getTripAlt - RESPONSE data:  ${JSON.stringify(urlResponse.data.results)}`);
        res.json(urlResponse.data); // <-- this works for now
      } catch (err) {
        console.log('Request for Places failed', err);
      }
    },
  // };
// };
    getTripNewDetails: function (req, res) {
      const getCity = req.body.city;
      const getState = req.body.state;
      const getParameter = req.body.parameter;
      axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${getCity}+${getState}&type=${getParameter}&radius=5000&strictbounds&key=${process.env.GOOGLE_MAPS_KEY}`)
        .then(function (response) {
          console.log(`FIRST RESPONSE:  `, response.data.results)
          const cityCode = response.data.results[0];
          axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${cityCode.place_id}&key=${process.env.GOOGLE_MAPS_KEY}`)
          .then(function (data) {
                      // response.json()
                      // console.log(`response 2 data:  `, response.json())
            console.log(`RESPONSE 2 DATA:  `, data);
            // console.log(`RESPONSE AT FIRST INDEX:  `, data.results[0].name);
            console.log(`TEST RESULTS:  `, data.data.result.formatted_address, data.data.result.name, data.data.result.weekday_text, data.data.result.price_level, data.data.result.website);
            // res.json(data.data);
            res.json(data.data.result.formatted_address, data.data.result.name, data.data.result.weekday_text, data.data.result.price_level, data.data.result.website);
          });
        });
    }
  };
};
