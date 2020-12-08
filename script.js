var startBtn = document.querySelector("#start")
var scores = document.querySelector(".scores")
var timeLeft = document.querySelector(".timer")


function startDisappear () {
    console.log("Starting Dissappear");
    startBtn.setAttribute("style", "display: none");
    startTimer();
}

function startTimer (){
    console.log("starting Timer");

    
    startQuiz ();
}

function startQuiz(){
    console.log("startingQuiz")

}


startBtn.addEventListener("click", startDisappear)