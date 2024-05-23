const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playRound("rock");
    console.log("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    console.log("paper");
    playRound("paper");

});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
    console.log("scissors");
});

const score = document.querySelector('#score');
const results = document.querySelector("#results");


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

function findWinner(computerChoice, humanChoice) {

    if (humanChoice == computerChoice) {
        results.textContent = 'It\'s a tie!';
    } else if (humanChoice == "rock") {
        if (computerChoice == 'paper') {
            computerScore += 1;
            results.textContent = 'Computer wins!';
        } else {
            humanScore += 1;
            results.textContent = 'You win!';     
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            computerScore += 1;
            results.textContent = `Computer wins!`;
        } else {
            humanScore += 1;
            results.textContent = 'You win!';
        }
    } else {
        if (computerChoice == 'rock') {
            computerScore += 1;
            results.textContent = `Computer wins!`
        } else {
            humanScore += 1;
            results.textContent = `You win!`;
        }
    }
    score.textContent = `Human: ${humanScore} Computer ${computerScore}`;

}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice()
    console.log(`The computer chose: ${computerChoice}`)
    findWinner(computerChoice, humanChoice)
    if (computerScore >= 5) {
        results.textContent = "The computer wins! Better luck next time.";
        resetScore();
    } else if (humanScore >= 5) {
        results.textContent = "Good job, you've won!";
        resetScore();
    }
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    score.textContent = `Human: ${humanScore} Computer ${computerScore}`;
}



