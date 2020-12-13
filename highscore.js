var returnBtn = document.querySelector(".return")
var scoreBtn = document.querySelector("#scoreSubmit")
var scoreName = document.querySelector("#scoreName")
var scores = document.querySelector(".scoreList ");


function replay() {
    window.location.href = "text.html";
}

function scoreList() {
    //creating a list item to add to the high scores list.
    var name = document.createElement("li");
    //taking the name entered into the input field and assigning it to the list item.
    name.textContent = scoreName.value;
    //adding name to highscore list
    scores.append(name);
  }


returnBtn.addEventListener("click", replay);
scoreBtn.addEventListener("click", scoreList);
