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
    showButton.attr("value", i);
    parentDiv.append(showButton);
  }
  $(".button-div").prepend(parentDiv);
}
buttonList();

$(".clicked").click(function() {
  var clickValue = showButton.val();
  console.log(clickValue);
});
// function buildQueryUrl() {
var userSearch = "seinfeld";
// .val()
// .trim();
var queryURL =
  "https://api.giphy.com/v1/gifs/search?api_key=E0OTDN4N1uPMKpsABbJjCmU2FFuOdJ2r&q=" +
  userSearch +
  "&limit=10&ofkfset=0&rating=PG&lang=en";
console.log(queryURL);
//   return buildQueryUrl;
// Grab text the user typed into the search input, add to the queryParams object
//   queryParams.q = $("#search-term")
//     .val()
//     .trim();
//   buildQueryURL();
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log("from api call", response);
});
