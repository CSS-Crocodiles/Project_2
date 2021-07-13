// const { response } = require('express'); // <-- TO DO:  Delete if not needed
                                            //             It's unclear why it's causing error on load
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

console.log(`--> places.js IS RUNNING`);

const newTripHandler = async (event) => {
  event.preventDefault();
  console.log(`--> SUBMIT button was clicked`);
  const city = document.querySelector('#example-text').value.trim();
  const state = document.querySelector('#example-description').value.trim();
  if (city && state) {
    fetch(`/api/getGoogleData`, {
      method: 'POST',
      body: JSON.stringify({ 'city': city, 'state': state }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('RESPONSE DATA - ALL:  ', data);
      console.log('RESPOSNE DATA - FIRST RESULT, NAME:  ', data.results[0].name);
      // functionHere(data.results) <-- function to loop through data could go here or in separate function
    });
  }
};

// document.querySelector('.form-group').addEventListener('submit', newTripHandler);
document.querySelector('#submit').addEventListener('click', newTripHandler);