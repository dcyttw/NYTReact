const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
var mongoose = require("mongoose");
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nyt-react";
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Send every request to the React app
// Define any API routes before this runs
var articlesController = require("./controllers/article-controller");
var router = new express.Router();
// Get saved articles
router.get("/api/saved", articlesController.find);
// Save an article
router.post("/api/saved", articlesController.insert);
// delete a saved article
router.delete("/api/saved/:id", articlesController.delete);
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(router);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});