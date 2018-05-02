var Article = require("../models/Article");

module.exports = {
  // this method handles finding all articles in the db
  find: function(req, res) {
    console.log("Retrieving all articles from the db");
    Article.find().then(function(result) {
      res.json(result);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles adding new articles to the db
  insert: function(req, res) {
    console.log("Adding an artice to db");
    console.log("req.body: ", req.body);
    Article.create(req.body).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles deleting articles from the db
  delete: function(req, res) {
    console.log("Removing an article from db");
    Article.remove({
      _id: req.params.id
    }).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
