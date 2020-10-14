// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {

    console.log(data)
  
    for (var i = 0; i < data.length; i++) {
  
      $("#ratingsList").append('<h4>' + data[i].username + '</h4>');
      $("#ratingsList").append('<h4>' + data[i].restaurant_name + '</h4>');
      $("#ratingsList").append('<h4>' + data[i].rating + '</h4>' + '<button>' + "DELETE" + '</button>');
      $("#ratingsList").append('<h4>---------------------------------</h4>');
  
    }
    // For each book that our server sends us back
    // for (var i = 0; i < data.length; i++) {
    //   // Create a parent div to hold book data
    //   var wellSection = $("<div>");
    //   // Add a class to this div: 'well'
    //   wellSection.addClass("well");
    //   // Add an id to the well to mark which well it is
    //   wellSection.attr("id", "book-well-" + i);
    //   // Append the well to the well section
    //   $("#well-section").append(wellSection);
  
    //   // Now  we add our book data to the well we just placed on the page
    //   $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    //   $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
    //   $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
    //   $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
    // }
  
  
        // var div = $("<div>");
  
        // div.append("<h2>" + data[i].name + "</h2>");
        // div.append("<p>Author: " + data[i].author + "</p>");
        // div.append("<p>Genre: " + data[i].genre + "</p>");
        // div.append("<p>Pages: " + data[i].pages + "</p>");
        // div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");
  
        // $("#stats").append(div);
  
    // }
  
      // $(".delete").click(function() {
  
      //   $.ajax({
      //     method: "DELETE",
      //     url: "/api/book/" + $(this).attr("data-id")
      //   })
      //     // On success, run the following code
      //     .then(function() {
      //       console.log("Deleted Successfully!");
      //     });
  
      //   $(this).closest("div").remove();
  
      // });
  
   // }
  });