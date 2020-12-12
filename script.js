var startQuiz = document.querySelector(".quiz");
var startBtn = document.querySelector("#start");
var scores = document.querySelector(".scoreList ");
var timeLeft = document.querySelector(".timer");
var mainSection= document.querySelector(".main");
var questionOne = document.createElement("div");
var answersOne = document.createElement("button");
var answerTwo = document.createElement("button");
var answerThree = document.createElement("button");
var answerFour = document.createElement("button");

var secondsLeft = 90;

var button = document.createElement("button");

function startDisappear () {
    console.log("Starting Dissappear");
    startQuiz.setAttribute("style", "display: none");
    startTimer();
}

function startTimer (){
    console.log("starting Timer");

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          enterScore();
        }
    
      }, 1000);


    startQ ();
}

function startQ(){
    console.log("startingQuiz");

    questionOne.textContent = "This is an example question; Answer 3"
    
    mainSection.appendChild(questionOne);



}

function enterScore() {
    console.log("enterscore!");

}


startBtn.addEventListener("click", startDisappear)