var express = require('express');
var expressHandlebars = require('express-handlebars');

//	var cors = require('cors')

var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
//	app.use(cors())

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//require('./controllers/restaurant_controller.js')(app);
require('./routes/api-routes')(app);
require('./routes/html-routes.js')(app);


db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
  });
  
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


// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

