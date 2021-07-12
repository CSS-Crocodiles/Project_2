// const googleController = require('../../../controllers/googleController');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

console.log(`--> places.js IS RUNNING`);

const newTripGet = async (event) => {
  event.preventDefault();
  const responseRes = await fetch(`/api/getGoogleData`, requestOptions);
  console.log(`--> newTripGet:  ${responseRes}`);
};
const newTripHandler = async (event) => {
  event.preventDefault();
  console.log(`--> SUBMIT button was clicked`);
  const city = document.querySelector('#example-text').value.trim();
  const state = document.querySelector('#example-description').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();
  /*
      if (name && needed_funding && description) {
        const response = await fetch(`/api/projects`, {
          method: 'POST',
          body: JSON.stringify({ name, needed_funding, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      */
  if (city && state) {
    const responseReq = await fetch(`/api/getGoogleData`, {
      method: 'POST',
      body: JSON.stringify({ 'city': city, 'state': state }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (responseReq.ok) {
      console.log(`--> responseReq STATUS:  ${responseReq.status}`);
      // const responseData = await responseReq.json();
      // console.log(`--> RESPONSE (responseData VARIABLE RETURNING JSON?:  ${responseData})`);
      console.log(`--> RESPONSE (responseReq raw):  ${responseReq}`);
      console.log(`--> RESPONSE (JSON.stringify(responseReq)):  ${JSON.stringify(responseReq)}`);
      // document.location.replace('/profile');
    } else {
      alert('Failed to work');
    }
  }
};
  // document.querySelector('.form-group').addEventListener('submit', newTripHandler);
document.querySelector('#submit').addEventListener('click', newTripHandler);