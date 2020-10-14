var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/all", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/all.html"));
  });

  app.get("/add", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/add.html"));
  });
  
  app.get("/creator", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/creator.html"));
  });

  // cms route loads cms.html
  app.get("/contact", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // blog route loads blog.html
  app.get("/example", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/example.html"));
  });

app.get("/profiles", function(request, response) {
  response.sendFile(path.join(__dirname, "../public/profiles.html"));
});

app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "../public/restaurant.html"));
});
};
