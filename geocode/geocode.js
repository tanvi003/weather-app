const request = require('request');

var geocodeAddress = (address, callback) =>{
var encodedAddress = encodeURIComponent(address);
request({
//  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
 url: `http://www.mapquestapi.com/geocoding/v1/address?key=Eudn9n0PBnRYxEztohYUANnaKMMfw7JG&location=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log(body.status)
if (error){
	callback('Unable to connect to google servers.');
}else if(body.status==='ZERO_RESULTS') {
	callback('Unable to find address');
}
else {
	callback(undefined,{
latitude: body.results[0].locations[0].latLng.lat,
	longitude: body.results[0].locations[0].latLng.lng
});
}
});
};
module.exports.geocodeAddress = geocodeAddress;
