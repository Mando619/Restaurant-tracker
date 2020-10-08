const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/public', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./controllers/view-routes')(app);
require('./controllers/api-routes')(app);

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id=293919",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "513419ea98msh86e5703b3981c88p11aeaajsn43e1ea91d50c"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});