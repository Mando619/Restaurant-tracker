const db = require("../models");

module.exports = function (app) {


    router.post ('api/restaurant', function (req, res) {
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

<<<<<<< HEAD:controllers/api-routes.js
                request (options, function (error,response,result){
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
=======
    }
})
    
});
}
>>>>>>> 0d0a3e02a497f3a19fdf26a3b45fe5f0755a1f61:routes/api-routes.js
