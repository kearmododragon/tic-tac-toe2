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
    // p1 = playerChoice
    // p2 = computerChoice
    // console.log(playerChoice, computerChoice)
    checkWinner(playerChoice, computerChoice)
    render()
}



btnEls.forEach(function(btn){
    //console.log(btn)
    btn.addEventListener("click", handleClick)
})


/*----- functions -----*/

function init(){
    playerScore = 0
    tieScore = 0
    computerScore = 0
    render()
}

function render (){
    renderScores()
}

function renderScores(){
    pScoreEl.textContent = playerScore
    tScoreEl.textContent = tieScore
    cScoreEl.textContent = computerScore
    renderResults()
}

function renderResults(){
    //update cached dom elements 
}

function getComputerChoice() {
    const options = ["R", "P", "S"]
    const randomPos = Math.floor(Math.random()*options.length)
    return options[randomPos]
}



function checkWinner(p1, p2){
    console.log("Check Winner", p1, p2)
    if(p1===p2){
        console.log("TIE")
        tieScore ++
    } else if (p1=== "R" && p2==="S"){
        console.log("Player wins!")
        playerScore ++
    }else if (p1=== "P" && p2==="R"){
        console.log("Player wins!")
        playerScore ++
}else if (p1=== "S" && p2==="P"){
    console.log("Player wins!")
    playerScore ++
} else {
    console.log("Computer wins!")
    computerScore ++
    
}}

init()