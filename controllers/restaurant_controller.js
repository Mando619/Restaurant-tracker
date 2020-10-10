var express = require('express');
var router = express.Router();

// Import data model.
var db = require('../models');

// GET route which calls uses Sequelize's findAll method.
// This route then hands the data it receives to handlebars so index can be rendered.
module.exports = function (app) {
    
    router.get('/', function(request, response) {
        db.Restaurants.findAll ({
            order: 'name'
        }) .then (function(data) {
            var rtobjet = {
             restaurant: data
            };
            response.render('index', rtobjet);
    });
    })}

    