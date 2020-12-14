var returnBtn = document.querySelector(".return");
var nameBtn = document.querySelector("#scoreSubmit");
var scoreName = document.querySelector("#scoreName");
var scores = document.querySelector(".scoreList ");

function replay() {
  window.location.href = "index.html";
}

function scoreList() {


  //creating a list item to add to the high scores list.
  var name = document.createElement("li");
  // name submited through input
  var highName = scoreName.value;
  //storing names
  localStorage.setItem("scorers", JSON.stringify(highName));
  //gets name from storage
  var postedName = JSON.parse(localStorage.getItem("scorers"));
  //gets score from game
  var highscores = localStorage.getItem("count");

  //taking the name entered into the input field and assigning it to the list item.
  name.textContent = postedName + " " + highscores;

  //adding name to highscore list
  scores.append(name);
}

returnBtn.addEventListener("click", replay);
nameBtn.addEventListener("click", scoreList);
