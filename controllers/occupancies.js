var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var occupancy = require("../models/occupancy.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});

router.post("/api/occupancies", function(req, res) {
  occupancy.search(req.body, function(err, results) {
    if (err) res.status(500).send(err); // There was a problem, respond with a 500

    // Send back the ID of the new quote
    res.json(results);
  });
});

// Export routes for server.js to use.
module.exports = router;
