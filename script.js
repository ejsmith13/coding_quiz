var startQuiz = document.querySelector(".quiz");
var startBtn = document.querySelector("#start");
var scoreboard = document.querySelector(".scoreboard");

var timeLeft = document.querySelector(".timer");
var mainSection = document.querySelector(".main");
var questionOne = document.createElement("div");

var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");

var buttonFive = document.createElement("button");
var buttonSix = document.createElement("button");
var buttonSeven = document.createElement("button");
var buttonEight = document.createElement("button");

var button9 = document.createElement("button");
var button10 = document.createElement("button");
var button11 = document.createElement("button");
var button12 = document.createElement("button");

var button13 = document.createElement("button");
var button14 = document.createElement("button");
var button15 = document.createElement("button");
var button16 = document.createElement("button");

var button17 = document.createElement("button");
var button18 = document.createElement("button");
var button19 = document.createElement("button");
var button20 = document.createElement("button");

var answerOne = document.createElement("p");
var answerTwo = document.createElement("p");
var answerThree = document.createElement("p");
var answerFour = document.createElement("p");

var secondsLeft = 90;
var score = 0;

function startDisappear() {
  console.log("Starting Dissappear");
  startQuiz.setAttribute("style", "display: none");
  startTimer();
}

function startTimer() {
  console.log("starting Timer");

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || secondsLeft < 0) {
      clearInterval(timerInterval);
      enterScore();
    }
  }, 1000);

  startQ();
}

function startQ() {
  console.log("startingQuiz");

  questionOne.textContent = "Commonly used data types DO NOT include:";

  buttonOne.textContent = "A";
  buttonTwo.textContent = "B";
  buttonThree.textContent = "C";
  buttonFour.textContent = "D";

  answerOne.textContent = "Strings";
  answerTwo.textContent = "Booleans";
  answerThree.textContent = "Alerts";
  answerFour.textContent = "Numbers";

  mainSection.append(questionOne);

  mainSection.append(buttonOne);
  mainSection.append(answerOne);
  mainSection.append(buttonTwo);
  mainSection.append(answerTwo);
  mainSection.append(buttonThree);
  mainSection.append(answerThree);
  mainSection.append(buttonFour);
  mainSection.append(answerFour);

  buttonOne.addEventListener("click", takeTime);
  buttonTwo.addEventListener("click", takeTime);
  buttonThree.addEventListener("click", addPoint);
  buttonFour.addEventListener("click", takeTime);

  //shows score to user
  scoreboard.textContent = "Score: " + score;

  function addPoint() {
    score = score + 10;
    console.log(score);
    startTwo();
  }

  function takeTime() {
    secondsLeft = secondsLeft - 10;
    startTwo();
  }
}

function startTwo() {
  console.log("starting2");

  questionOne.textContent = "A boolean has how many possible values?";

  buttonOne.remove();
  buttonTwo.remove();
  buttonThree.remove();
  buttonFour.remove();

  buttonFive.textContent = "A";
  buttonSix.textContent = "B";
  buttonSeven.textContent = "C";
  buttonEight.textContent = "D";

  answerOne.textContent = "1";
  answerTwo.textContent = "2";
  answerThree.textContent = "10";
  answerFour.textContent = "infinate";

  mainSection.append(questionOne);

  mainSection.append(buttonFive);
  mainSection.append(answerOne);
  mainSection.append(buttonSix);
  mainSection.append(answerTwo);
  mainSection.append(buttonSeven);
  mainSection.append(answerThree);
  mainSection.append(buttonEight);
  mainSection.append(answerFour);

  buttonFive.addEventListener("click", takeTime);
  buttonSix.addEventListener("click", addPoint);
  buttonSeven.addEventListener("click", takeTime);
  buttonEight.addEventListener("click", takeTime);

  //shows score to user
  scoreboard.textContent = "Score: " + score;

  function addPoint() {
    score = score + 10;
    console.log(score);
    startThree();
  }

  function takeTime() {
    secondsLeft = secondsLeft - 10;
    startThree();
  }
}
function startThree() {
  console.log("starting 3");

  questionOne.textContent = "Which of the following is NOT truthy?";

  buttonFive.remove();
  buttonSix.remove();
  buttonSeven.remove();
  buttonEight.remove();

  button9.textContent = "A";
  button10.textContent = "B";
  button11.textContent = "C";
  button12.textContent = "D";

  answerOne.textContent = "42";
  answerTwo.textContent = "[]";
  answerThree.textContent = "true";
  answerFour.textContent = "null";

  mainSection.appendChild(questionOne);

  mainSection.appendChild(button9);
  mainSection.appendChild(answerOne);
  mainSection.appendChild(button10);
  mainSection.appendChild(answerTwo);
  mainSection.appendChild(button11);
  mainSection.appendChild(answerThree);
  mainSection.appendChild(button12);
  mainSection.appendChild(answerFour);

  button9.addEventListener("click", takeTime);
  button10.addEventListener("click", takeTime);
  button11.addEventListener("click", takeTime);
  button12.addEventListener("click", addPoint);

  //shows score to user
  scoreboard.textContent = "Score: " + score;

  function addPoint() {
    score = score + 10;
    console.log(score);
    startFour();
  }

  function takeTime() {
    secondsLeft = secondsLeft - 10;
    startFour();
  }
}
function startFour() {
  console.log("starting4");

  questionOne.textContent = "Which of the following is NOT a sematic HTML tag?";

  button9.remove();
  button10.remove();
  button11.remove();
  button12.remove();

  button13.textContent = "A";
  button14.textContent = "B";
  button15.textContent = "C";
  button16.textContent = "D";

  answerOne.textContent = "div";
  answerTwo.textContent = "aside";
  answerThree.textContent = "header";
  answerFour.textContent = "section";

  mainSection.appendChild(questionOne);

  mainSection.appendChild(button13);
  mainSection.appendChild(answerOne);
  mainSection.appendChild(button14);
  mainSection.appendChild(answerTwo);
  mainSection.appendChild(button15);
  mainSection.appendChild(answerThree);
  mainSection.appendChild(button16);
  mainSection.appendChild(answerFour);

  button13.addEventListener("click", addPoint);
  button14.addEventListener("click", takeTime);
  button15.addEventListener("click", takeTime);
  button16.addEventListener("click", takeTime);

  //shows score to user
  scoreboard.textContent = "Score: " + score;

  function addPoint() {
    score = score + 10;
    console.log(score);
    startFive();
  }

  function takeTime() {
    secondsLeft = secondsLeft - 10;
    startFive();
  }
}
function startFive() {
  console.log("starting5");

  questionOne.textContent = "Which of the following can be stored in an array?";

  button13.remove();
  button14.remove();
  button15.remove();
  button16.remove();

  button17.textContent = "A";
  button18.textContent = "B";
  button19.textContent = "C";
  button20.textContent = "D";

  answerOne.textContent = "numbers";
  answerTwo.textContent = "strings";
  answerThree.textContent = "booleans";
  answerFour.textContent = "All of the above";

  mainSection.appendChild(questionOne);

  mainSection.appendChild(button17);
  mainSection.appendChild(answerOne);
  mainSection.appendChild(button18);
  mainSection.appendChild(answerTwo);
  mainSection.appendChild(button19);
  mainSection.appendChild(answerThree);
  mainSection.appendChild(button20);
  mainSection.appendChild(answerFour);

  button17.addEventListener("click", takeTime);
  button18.addEventListener("click", takeTime);
  button19.addEventListener("click", takeTime);
  button20.addEventListener("click", addPoint);

  //shows score to user
  scoreboard.textContent = "Score: " + score;

  function addPoint() {
    score = score + 10;
    console.log(score);
    enterScore();
    return score;
  }

  function takeTime() {
    secondsLeft = secondsLeft - 10;
    enterScore();
    return score;
  }
}

function enterScore() {
  console.log("enterscore!");
  window.location.href = "high-scores.html";
}

startBtn.addEventListener("click", startDisappear);
