const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Function to get a random choice for the computer
function getRandomChoice() {
    return Math.floor(Math.random() * 3);
}

// Function to get the computer's choice
function getComputerChoice() {
    let choice = getRandomChoice();
    return options[choice];
}

// Function to play a round of the game
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie";
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore += 1;
            return "You lose! Paper beats Rock";
        } else {
            humanScore += 1;
            return "You win! Rock beats Scissors";
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore += 1;
            return "You lose! Scissors beats Paper";
        } else {
            humanScore += 1;
            return "You win! Paper beats Rock";
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore += 1;
            return "You lose! Rock beats Scissors";
        } else {
            humanScore += 1;
            return "You win! Scissors beats Paper";
        }
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        let hChoice = e.target.textContent;
        let compChoice = getComputerChoice();

        let result = playRound(hChoice, compChoice);

        document.getElementById("hChoice").textContent = hChoice;
        document.getElementById("cChoice").textContent = compChoice;
        document.getElementById("winner").textContent = result;
        document.getElementById("hScore").textContent = humanScore;
        document.getElementById("cScore").textContent = computerScore;


       

        // If the game ends at a certain score, you can reset or end here
        if (humanScore === 3 || computerScore === 3) {
            console.log("Game over!");
            humanScore = 0;
            computerScore = 0;
        }
    });
});