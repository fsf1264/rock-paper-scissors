const rock = document.querySelector('#btnrock')
const paper = document.querySelector('#btnpaper')
const scissors = document.querySelector('#btnscissors')
const stats = document.querySelector('.stats')
const resultDiv = document.createElement('div')
const humanScoreDiv = document.createElement('div')
const computerScoreDiv = document.createElement('div')
const roundsPlayedDiv = document.createElement('div')
roundsPlayedDiv.style.fontSize = '42px'
stats.appendChild(roundsPlayedDiv)
stats.appendChild(resultDiv)
stats.appendChild(humanScoreDiv)
stats.appendChild(computerScoreDiv)
resultDiv.style.margin, 
humanScoreDiv.style.margin, 
computerScoreDiv.style.margin, 
roundsPlayedDiv.style.margin = '0 auto'  
function playGame(){
let roundsPlayed = 1
let humanScore = 0
let computerScore = 0
function getHumanChoice(){
    let humanChoice
    rock.addEventListener('click',() =>{
    humanChoice = 'rock'
    playRound(humanChoice, getComputerChoice())
    })
    paper.addEventListener('click',() =>{
    humanChoice = 'paper'
    playRound(humanChoice, getComputerChoice())
    })
    scissors.addEventListener('click',() =>{
    humanChoice = 'scissors'
    playRound(humanChoice, getComputerChoice())
    })  
}
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1)
    if (choice === 1){
        return "rock"
    }
    else if (choice === 2 ){
        return "paper"
    }
    else{
        return "scissors"
    }
}
function processResult(result){
    if(roundsPlayed > 5 ){
        roundsPlayedDiv.textContent = `Round: 5`
        resultDiv.style.fontSize = '42px'
        if(humanScore > computerScore){
            resultDiv.textContent = 'Victory!'
        }
        else{
            resultDiv.textContent = 'Defeat!'
        }
    }
    else {
    roundsPlayedDiv.textContent = `Round: ${roundsPlayed}`
    if (result === 'draw'){
        resultDiv.textContent = 'Draw! No one wins. Play again'
    }
    else if (result === 'win'){
        humanScore++
        resultDiv.textContent = 'Win! You get one point'
    }
    else if (result === 'loss'){
        computerScore++
        resultDiv.textContent = 'Loss! Your opponent gets one point'
    }
    }
    humanScoreDiv.textContent = `Your score: ${humanScore}`
    computerScoreDiv.textContent = `Your opponent\'s score: ${computerScore}`
}
function playRound(humanChoice, computerChoice){
if      (
        humanChoice === 'rock' && computerChoice === 'rock' 
        || humanChoice === 'paper' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'scissors'
        )
{
    processResult('draw')
}

else if(
        humanChoice === 'rock' && computerChoice === 'scissors' 
        || humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
        )
{
    processResult('win')
    roundsPlayed++   
}
else if(
        computerChoice === 'rock' && humanChoice === 'scissors' 
        || computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper'
        )
{
    processResult('loss')
    roundsPlayed++
}
if (roundsPlayed > 5){
        rock.removeEventListener('click',() =>{
        humanChoice = 'rock'
        playRound(humanChoice, getComputerChoice())
        })
        paper.removeEventListener('click',() =>{
        humanChoice = 'paper'
        playRound(humanChoice, getComputerChoice())
        })
        scissors.removeEventListener('click',() =>{
        humanChoice = 'scissors'
        playRound(humanChoice, getComputerChoice())
        })
        processResult()
    }
}
getHumanChoice()
}
playGame() 