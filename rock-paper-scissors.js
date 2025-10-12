const rock = document.querySelector('#btnrock')
const paper = document.querySelector('#btnpaper')
const scissors = document.querySelector('#btnscissors')
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

function playGame(){
let humanScore = 0
let computerScore = 0
function processResult(result){
    if (result === 'draw'){
        console.log('Draw! No one wins. Play again')
    }
    else if (result === 'win'){
        humanScore++
        console.log('Win! You get one point')
    }
    else if (result === 'loss'){
        computerScore++
        console.log('Loss! Your opponent gets one point')
    }
            console.log(`Your score: ${humanScore}
Your opponent\'s score: ${computerScore}`)
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
}
else if(
        computerChoice === 'rock' && humanChoice === 'scissors' 
        || computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper'
        )
{
    processResult('loss')
}
}
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
getHumanChoice()
//for (let i = 0; i < 5; i++) {
    //let humanChoice = getHumanChoice();
    //let computerChoice = getComputerChoice();
    //playRound(humanChoice, computerChoice)
    //console.log(`Your score: ${humanScore}
////Your opponent\'s score: ${computerScore}`)
//}
}
playGame() 