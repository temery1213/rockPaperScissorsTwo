let playerScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

    function getComputerChoice() {
    let randomNumber = (Math.random() * 100);
    if (randomNumber <= 33) {
        return "rock"
    } else if (randomNumber <=66) {
        return "paper"
    } else {
        return "scissors"
    }
}

    function getPlayerChoice() {
        let choice = prompt("Choose wisely...")
        return choice.toLowerCase();
    }

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === rock && computerChoice === paper)
            playerScore++;
            return "You win the round!"
    }



console.log("player: " + playerChoice);
console.log("computer: " + computerChoice);
