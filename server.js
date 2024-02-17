var express = require('express');
var app = express();
app.get('/', function (req, res) {
    const favoriteFood = process.env.FAVORITE_FOOD;
    console.log(`My favorite food is ${favoriteFood}`);
    res.send('Hello World!');
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});