var returnBtn = document.querySelector(".return");
var nameBtn = document.querySelector("#scoreSubmit");
var scoreName = document.querySelector("#scoreName");
var scores = document.querySelector(".scoreList ");
var clear = document.querySelector(".clear");

function list() {
  // //object to store name and score of user
  var user = {
    firstName: scoreName.value.trim(),
    score: localStorage.getItem("count"),
  };
  //creates list item for highscore list
  var name = document.createElement("li");

  //set variable to get info out of local storage
  var postedName = JSON.parse(localStorage.getItem("user"));
  //if statement stops the function if there hasn't been a user yet
  if (postedName === null) {
    return;
  }
  //giving content to list items
  name.textContent = postedName.firstName + " " + postedName.score;

  //adding name to highscore list
  scores.append(name);
}

function replay() {
  window.location.href = "index.html";
}

function clearNames() {
  localStorage.clear();
  scores.remove();
}

function scoreList() {
  //object to store name and score of user
  var user = {
    firstName: scoreName.value.trim(),
    score: localStorage.getItem("count"),
  };
  //creates list item for highscore list
  var name = document.createElement("li");
  //storing user object in local storage
  localStorage.setItem("user", JSON.stringify(user));

  //set variable to get info out of local storage
  var postedName = JSON.parse(localStorage.getItem("user"));

  //giving content to list items
  name.textContent = postedName.firstName + " " + postedName.score;

  //adding name to highscore list
  scores.append(name);
  scoreName.remove();
  nameBtn.remove();
}

list();
clear.addEventListener("click", clearNames);
returnBtn.addEventListener("click", replay);
nameBtn.addEventListener("click", scoreList);
