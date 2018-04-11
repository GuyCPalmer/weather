var fs = require("fs");
var UserSearch = require("./UserSearch");
var moment = require('moment');

var weatherAdmin = function() {
    this.getData = function(){
        fs.readFile("log.txt", "utf8", function(error, data){
            console.log(data);
        });
    };

    this.newUserSearch = function(name, location) {
        var newUserSearch = newUserSearch(name, location);
        var logtxt = 
            "\nName: " + newUserSearch.name + " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;

            fs. appendFile("log.txt", logTxt);

            newUserSearch.getWeather();

    };
};

module.exports = WeatherAdmin;