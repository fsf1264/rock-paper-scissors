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
    if(roundsPlayed < 5){
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
/*function restartGame(){
    resultDiv.style.fontSize = '24px'
    restart.style.display = 'none'
    roundsPlayedDiv.style.display = `none`
    resultDiv.style.display = 'none'
    humanScoreDiv.style.display = 'none'
    computerScoreDiv.style.display = 'none'
    roundsPlayed = 0
    humanScore = 0
    computerScore = 0
    getHumanChoice()

}*/
function processResult(result){
    if(roundsPlayed === 6){
        roundsPlayed = 5
        resultDiv.style.fontSize = '36px'
        if(humanScore > computerScore){
            resultDiv.textContent = 'Victory!'
        }
        else{
            resultDiv.textContent = 'Defeat!'
        }
        restart.textContent = 'Play again!'
        restart.style.display = 'inline'
        restart.addEventListener('click',() =>{
        restartGame()})
    }
    else {
    roundsPlayedDiv.style.display = `block`
    resultDiv.style.display = 'block'
    humanScoreDiv.style.display = 'block'
    computerScoreDiv.style.display = 'block'
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

}
getHumanChoice()
}
playGame() 