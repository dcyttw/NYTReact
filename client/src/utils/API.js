import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getNYTArticles: function(searchTerm, beginYear, endYear) {
  //getNYTArticles: function() {
  	var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
  	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                  searchTerm + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";
    console.log(queryURL);
    return axios.get(queryURL).then(function(response) { return response });
    //return queryURL;
  }
};