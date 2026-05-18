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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors? ");

    return humanChoice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);