//api key = E0OTDN4N1uPMKpsABbJjCmU2FFuOdJ2r

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

var buttonArray = [
  "Seinfeld",
  "Curb your enthusiasm",
  "Westworld",
  "Game of thrones",
  "Silicon valley"
];
// console.log(buttonArray[2]);

function buttonList() {
  var parentDiv = $("<div>");
  for (let i = 0; i < buttonArray.length; i++) {
    console.log(buttonArray);
    var showButton = $("<button>");
    showButton.addClass("btn btn-info clicked");
    showButton.text(buttonArray[i]);
    parentDiv.append(showButton);
  }
  $(".button-div").prepend(parentDiv);
}
buttonList();
