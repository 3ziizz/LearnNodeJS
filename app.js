const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=YOUR_KEY&address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(body);
});
