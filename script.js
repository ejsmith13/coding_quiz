var startQuiz = document.querySelector(".quiz");
var startBtn = document.querySelector("#start");
var scores = document.querySelector(".scoreList ");
var timeLeft = document.querySelector(".timer");
var mainSection = document.querySelector(".main");
var questionOne = document.createElement("div");
var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");
var answerOne = document.createElement("p");
var answerTwo = document.createElement("p");
var answerThree = document.createElement("p");
var answerFour = document.createElement("p");

var secondsLeft = 90;
var score = 0;

var button = document.createElement("button");

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

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      enterScore();
    }
  }, 1000);

  startQ();
}

function startQ() {
  console.log("startingQuiz");

  questionOne.textContent = "This is an example question; button 3";

  buttonOne.textContent = "Answer 1";
  buttonTwo.textContent = "Answer 2";
  buttonThree.textContent = "Answer 3";
  buttonFour.textContent = "Answer 4";

  answerOne.textContent = "example";
  answerTwo.textContent = "example";
  answerThree.textContent = "example";
  answerFour.textContent = "example";


  mainSection.appendChild(questionOne);

  mainSection.appendChild(buttonOne);
  mainSection.appendChild(answerOne);
  mainSection.appendChild(buttonTwo);
  mainSection.appendChild(answerTwo);
  mainSection.appendChild(buttonThree);
  mainSection.appendChild(answerThree);
  mainSection.appendChild(buttonFour);
  mainSection.appendChild(answerFour);

  buttonOne.addEventListener("click", takeTime)
  buttonTwo.addEventListener("click", takeTime)
  buttonThree.addEventListener("click", addPoint)
  buttonFour.addEventListener("click", takeTime)
}

function addPoint () {
    score = score + 10;
    console.log(score);
}

function takeTime() {
    secondsLeft = secondsLeft - 10;
}



function enterScore() {
  console.log("enterscore!");
}

startBtn.addEventListener("click", startDisappear);
