/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');


/*----- app's state (variables) -----*/
// playerScore, tieScore, computerScore
let playerScore
let tieScore
let computerScore

//will we need a variable to track the current result (TBD)

/*----- cached element references -----*/

const pScoreEl = document.querySelector("#p-score")
const tScoreEl = document.querySelector("#t-score")
const cScoreEl = document.querySelector("#c-score")

const btnEls = document.querySelectorAll("button")

/*----- event listeners -----*/

function handleClick(evt){
    //console.log(evt.target.textContent)
    const playerChoice = evt.target.textContent
    const computerChoice = getComputerChoice()
    console.log(playerChoice, computerChoice)
}

btnEls.forEach(function(btn){
    //console.log(btn)
    btn.addEventListener("click", handleClick)


})


/*----- functions -----*/

function init(){
    console.log("starting the game")
    //set the data
    playerScore = 0
    tieScore = 0
    computerScore = 0

    render()
}

function render (){
    console.log("rendering the game")


    renderScores()

}

function renderScores(){
    console.log("rendering the scores")
    pScoreEl.textContent = playerScore
    tScoreEl.textContent = tieScore
    cScoreEl.textContent = computerScore
    renderResults()
}

function renderResults(){
    console.log("rendering the results")
    //update cached dom elements 


}

function getComputerChoice() {
    const options = ["R", "P", "S"]
    const randomPos = Math.floor(Math.random()*options.length)
    return options[randomPos]
}

init()