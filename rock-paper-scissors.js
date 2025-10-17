const rock = document.querySelector('#btnrock')
const paper = document.querySelector('#btnpaper')
const scissors = document.querySelector('#btnscissors')
const stats = document.querySelector('.stats')
const resultDiv = document.createElement('div')
const humanScoreDiv = document.createElement('div')
const computerScoreDiv = document.createElement('div')
const roundsPlayedDiv = document.createElement('div')
roundsPlayedDiv.style.fontSize = '42px'
const restart = document.createElement('button')
restart.className = 'button'
restart.style.display = 'none'
stats.appendChild(roundsPlayedDiv)
stats.appendChild(resultDiv)
stats.appendChild(humanScoreDiv)
stats.appendChild(computerScoreDiv)
stats.appendChild(restart)
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
function processResult(result, humanChoice, computerChoice){
    if(roundsPlayed === 6){
        roundsPlayed = 5
        restart.textContent = 'Play again!'
        restart.style.display = 'inline'
        resultDiv.style.fontSize = '36px'
        if(humanScore > computerScore){
            resultDiv.textContent = 'Victory!'
        }
        else{
            resultDiv.textContent = 'Defeat!'
        }
    }
    else {
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
    roundsPlayedDiv.textContent = `Round: ${roundsPlayed}`
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
    processResult('draw', humanChoice, computerChoice)
}

else if(
        humanChoice === 'rock' && computerChoice === 'scissors' 
        || humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
        )
{
    processResult('win', humanChoice, computerChoice)
    roundsPlayed++
}
else if(
        computerChoice === 'rock' && humanChoice === 'scissors' 
        || computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper'
        )
{
    processResult('loss', humanChoice, computerChoice)
    roundsPlayed++
}

}
getHumanChoice()
}
playGame() 