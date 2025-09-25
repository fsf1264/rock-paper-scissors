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
function playRound(humanChoice, Computerchoice){

}
let humanScore = 0
let computerScore = 0
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
