var buttonArray = [
  "Seinfeld",
  "Curb your enthusiasm",
  "Westworld",
  "Game of thrones",
  "Silicon valley"
];
//create list of buttons based on buttonArray
function buttonList() {
  var parentDiv = $("<div>");
  for (let i = 0; i < buttonArray.length; i++) {
    console.log(buttonArray);
    var showButton = $("<button>");
    showButton.addClass("btn btn-info clicked");
    showButton.text(buttonArray[i]);
    showButton.attr("value", buttonArray[i]);
    parentDiv.append(showButton);
    console.log(showButton);
    // console.log(buttonArray[showButton.value]);
  }
  $(".button-div").prepend(parentDiv);
  // console.log(showButton);
}
buttonList();

//on click:
//create new variable based on user entry
//push to buttonArry
// var newButton = $(".form-group").val();
// console.log(newButton);
$("#add-show").click(function() {
  var userEntry = $(".form-control").val();
  buttonArray.push(userEntry);
  buttonList();
  console.log(userEntry);
  console.log(buttonArray);
  // $(".form-control").reset(); //not correct
  //buttonArray[""].push());
  // console.log(buttonArray);
  // console.log(showButton);
});
// console.log(buttonArray[1]);
//on click take value of button and create new variable
$(".clicked").click(function() {
  // console.log(showButton);
  console.log($(".clicked");
  var clickValue = buttonArray[$(".btn btn-info clicked").innerHTML];
  // .text(); //val();
  // buttonArray[$(".clicked").value];
  console.log(clickValue); //--> returns seinfeld (index of 0)
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
//grabbing gif url and posting to gifs div
$("#gifs").append(response.data[0].source_post_url);
