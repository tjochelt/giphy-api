//api key = E0OTDN4N1uPMKpsABbJjCmU2FFuOdJ2r
var buttonArray = [
  "seinfeld",
  "curb your enthusiasm",
  "westworld",
  "game of thrones",
  "silicon valley"
];

function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=E0OTDN4N1uPMKpsABbJjCmU2FFuOdJ2r&q=panda&limit=10&offset=0&rating=PG&lang=en";

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  //   var queryParams = { "api-key": "E0OTDN4N1uPMKpsABbJjCmU2FFuOdJ2r" };

  // Grab text the user typed into the search input, add to the queryParams object
  queryParams.q = $("#search-term")
    .val()
    .trim();
}

function buttonList() {
  var parentDiv = $("<div>");
  //   var pShowText = $("<p>");
  // console.log(currentQuestion);
  //   parentDiv.append(pShowText);
  //dynamically display question options
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    var showButton = $("<button>");
    // pShowText.text(buttonArray[i]);
    showButton.addClass("btn btn-info clicked");
    showButton.text(buttonArray[i]);
    //   optionButton.attr("value", i);
    parentDiv.append(showButton);
  }
  $(".button-div").append(parentDiv);
}
