var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    var connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'arm575',
        database: 'restaurants_db'
    })
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;



//jawsdb-globular-31008 JAWSDB_URL

//    mysql://utb9wkmamlbgl6mx:s6sba1fnnchla6cd@y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/q2cs3pwgw0axv9ok




//Error Code: 1044. Access denied for user 'utb9wkmamlbgl6mx'@'%' to database 'restaurants_db'
