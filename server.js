const express = require('express');
const expressHandlebars = require('express-handlebars');

// var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors())

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

require('./controllers/restaurant_controller.js')(app);
// require('./controllers/api.js')(app);

// db.sequelize.sync({ force: true }).then(function() {
	// app.listen(PORT, function() {
	//   console.log("App listening on PORT " + PORT);
	// });
//   });
  

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

