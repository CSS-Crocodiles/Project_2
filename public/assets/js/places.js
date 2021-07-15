// const { response } = require('express'); // <-- TO DO:  Delete if not needed
//                                                         It's unclear why it's causing error on load
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
let placePriceLevelEmojied;

const dropdownParameter = document.getElementById('select1');

const googleData = []

console.log(`--> places.js IS RUNNING`);

const newTripHandler = async (event) => {
  event.preventDefault();
  console.log(`--> SUBMIT button was clicked`);
  const city = document.getElementById('inputFirst').value.trim();
  // const state = document.querySelector('#example-description').value.trim();
  const parameter = dropdownParameter.options[dropdownParameter.selectedIndex].text.toLowerCase();
  console.log(`--> paramter VALUE:  `, document.getElementById('select1').value);
  console.log(`--> parameter TEXT:  `, parameter);
  console.log(`--> parameter CITY:  `, city)
  if (city && parameter) {
    fetch(`/api/getGoogleData`, {
      method: 'POST',
      body: JSON.stringify({ 'city': city, 'parameter': parameter }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      //console.log(`******RESPONSE DATA:  DATA LOAD - all:  `, response.json());
      console.log(`--> FIRST RESPONSE:  `, response);
      return response.json();
    }).then(function (data) {

      console.log(`RESPONSE DATA:  DATA LOAD - all:  `, data);

      data.map(async d => {

        const choicesList = document.getElementById('listedItems1')
        const cityCode = d.place_id
        let locId = localStorage.getItem('key')
        console.log('ARE WE GETTING LOCATION ID?!?!', locId);

        $('body').append(`<a class="dButton btn" id="${cityCode} word" ><li>${d.name} && ${d.address} && ${d.price} && ${d.website}</li></a>`)
      // .then(function (d) {
        // wrap these elements in a parent element
        $('.dButton').on('click', function await (event) {
          event.preventDefault();
          console.log("BUtton Clicked on -", cityCode)
          const newParameter = {
            name: d.name,
            address: d.address,
            price_level: d.price,
            website: d.website,
            LocationId: locId,
          };
          console.log('new MUSEUM:', newParameter);
          console.log('ARE WE GETTING LOCATION ID?!?!', locId);
        
          if (newParameter.name.length > 0 && newParameter.address.length > 0 && newParameter.website.length > 0 && parameter == 'museum') {
            $.ajax({
              type: 'POST',
              url: 'api/location/:id/museums',
              data: newParameter
            }).then(() => {
              // console.log('newLocation:', newLocation);
              // window.location.href = '/create';
              return false;
            });
          } else {
            console.log('**NEED MORE INFO**');
            $('#create-err-msg').empty('').text('**Please fill out entire form**');
          }
        })
      // })
      })

      // $('#cityCode').on('click', function (event) {
      //   event.preventDefault();
      //   console.log("BUtton Clicked on -", cityCode)
      //   const newParameter = {
      //     name: $(data.name),
      //     address: $(data.address),
      //     price_level: $(data.price),
      //     website: $(data.website),
      //   };
      //   console.log('new MUSEUM:', newParameter);
      
      //   if (newParameter.name.length > 0 && newLocation.address.length > 0 && newLocation.price_level.length > 0 && newLocation.website.length > 0 && parameter == 'museum') {
      //     $.ajax({
      //       type: 'POST',
      //       url: 'api/location/:id/museums',
      //       data: newParameter
      //     }).then(() => {
      //       // console.log('newLocation:', newLocation);
      //       // window.location.href = '/create';
      //       return false;
      //     });
      //   } else {
      //     console.log('**NEED MORE INFO**');
      //     $('#create-err-msg').empty('').text('**Please fill out entire form**');
      //   }
      // });
      // const googleList = data
      // googleData.push(data);
      // console.log(`#*#*# GOOGLE CONST #*#*#  `, googleData);
      
      // console.log(`RESPOSNE DATA:  DATA LOAD - first:  `, data.placeDataLoad[0]);
      // functionHere(data.results) <-- function to loop through data could go here or in separate function
    });
  }
};

// document.querySelector('.form-group').addEventListener('submit', newTripHandler);
document.querySelector('#add-interest').addEventListener('click', newTripHandler);


// TRIED USING THIS TO GET SINGLE MUSEUM, WHICH IT DID BUT DIDNT RETURN DATA
        // // const grandParent = `<ul>${parent}</ul>`
        // const list = `<li class = "paramInfo">${d.name} && ${d.address} && ${d.price} && ${d.website}</li>`
        // const parent = `<a class="dButton btn" id="${cityCode}" >${list}</a>`

        // $('body').append(`${parent}`)

        // $('.dButton').on('click', function await (event) {
        //   event.preventDefault();
        //   let rowChild = $(this).children(".paramInfo")
        //   const tryParameter = {
        //     name: rowChild.name,
        //     address: rowChild.address,
        //     price_level: rowChild.price,
        //     website: rowChild.website,
        //   };
        //   console.log('new MUSEUM:', tryParameter);
        //   console.log('WHAT IS LENGTH HERE:', tryParameter.name.length);

        //   if (tryParameter.name.length > 0 && tryParameter.address.length > 0 && tryParameter.website.length > 0 && parameter == 'museum') {
        //     $.ajax({
        //       type: 'POST',
        //       url: 'api/location/:id/museums',
        //       data: tryParameter
        //     }).then(() => {
        //       // console.log('newLocation:', newLocation);
        //       // window.location.href = '/create';
        //       return false;
        //     });
        //   } else {
        //     console.log('**NEED MORE INFO**');
        //     $('#create-err-msg').empty('').text('**Please fill out entire form**');
        //   }
        // });

        
      /*
      console.log('RESPONSE DATA - ALL:  ', data);
      for (let i = 0; i < data.length; i++) {
        const placeAddress = data.data.result[i].formatted_address;
        const placeName = data.data.result[i].name;
        const placeHoursMonday = data.data.result[i].opening_hours.weekday_text[0];
        const placeHoursTuesday = data.data.result[i].opening_hours.weekday_text[1];
        const placeHoursWednesday = data.data.result[i].opening_hours.weekday_text[2];
        const placeHoursThursday = data.data.result[i].opening_hours.weekday_text[3];
        const placeHoursFriday = data.data.result[i].opening_hours.weekday_text[4];
        const placeHoursSaturday = data.data.result[i].opening_hours.weekday_text[5];
        const placeHoursSunday = data.data.result[i].opening_hours.weekday_text[6];
        for (let i = 0; i < data.data.result[i].price_level; i++) {
          placePriceLevelEmojied += '＄';
        }
        const placePriceLevel = data.data.result[i].price_level;
        const placeWebsite = data.data.result[i].website;
        console.log(`FINAL RESULTS:\nNAME:  ${placeName}\nADDRESS:  ${placeAddress}`);
        console.log(`HOURS:\n    MONDAY: ${placeHoursMonday}`);
        console.log(`    TUESDAY: ${placeHoursTuesday}`);
        console.log(`    WEDNESDAY: ${placeHoursWednesday}`);
        console.log(`    THURSDAY: ${placeHoursThursday}`);
        console.log(`    FRIDAY: ${placeHoursFriday}`);
        console.log(`    SATURDAY: ${placeHoursSaturday}`);
        console.log(`    SUNDAY: ${placeHoursSunday}`);
        console.log(`PRICE LEVEL:  ${placePriceLevelEmojied}`);
        console.log(`WEBSITE ADDRESS:  <a href="${placeWebsite}" target="_blank" rel="noopener noreferrer"</a>`);
      }
      console.log('RESPOSNE DATA - FIRST RESULT, NAME:  ', data.data.results[0].name);
      */
      // const data = placeDataCollection
      // console.log(`******RESPONSE DATA:  DATA LOAD - all:  `, data);