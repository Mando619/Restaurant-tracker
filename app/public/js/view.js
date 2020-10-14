// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the restaurant they typed into the restaurant-search input
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
    $("#restaurantList").append('<button class="restaurantButton" id="' + data[i].name + '" >' + data[i].name + '</button>');
    $("#restaurantList").append('<h4>' + data[i].address + '</h4>');
    $("#restaurantList").append('<h4>' + data[i].phone + '</h4>');
    $("#restaurantList").append('<h4>' + data[i].price + '</h4>');
    
  }

  var modal = document.getElementById("myModal");

  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  


  $(".restaurantButton").on('click', function(event){
    console.log("hello")
    modal.style.display = "block";
    //(... rest of your JS code)
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


}
  
