var express = require('express');
var router = express.Router();

// Import data model.
<<<<<<< HEAD
var db = require('../models');
=======
//var db = require('../models/models');
>>>>>>> c2db639d2086bc48e1222a7ffd2315d520c3bf26

// GET route which calls uses Sequelize's findAll method.
// This route then hands the data it receives to handlebars so index can be rendered.
module.exports = function (app) {
    
<<<<<<< HEAD
    router.get('/', function(request, response) {
        db.Restaurants.findAll({
            where: restaurants
        }).then (function(data) {
            var restObject = {
             restaurant: data
            };
            response.render('index', restObject);
    });
});
}
=======
   // router.get('/', function(request, response) {
    //    db.Restaurants.findAll({
     //       where: restaurants
     //   }).then (function(data) {
      //      var restObject = {
       //      restaurant: data
       //     };
         //   response.render('index', restObject);
  //  });//
//}/);
//}
>>>>>>> c2db639d2086bc48e1222a7ffd2315d520c3bf26
    