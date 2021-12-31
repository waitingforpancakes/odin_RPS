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
            return "You lose! Scissors beats Rock";
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "Tie condition not working.";
        }
    } else {
        return "Your Options Are: Rock, Paper, or Scissors";
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        // Play round
        let playerSelection = prompt("Make you Move: ");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        // Display round result
        console.log(result);

        // Update scores
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("tie")) {
            playerScore++;
            computerScore++;
        } else {
            computerScore++;
        }
    }

    // Announce winner
    if (playerScore == computerScore) {
        console.log("It's a tie!");
    } else if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
}

game();