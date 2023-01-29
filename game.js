// creating a function for computer random choice
function getComputerChoice() {
  const moves = ["Rock", "Paper", "Scissors"];
  const randomItem = moves[Math.floor(Math.random() * moves.length)];
  const result = randomItem.toLowerCase();
  return result;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return win;
    } else if (playerSelection === computerSelection) {
        tieScore++;
        return tie;
    } else if (playerSelection === "") {
        return "You must input rock, paper or scissors";
    } else {
        computerScore++;
        return lose;
    }
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const win = "You win this round!\n ------";
const lose = "You lose this round!\n ------";
const tie = "This round is a tie!\n ------";


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock, paper, scissors: ").toLowerCase(); 
        const computerSelection = getComputerChoice();
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));       
    }
    if (playerScore > computerScore) {
        return "You win this game.\n ------";
    } else if (playerScore === computerScore) {
        return "This game is a tie.\n ------";
    } else {
        return "You lose this game.\n ------";
    }
}

console.log(game());

console.log("Your final score is " + playerScore + " wins " + computerScore + " loses and " + tieScore + " draws.\n -------");

let score = playerScore + computerScore + tieScore; 

console.log("You played this game " + score + " times.\n -------\nGame over.");