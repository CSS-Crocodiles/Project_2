const axios = require('axios');

let placePriceLevelEmojied;

const loopAndGetData = (cityCode) => {
  const promises = []
  for (let i = 0; i < cityCode.length; i++) {
    promises.push(axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${cityCode[i]}&key=${process.env.GOOGLE_MAPS_KEY}`)
      .then(function (data) {
        let placeName;
        let placeAddress;
        let placeHoursAll;
        let placeWebsite;
        let placePriceLevel;
        
        if (!data.data.result.name) {
          placeName = 'Name not provided'
        } else {
          placeName = data.data.result.name
        }

        if (!data.data.result.formatted_address) {
          placeAddress = 'Address not provided';
        } else {
          placeAddress = data.data.result.formatted_address;
        }
        
        //NOT WORKING - weekday_text - IS THROWING AN ERROR
        // if (!data.data.result.opening_hours.weekday_text) {
        //   placeHoursAll = 'Hours not provided';
        // } else {
        //   placeHoursAll = data.data.result.opening_hours.weekday_text;
        // }

        if (!data.data.result.price_level) {
          placePriceLevel = 'No pricing available'
        } else {
          placePriceLevel = data.data.result.price_level
          placePriceLevelEmojied = Array(placePriceLevel + 1).join('$');
        }

        if (!data.data.result.website) {
          placeWebsite = 'Website not provided';
        } else {
          placeWebsite = data.data.result.website;
        }
        
        placeDataCollection = { 'name': placeName, 'address': placeAddress, 'price': placePriceLevelEmojied, 'website': placeWebsite }; //'hours': placeHoursAll,
        // console.log('PLACE DATA COLLECTION', placeDataCollection)
        return placeDataCollection 
        // console.log('place data collectino ', placeDataCollection);
      //  placeDataLoad.push(placeDataCollection);
      }));
    }

    return promises
}

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
// const placeDataLoad = [];

      const getCity = req.body.city;
      const getParameter = req.body.parameter;
      axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${getCity}+nc&type=${getParameter}&radius=5000&strictbounds&fields=name,place_id&key=${process.env.GOOGLE_MAPS_KEY}`)
        .then(function (response) {
          let placeDataCollection;
          let cityCode = [];
          for (let i = 0; i < response.data.results.length; i++) {
            cityCode.push(response.data.results[i].place_id);
          };
          // console.log('cityCode ', cityCode)
          const promises = loopAndGetData(cityCode)

          Promise.all(promises).then(results => {
            console.log('results ', results)
            res.json(results)
          })
          //console.log('promises???? ', promises);
           // console.log('data to be send!!!! ', placeDataLoad)
             // res.json(placeDataLoad)
        });
    }
  };
};
