var returnBtn = document.querySelector(".return");
var nameBtn = document.querySelector("#scoreSubmit");
var scoreName = document.querySelector("#scoreName");
var scores = document.querySelector(".scoreList ");
var clear = document.querySelector(".clear");

function replay() {
  window.location.href = "index.html";
}

function clearNames () {
  localStorage.clear();
}

function scoreList() {
  var user = {
    firstName: scoreName.value.trim(),
    score: localStorage.getItem("count"),
  };

  //creating a list item to add to the high scores list.
  var name = document.createElement("li");
  // name submited through input
  // var highName = scoreName.value;
  //storing names
  localStorage.setItem("user", JSON.stringify(user));
  //gets name from storage
  var postedName = JSON.parse(localStorage.getItem("user"));
  //gets score from game
  // var highscores = localStorage.getItem("count");

  //taking the name entered into the input field and assigning it to the list item.
  name.textContent = postedName.firstName + " " + postedName.score;

  //adding name to highscore list
  scores.append(name);
}

clear.addEventListener("click", clearNames)
returnBtn.addEventListener("click", replay);
nameBtn.addEventListener("click", scoreList);
