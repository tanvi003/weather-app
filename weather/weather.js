/*const request = require('request');
var getWeather = (lat, lng, callback) => {
	

request({
	url: `https://api.darksky.net/forecast/${lat}/${lng}`,
	json: true
}, (error, response, body) => {
if (error) {
	callback('Unable to connect to forecast.io server');
}
else if (response.statusCode===400) {
	callback('Unable to fetch weather');
}
else if (response.statusCode===200) {
	callback(undefined,{
	temperature: body.currently.temperature,
	apparentTemperature: body.currently.apparentTemperatue
	});

}
});
};
module.exports.getWeather = getWeather;*/
const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/781297806a55dca36881537a238214f0/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
