/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');

const results = {
    "R": "./img/rock.png",
    "P": "./img/paper.png",
    "S": "./img/scissors.png",
}
/*----- app's state (variables) -----*/
// playerScore, tieScore, computerScore
let playerScore
let tieScore
let computerScore

let playerResult
let computerResult

let winner = null

//will we need a variable to track the current result (TBD)

/*----- cached element references -----*/

const pScoreEl = document.querySelector("#p-score")
const tScoreEl = document.querySelector("#t-score")
const cScoreEl = document.querySelector("#c-score")

const btnEls = document.querySelectorAll("button")

const pResultEl = document.querySelector("#p-result")
const cResultEl = document.querySelector("#c-result")

/*----- event listeners -----*/

function handleClick(evt) {
    //console.log(evt.target.textContent)
    const playerChoice = evt.target.textContent
    const computerChoice = getComputerChoice()
    checkWinner(playerChoice, computerChoice)
    playerResult = results[playerChoice]
    computerResult = results[computerChoice]
    render()
}

btnEls.forEach(function (btn) {
    //console.log(btn)
    btn.addEventListener("click", handleClick)
})

/*----- functions -----*/

function init() {
    playerScore = 0
    tieScore = 0
    computerScore = 0

    playerResult = './img/rock.png'
    computerResult = './img/rock.png'
    render()
}

function render() {
    renderScores()
    renderResults
}

function renderScores() {
    pScoreEl.textContent = playerScore
    tScoreEl.textContent = tieScore
    cScoreEl.textContent = computerScore
    renderResults()
}

function renderResults() {
    pResultEl.setAttribute("src", playerResult)
    cResultEl.setAttribute("src", computerResult)
    //update cached dom elements 
    if (winner == "tie"){
        pResultEl.style.borderColor = "yellow"
        cResultEl.style.borderColor = "yellow"
    } else if (winner == "player"){
        pResultEl.style.borderColor = "green"
        cResultEl.style.borderColor = "red"
    } else if (winner == "computer") {
        pResultEl.style.borderColor = "red"
        cResultEl.style.borderColor = "green"
}}

function getComputerChoice() {
    const options = ["R", "P", "S"]
    const randomPos = Math.floor(Math.random() * options.length)
    return options[randomPos]
}

function checkWinner(p1, p2) {
    console.log("Check Winner", p1, p2)
    if (p1 === p2) {
        winner = "tie"
        tieScore++
    } else if (p1 === "R" && p2 === "S") {
        winner = "player"
        playerScore++
    } else if (p1 === "P" && p2 === "R") {
        winner = "player"
        playerScore++
    } else if (p1 === "S" && p2 === "P") {
        winner = "player"
        playerScore++
    } else {
        winner = "computer"
        computerScore++
    }
    console.log(winner)
}

init()