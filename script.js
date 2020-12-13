var startQuiz = document.querySelector(".quiz");
var startBtn = document.querySelector("#start");

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

    questionOne.textContent = "A boolean has how many possible values?";
  
    buttonOne.textContent = "A";
    buttonTwo.textContent = "B";
    buttonThree.textContent = "C";
    buttonFour.textContent = "D";
  
    answerOne.textContent = "1";
    answerTwo.textContent = "2";
    answerThree.textContent = "10";
    answerFour.textContent = "infinate";
  
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
      startThree();
    }
  
    function takeTime() {
      secondsLeft = secondsLeft - 10;
      startThree();
    }
}
function startThree(){
    console.log("starting 3");

    questionOne.textContent = "Which of the following is NOT truthy?";
  
    buttonOne.textContent = "A";
    buttonTwo.textContent = "B";
    buttonThree.textContent = "C";
    buttonFour.textContent = "D";
  
    answerOne.textContent = "42";
    answerTwo.textContent = "[]";
    answerThree.textContent = "true";
    answerFour.textContent = "null";
  
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

    questionOne.textContent = "Which of the following is NOT a sematic HTML tag?";
  
    buttonOne.textContent = "A";
    buttonTwo.textContent = "B";
    buttonThree.textContent = "C";
    buttonFour.textContent = "D";
  
    answerOne.textContent = "div";
    answerTwo.textContent = "aside";
    answerThree.textContent = "header";
    answerFour.textContent = "section";
  
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

    questionOne.textContent = "Which of the following can be stored in an array?";
  
    buttonOne.textContent = "A";
    buttonTwo.textContent = "B";
    buttonThree.textContent = "C";
    buttonFour.textContent = "D";
  
    answerOne.textContent = "numbers";
    answerTwo.textContent = "strings";
    answerThree.textContent = "booleans";
    answerFour.textContent = "All of the above";
  
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

