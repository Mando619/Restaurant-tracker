module.exports = function (app) {


router.post ('api/restaurant', function (req, res) {
    var cityName = req.body.name;
    var queryUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=' + cityName;
    request (queryUrl, function (error, response, body) {
        if (!error && JSON.parse(body).Response !== 'False') {
            console.log(JSON.parse(body));

            var restaurantId = JSON.parse(body).restaurantId;
            console.log(restaurantId);
            
            

    }
})
    
});
}