var buttonArray = [
  "Seinfeld",
  "Curb your enthusiasm",
  "Westworld",
  "Game of thrones",
  "Silicon valley"
];

//on click:
//create new variable based on user entry
//push to buttonArry
var newButton = $(".form-group").val();
console.log(newButton);
$("#add-show").click(buttonArray[""].push());

// console.log(buttonArray[2]);
//create list of buttons based on buttonArray
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

//on click take value of button and create new variable
$(".clicked").click(function() {
  var clickValue = showButton.val();
  console.log(clickValue);
});

// create query string. Use clickValue variable as "q" value for api call
var userSearch = clickValue;
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
