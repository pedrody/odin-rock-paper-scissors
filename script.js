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
        playerChoicePara.textContent = "?";
        computerChoicePara.textContent = "?";
        playerScorePara.textContent = `You: ${playerScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    }

    function gameOver() {
        roundResultPara.textContent = (playerScore == POINTS_TO_WIN) ? "You won the game! 🎉" : "You lost the game ❌";
        choiceBtns.forEach(btn => btn.style.display = "none");
        playAgainBtn.style.display = "inline";
    }

    function updateChoicesPara(playerChoice, computerChoice) {
        if (playerChoice == "rock") {
            playerChoicePara.textContent = "✊";
        } else if (playerChoice == "paper") {
            playerChoicePara.textContent = "🤚";
        } else {
            playerChoicePara.textContent = "✌️";
        }

        if (computerChoice == "rock") {
            computerChoicePara.textContent = "✊";
        } else if (computerChoice == "paper") {
            computerChoicePara.textContent = "🤚";
        } else {
            computerChoicePara.textContent = "✌️";
        }
    }
    
    let playerScore = 0;
    let computerScore = 0;
    const choiceBtns = document.querySelectorAll("#rock, #paper, #scissors");
    const playAgainBtn = document.querySelector("#play-again");
    let roundResultPara = document.querySelector("#round-result");
    let playerScorePara = document.querySelector("#player-score");
    let computerScorePara = document.querySelector("#computer-score");
    let playerChoicePara = document.querySelector("#player-choice");
    let computerChoicePara = document.querySelector("#computer-choice");
    const POINTS_TO_WIN = 5;

    roundResultPara.textContent = `The first to reach ${POINTS_TO_WIN} points wins!`;

    choiceBtns.forEach((btn) => btn.addEventListener("click", (e) => {
        let computerChoice = getComputerChoice();
        updateChoicesPara(e.target.id, computerChoice);
        playRound(e.target.id, computerChoice);

        playerScorePara.textContent = `You: ${playerScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;

        if (playerScore == POINTS_TO_WIN || computerScore == POINTS_TO_WIN) {
            gameOver();
        }
    }));

    playAgainBtn.addEventListener("click", resetGame);
}

playGame();
