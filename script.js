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

// var button = document.createElement("button");

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

  buttonOne.addEventListener("click", takeTime);
  buttonTwo.addEventListener("click", takeTime);
  buttonThree.addEventListener("click", addPoint);
  buttonFour.addEventListener("click", takeTime);

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

    questionOne.textContent = "This is an example question; Choose 1";
  
    buttonOne.textContent = "Choice 1";
    buttonTwo.textContent = "Choice 2";
    buttonThree.textContent = "Choice 3";
    buttonFour.textContent = "Choice 4";
  
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
  
    buttonOne.addEventListener("click", addPoint);
    buttonTwo.addEventListener("click", takeTime);
    buttonThree.addEventListener("click", takeTime);
    buttonFour.addEventListener("click", takeTime);
  
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
function startThree(){
    console.log("starting 3");

    questionOne.textContent = "This is an example question; Choose 4";
  
    buttonOne.textContent = "Choice 1";
    buttonTwo.textContent = "Choice 2";
    buttonThree.textContent = "Choice 3";
    buttonFour.textContent = "Choice 4";
  
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
  
    buttonOne.addEventListener("click", takeTime);
    buttonTwo.addEventListener("click", takeTime);
    buttonThree.addEventListener("click", takeTime);
    buttonFour.addEventListener("click", addPoint);
  
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

    questionOne.textContent = "This is an example question; Choose 1";
  
    buttonOne.textContent = "Choice 1";
    buttonTwo.textContent = "Choice 2";
    buttonThree.textContent = "Choice 3";
    buttonFour.textContent = "Choice 4";
  
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
  
    buttonOne.addEventListener("click", addPoint);
    buttonTwo.addEventListener("click", takeTime);
    buttonThree.addEventListener("click", takeTime);
    buttonFour.addEventListener("click", takeTime);
  
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

    questionOne.textContent = "This is an example question; Choose 2";
  
    buttonOne.textContent = "Choice 1";
    buttonTwo.textContent = "Choice 2";
    buttonThree.textContent = "Choice 3";
    buttonFour.textContent = "Choice 4";
  
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
  
    buttonOne.addEventListener("click", takeTime);
    buttonTwo.addEventListener("click", addPoint);
    buttonThree.addEventListener("click", takeTime);
    buttonFour.addEventListener("click", takeTime);
  
    function addPoint() {
      score = score + 10;
      console.log(score);
      enterScore();
    }
  
    function takeTime() {
      secondsLeft = secondsLeft - 10;
      enterScore();
    }
}

function enterScore() {
  console.log("enterscore!");
  window.location.href = "high-scores.html";
}

startBtn.addEventListener("click", startDisappear);
