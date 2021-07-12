const axios = require('axios');

module.exports = function () {
  return {
    getTrip: async function (req, res) { // <-- TO DO:  delete function if it proves unneccessary
      try {
        // const cityIncoming = '';
        // const stateIncoming = '';
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
        const urlResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${getCity}+${getState}&type=restaurant&radius=5000&strictbounds&key=${process.env.GOOGLE_MAPS_KEY}`);
        console.log(`--> getTripAlt - RESPONSE data:  ${urlResponse.data}`);
        // res.json();
        // res.send(data); // this works for Postman
        res.send(urlResponse.data);
        // console.log(`--> getTripAlt - RESPONSE JSON DATA:  ${res.json()}`);
        // console.log(`--> getTripAlt - RESPONSE send DATA:  ${res.send(data)}`);
        // return res.json(data);
      } catch (err) {
        console.log('ERROR IN CATCH', err);
      }
    }
  };
};
