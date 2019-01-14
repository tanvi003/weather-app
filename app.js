/*const request =require('request');

request({url: 'http://www.mapquestapi.com/geocoding/v1/address?key=Eudn9n0PBnRYxEztohYUANnaKMMfw7JGs&location=1301%20lombard%20street%20philadelphia',
	json: true

}, (error,response,body) =>{
	conole.log(body);
}	);*/


const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
.options({
	a: {demand:true,
		alias: 'address',
		describe:'Address to fetch weather for',
		string: true}

})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress (argv.address,(errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	}else {
		console.log(results);
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			}
			else{		
				console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
			}
		});
	};
})

