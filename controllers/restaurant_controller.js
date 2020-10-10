var express = require('express');
var router = express.Router();
var request = require('./api');
var port = 8080;
// Import data model.
// var db = require('../models');

// GET route which calls uses Sequelize's findAll method.
// This route then hands the data it receives to handlebars so index can be rendered.

module.exports = function (app) {
    
    router.get('/', function(req, res, next) {
        request({
          uri: 'https://api.yelp.com/v3/businesses/search?location=San Diego',
          qs: {
            authorization: 'Bearer HI1chBajXbwmKvT2XKSFT5xcV9Kn_51fg69kB9k-qZ6oPWmdfyp02IzZc684aPhzoxZpW5ZmhDdx-h7L31FppPH4cyzL15ms2NOkRlGJDMnBJRcMNqxnze0grw9-X3Yx',
            // query: 'San Diego'
        },
        function(error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
          } else {
            res.json(error);
          }
        }
        
      });
    });
    app.listen(port, () => console.log(`App listening on port ${port}!`))
}      

    