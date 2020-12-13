var returnBtn = document.querySelector(".return")
var scoreBtn = document.querySelector("#scoreSubmit")
var scoreName = document.querySelector("#scoreName")


function replay() {
    window.location.href = "text.html";
}
function scoreList () {
    var name = scoreName.value
    scores.append(name)
}
returnBtn.addEventListener("click", replay);
scoreBtn.addEventListener("click", scoreList);
