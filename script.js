var startQuiz = document.querySelector(".quiz")
var startBtn = document.querySelector("#start")
var scores = document.querySelector(".scores")
var timeLeft = document.querySelector(".timer")
var secondsLeft = 90;

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
    console.log("startingQuiz")

}

function enterScore() {
    console.log("enterscore!")

}


startBtn.addEventListener("click", startDisappear)