//npm weather package
var weather = require('weather-js');

//user search constructor
var userSearch = function(name, location) {
    this.userName = userName;
    this.userLocation = userLocation;
    this.date = Date.now();
    this.getweather = function() {
        weather.find({ search: this.Location, degreeType: 'F' }, function(err, result) {
            if (err) console.log (err);
            console.log(JSON.stringify(result, null, 2));

        });
    };
};
module.exports = userSearch;