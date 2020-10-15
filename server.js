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



if(process.env.JAWSDB_URL){
	var options = {
	  host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	  user: 'bnizer2qz86o6f5g',
	  password:'hrgnntt398mhd1sz',
	  database: 'yx86lhtyqa246bjc'
	}
  } else {
  
	var options = {
	  host: 'localhost',
	  user: 'root',
	  password:'arm575',
	  database: 'restaurants_db'
	};
  }



//require('./controllers/restaurant_controller.js')(app);
require('./routes/api-routes')(app);
require('./routes/html-routes.js')(app);


db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
  });
  

