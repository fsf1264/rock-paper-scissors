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
function playGame(){
let humanScore = 0
let computerScore = 0
function playRound(humanChoice, computerChoice){
if      (
        humanChoice === 'rock' && computerChoice === 'rock' 
        || humanChoice === 'paper' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'scissors'
        )
{
    console.log('Draw! No one wins. Play again')
    console.log(`Your score: ${humanScore}
Your opponent\'s score: ${computerScore}`)
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
}

else if(
        humanChoice === 'rock' && computerChoice === 'scissors' 
        || humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
        )
{
    humanScore++
    console.log('Win! You get one point')
}
else if(
        computerChoice === 'rock' && humanChoice === 'scissors' 
        || computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper'
        )
{
    computerScore++
    console.log('Loss! Your opponent gets one point')
}
}
//for (let i = 0; i < 5; i++) {
    //let humanChoice = getHumanChoice();
    //let computerChoice = getComputerChoice();
    //playRound(humanChoice, computerChoice)
    //console.log(`Your score: ${humanScore}
////Your opponent\'s score: ${computerScore}`)
//}
}
playGame() 