var db = require("../models");


module.exports = function (app) {

    app.post ('api/restaurant', function (req, res) {
        var cityName = req.body.name;
        var queryUrl = 'https://api.yelp.com/v3/businesses/HI1chBajXbwmKvT2XKSFT5xcV9Kn_51fg69kB9k-qZ6oPWmdfyp02IzZc684aPhzoxZpW5ZmhDdx-h7L31FppPH4cyzL15ms2NOkRlGJDMnBJRcMNqxnze0grw9-X3Yx' + cityName;
        request (queryUrl, function (error, response, body) {
            if (!error && JSON.parse(body).Response !== 'False') {
                console.log(JSON.parse(body));
    
                var restaurantId = JSON.parse(body).restaurantId;
                console.log(restaurantId);
    
                var restaurants =  "";
                
                var options =  {
                    method: 'GET',
                    url: 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=' + restaurantId + restaurants,
                    qs: {
                        bearer: HI1chBajXbwmKvT2XKSFT5xcV9Kn_51fg69kB9k-qZ6oPWmdfyp02IzZc684aPhzoxZpW5ZmhDdx-h7L31FppPH4cyzL15ms2NOkRlGJDMnBJRcMNqxnze0grw9-X3Yx
                    },
                    body: '{}'
    
                };
    
                app.request (options, function (error,response,result){
                    if (error) res.redirect('/');
                    if (!JSON.parse(result).results) {
                        // res.send('SOMETHING WENT WRONG');
                        res.redirect('/')
                    } else {
                        restaurants = JSON.parse(result).results[0].key;
                        console.log(restaurants);
                        db.Restaurant.create({
                            restaurant_name: JSON.parse(body).Title,
                            restaurant_pic: JSON.parse(body).Picture,
                            restaurant_price: JSON.parse(body).Pricing,
                            restaurant_category: JSON.parse(body).Category,
                            restaurant_location: JSON.parse(body).Location,
                        }).then(function(){
                            res.redirect('/');
                        });
                }
        });
        } else {
            console.log("something went wrong.");
            res.redirect('/');
        }
    });
    });
    }
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id=293919",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "513419ea98msh86e5703b3981c88p11aeaajsn43e1ea91d50c",
            "useQueryString": true
        }
    }



    // Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");


var Rating = sequelize.define("rating", {
  username: Sequelize.STRING,
  restaurant_name: Sequelize.STRING,
  rating: Sequelize.STRING,
});

Rating.sync({force: true}).then(function() {
  // Table created
  return Rating.create({
    username: 'Matt',
    restaurant_name: "Chipotle",
    rating: "###"
  });
});

module.exports = Rating;