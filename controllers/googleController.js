const axios = require('axios');

let placePriceLevelEmojied;
const placeDataLoad = [];

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
    getTripNewDetails: function (req, res) {
      const getCity = req.body.city;
      console.log(`--> getCity VALUE:  `, getCity);
      // const getState = req.body.state; // <-- in case we need it, this works
      const getParameter = req.body.parameter;
      console.log(`--> getParameter VALUE:  `, getParameter);
      // axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${getCity}+${getState}&type=${getParameter}&radius=5000&strictbounds&key=${process.env.GOOGLE_MAPS_KEY}`) // <-- in case we need it, this works
      axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${getCity}+nc&type=${getParameter}&radius=5000&strictbounds&fields=name,place_id&key=${process.env.GOOGLE_MAPS_KEY}`)
        .then(function (response) {
          console.log(`FIRST RESPONSE - STATUS:  `, response.status);
          let placeDataCollection;
          console.log(`--> FIRST RESPONSE:  `, response.data.results);
          console.log(`--> length of data results:  `, response.data.results.length);
          let cityCode = [];
          for (let i = 0; i < response.data.results.length; i++) {
            cityCode.push(response.data.results[i].place_id);
          };
          console.log(`cityCode VALUE:  `, cityCode);
          console.log(`cityCode Length:  `, cityCode.length);
          console.log(`--> SECOND RESPONSE STARTING`);
          for (let i = 0; i < cityCode.length; i++) {
            axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${cityCode[i]}&key=${process.env.GOOGLE_MAPS_KEY}`)
              .then(function (data) {
                let placeName;
                let placeAddress;
                let placeHoursAll;
                let placeWebsite;
                let placePriceLevel;
                
                // Check "name"
                if (!data.data.result.name) {
                  placeName = 'Name not provided'
                } else {
                  placeName = data.data.result.name
                }

                // Check "address"
                if (!data.data.result.formatted_address) {
                  placeAddress = 'Address not provided';
                } else {
                  placeAddress = data.data.result.formatted_address;
                }
                
                // Check "hours" - returns array of hours for each day; index 0 = Monday, index 1 = Tuesday, ... index 6 = Sunday
                // Individual day hours can be broken out using:  data.data.result.opening_hours.weekday_text[index]
                if (!data.data.result.opening_hours.weekday_text) {
                  placeHoursAll = 'Hours not provided';
                } else {
                  placeHoursAll = data.data.result.opening_hours.weekday_text;
                }

                // Check "price"
                if (!data.data.result.price_level) {
                  placePriceLevel = 'No pricing available'
                } else {
                  placePriceLevel = data.data.result.price_level
                  // for (let i = 0; i < placePriceLevel; i++) {
                    // placePriceLevelEmojied += '$';
                  // }
                  placePriceLevelEmojied = Array(placePriceLevel + 1).join('$');
                }

                // Check "website"
                if (!data.data.result.website) {
                  placeWebsite = 'Website not provided';
                } else {
                  placeWebsite = data.data.result.website;
                }
                
                // this is helpful when needing to see raw values --> console.log(`--> SECOND RESPONSE RESULTS - ${[i]}:  \nNAME:  `, placeName, '\nADDRESS:  ', placeAddress, '\nHOURS (array):  ', placeHoursAll, '\nPRICING:  ', placePriceLevel, '\nWEBSITE:  ', placeWebsite);
                // placeDataCollection.push(placeName, placeAddress, placeHoursAll, placePriceLevel, placeWebsite);
                placeDataCollection = { 'name': placeName, 'address': placeAddress, 'hours': placeHoursAll, 'price': placePriceLevelEmojied, 'website': placeWebsite };
                console.log(`--> placeDataCollection - ${[i]}:  `, placeDataCollection);
                placeDataLoad.push(placeDataCollection);
                // console.log(`--> placeDataLoad:  `, placeDataLoad);
              });
            console.log(`DATA LOAD:  `, placeDataLoad);
            // res.json(placeDataLoad);
            // console.log(`TEST RESULTS:  `, data.data.result.formatted_address, data.data.result.name, data.data.result.weekday_text, data.data.result.price_level, data.data.result.website);
            // res.json(data.data.result.formatted_address, data.data.result.name, data.data.result.weekday_text, data.data.result.price_level, data.data.result.website);
          }
        });
    }
  };
};
