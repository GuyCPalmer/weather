var WeatherAdmin = require("/WeatherAdmin.js");
var loginType = process.argv[2];
var userName = process.argv[3];
var userLocation = process.argv[4];

MyAdmin = new WeatherAdmin();

if (loginType === "admin") {

    MyAdmin.getData();

} else {
    MyAdmin.newUserSearch(userName, userLocation);

};