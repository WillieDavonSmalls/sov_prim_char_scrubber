const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");

const config = require('config');

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
const routes = require("./controllers/occupancies.js");

app.use(routes);

app.get("/occCodes", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/occcodes.html"));
});

app.get("/bldgCodes", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/bldgcodes.html"));
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/about.html"));
});

app.listen(config.app.port, function() {
  console.log("App now listening at localhost: ", config.app.port);
});