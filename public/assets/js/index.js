
$(document).ready(function(){

    var settings = {
        "url": "https://api.yelp.com/v3/businesses/search?term=restaurants&location=San Diego",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer HI1chBajXbwmKvT2XKSFT5xcV9Kn_51fg69kB9k-qZ6oPWmdfyp02IzZc684aPhzoxZpW5ZmhDdx-h7L31FppPH4cyzL15ms2NOkRlGJDMnBJRcMNqxnze0grw9-X3Yx"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

    
    // Write index page your CLIENT-SIDE logic here
    // This will run in the browser
});