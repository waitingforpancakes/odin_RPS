let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors";
        } else {
            return "Tie condition not working.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            return "You lose! Scissors beats Paper";
        } else {
            return "Tie condition not working.";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "Tie condition not working.";
        }
    } else {
        return "Your Options Are: Rock, Paper, or Scissors";
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        if (!this.textContent) return;

        // Play a round
        const scoreContainer = document.querySelector("#score");
        const resultContainer = document.querySelector("#results");
        const result = playRound(this.textContent, computerPlay());

        // Update scores
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("tie")) {
            playerScore++;
            computerScore++;
        } else {
            computerScore++;
        }
        scoreContainer.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        resultContainer.textContent = result;

        // Announce Winner
        if (playerScore >= 5 && computerScore >= 5) {
            scoreContainer.textContent = "IT'S A TIE! CLICK A BUTTON TO PLAY AGAIN";
            resultContainer.textContent = "IT'S A TIE! CLICK A BUTTON TO PLAY AGAIN";
            playerScore = 0;
            computerScore = 0;
        } else if (playerScore >= 5){
            scoreContainer.textContent = "YOU WIN! CLICK A BUTTON TO PLAY AGAIN";
            resultContainer.textContent = "YOU WIN! CLICK A BUTTON TO PLAY AGAIN";
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore >= 5) {
            scoreContainer.textContent = "YOU LOSE! CLICK A BUTTON TO PLAY AGAIN"
            resultContainer.textContent = "YOU LOSE! CLICK A BUTTON TO PLAY AGAIN";
            playerScore = 0;
            computerScore = 0;
        } 
    });
});