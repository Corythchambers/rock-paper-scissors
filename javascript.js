const choices = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const guess = Math.random();
    if (guess < 0.33) {
        return choices[0];
    } else if (guess < 0.66) {
        return choices[1];
    } else {
        return choices[2];
    }
}

// Ask the human a question
// accept their input as a variable
// verify it is one of the choices
// if not ask for a new one

function getHumanChoice() {
    userInput = prompt("Enter 'rock', 'paper', or 'scissors':");
    return userInput;
}

// compare the two choices together
// log a message and return a score
// if the choices are the same its a tie, don't change the scores
// if human choice is rock 
// if computer is paper add to it's score and return message
// if computer is scissors add  to user score and return message
function findWinner(computerChoice, humanChoice) {

    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
        console.log(`The score is:\nHuman: ${humanScore} Computer ${computerScore}`)
    } else if (humanChoice == "rock") {
        if (computerChoice == 'paper') {
            computerScore += 1;
            console.log(`Computer wins!\n\nHuman: ${humanScore} Computer ${computerScore}`)
        } else {
            humanScore += 1;
            console.log(`You win!\n\nHuman: ${humanScore} Computer ${computerScore}`)        
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            computerScore += 1;
            console.log(`Computer wins!\n\nHuman: ${humanScore} Computer ${computerScore}`)
        } else {
            humanScore += 1;
            console.log(`You win!\n\nHuman: ${humanScore} Computer ${computerScore}`)
        }
    } else {
        if (computerChoice == 'rock') {
            computerScore += 1;
            console.log(`Computer wins!\n\nHuman: ${humanScore} Computer ${computerScore}`)
        } else {
            humanScore += 1;
            console.log(`You win!\n\nHuman: ${humanScore} Computer ${computerScore}`)
        }
    }

}

function playOneRound() {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    console.log(`The computer chose: ${computerChoice}`)
    findWinner(computerChoice, humanChoice)
}

let anotherRound = 'y'
while (anotherRound == 'y') {
    playOneRound()
    anotherRound = prompt("Want to play another round? y/n")
}

console.log("Alright, well that was kinda fun.")
if (computerScore >= humanScore) {
    console.log("Better luck next time.")
} else {
    console.log("Good job, you've won.")
}
