function getComputerChoice() {
    let randNum = Math.random() * 9;

    if (randNum > 0 && randNum <= 3) {
        return "rock";
    } else if (randNum > 3 && randNum <= 6) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let winAnnouncement;

        if (humanChoice === "rock" && computerChoice === "paper") {
            winAnnouncement = "You lose! Paper beats Rock";
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            winAnnouncement = "You win! Rock beats Scissors";
            playerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            winAnnouncement = "You win! Paper beats Rock";
            playerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            winAnnouncement = "You lose! Scissors beats Paper";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            winAnnouncement = "You lose! Rock beats Scissors";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            winAnnouncement = "You win! Scissors beats Paper";
            playerScore++;
        } else {
            winAnnouncement = "Draw!";
        }

        console.log(winAnnouncement);
    }
    
    let playerScore = 0;
    let computerScore = 0;
    const choiceBtns = document.querySelectorAll("#rock, #paper, #scissors");

    choiceBtns.forEach((btn) => btn.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice());
        console.log(`Your score: ${playerScore}  | Computer score: ${computerScore}`);
    }));
}

playGame();
