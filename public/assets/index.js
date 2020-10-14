

   
    // The code in add.js handles what happens when the user clicks the "Add a restaurant" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newReview object
    var addnewReview = {
      username: $("#username").val().trim(),
      restaurant_name: $("#restaurant_name").val().trim(),
      rating: $("#rating").val().trim(),
      // pages: $("#pages").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", addnewReview)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#username").val("");
    $("#restaurant_name").val("");
    $("#rating").val("");
    // $("#pages").val("");
  
  });
     
  $.get("/api/all", function(data) {
  
    console.log(data)
  
    for (var i = 0; i < data.length; i++) {
  
      $("#ratingsList").append('<h4>' + data[i].username + '</h4>');
      $("#ratingsList").append('<h4>' + data[i].restaurant_name + '</h4>');
      $("#ratingsList").append('<h4>' + data[i].rating + '</h4>');
      $("#ratingsList").append('<h4>---------------------------------</h4>');
    }
  });
        
  
  $("#search-btn").on("click", function(event) {
    event.preventDefault();
  
  
  
    // Save the book they typed into the restaurant-search input
    var cityName = $("#restaurant-search").val().trim();
  
    var settings = {
      "url": "http://opentable.herokuapp.com/api/restaurants?city=" + cityName,
      "method": "GET",
      "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response.restaurants);
      renderRestaurants(response.restaurants);
    });
  });
  
  
    // // Make an AJAX get request to our api, including the user's book in the url
    // $.get("/api/" + restaurantSearched, function(data) {
  
    //   console.log(data);
    //   // Call our renderBooks function to add our books to the page
    //   renderBooks(data);
  
    // });
  
  
  
  $("#hello").on("click", function(event) {
  
    event.preventDefault();
  
    // Make a newRating object
    var newRating = {
      username: $("#usernameInput").val().trim(),
      restaurant_name: $("#restaurantNameInput").val().trim(),
      rating: $("#ratingInput").val().trim(),
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", {
      username: newRating.username,
      restaurant_name: newRating.restaurant_name,
      rating: newRating.rating,
    })
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  });
  
  
  
  function renderRestaurants(data) {
  
    console.log("renderRestaurants")
    //if (data.length !== 0) {
  
      // $("#stats").empty();
      // $("#stats").show();
  
    for (var i = 0; i < data.length; i++) {
      $("#restaurantList").append('<h4>' + data[i].name + '</h4>');
    }
  
  }
  