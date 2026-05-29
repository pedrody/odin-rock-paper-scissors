function getComputerChoice() {    
    const CHOICES = ["rock", "paper", "scissors"];

    return CHOICES[Math.floor(Math.random() * 3)];
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let roundResult;

        if (humanChoice === "rock" && computerChoice === "paper") {
            roundResult = "You lose! Paper beats Rock";
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            roundResult = "You win! Rock beats Scissors";
            playerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            roundResult = "You win! Paper beats Rock";
            playerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            roundResult = "You lose! Scissors beats Paper";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            roundResult = "You lose! Rock beats Scissors";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            roundResult = "You win! Scissors beats Paper";
            playerScore++;
        } else {
            roundResult = "Draw!";
        }

        roundResultPara.textContent = roundResult;
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;

        playAgainBtn.style.display = "none";
        choiceBtns.forEach(btn => btn.style.display = "inline");
        roundResultPara.textContent = `The first to reach ${POINTS_TO_WIN} points wins!`;
        scorePara.textContent = `Your score: ${playerScore}  | Computer score: ${computerScore}`;
    }

    function gameOver() {
        scorePara.textContent = (playerScore == POINTS_TO_WIN) ? "You won the game! 🎉" : "You lost the game ❌";
        choiceBtns.forEach(btn => btn.style.display = "none");
        playAgainBtn.style.display = "inline";
    }
    
    let playerScore = 0;
    let computerScore = 0;
    const choiceBtns = document.querySelectorAll("#rock, #paper, #scissors");
    const playAgainBtn = document.querySelector("#play-again");
    let roundResultPara = document.querySelector("#round-result");
    let scorePara = document.querySelector("#score");
    const POINTS_TO_WIN = 5;

    roundResultPara.textContent = `The first to reach ${POINTS_TO_WIN} points wins!`;

    choiceBtns.forEach((btn) => btn.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice());

        if (playerScore == POINTS_TO_WIN || computerScore == POINTS_TO_WIN) {
            gameOver();
            
        } else {
            scorePara.textContent = `Your score: ${playerScore}  | Computer score: ${computerScore}`;
        }
    }));

    playAgainBtn.addEventListener("click", resetGame);
}

playGame();
