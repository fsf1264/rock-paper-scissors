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
function getHumanChoice(){
    let choice = prompt("Pick rock, paper or scissors")
    choice = choice.toLowerCase()
    return choice
}
function playRound(humanChoice, computerChoice){
if      (
        humanChoice === 'rock' && computerChoice === 'rock' 
        || humanChoice === 'paper' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'scissors'
        )
{
    console.log('Draw! No one wins.')
}

else if(
        humanChoice === 'rock' && computerChoice === 'scissors' 
        || humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
        )
{
    humanScore++
    console.log('Win! You get one point')
    console.log(humanScore)
}
else if(
        computerChoice === 'rock' && humanChoice === 'scissors' 
        || computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper'
        )
{
    computerScore++
    console.log('Loss! Your opponent gets one point')
    console.log(computerScore)
}
}
let humanScore = 0
let computerScore = 0
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)