let playerScore = 0;
let computerScore = 0;


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

        if (playerChoice === "rock" && computerChoice === "scissors") {
            playerScore++;
            console.log("You win the round!")
            return;
         } else if (playerChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose the round!");
            return;
        } else if (playerChoice === "rock" && computerChoice === "rock") {
            console.log("It's a tie!")
            return;
         
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose the round!");
            return;
         } else if (playerChoice === "paper" && computerChoice === "paper") {
            console.log("It's a tie!");
            return;
         } else if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore++;
            console.log("You win the round!");
            return;
    
       
        } else if (playerChoice === "scissors" && computerChoice === "scissors") {
            return "It's a tie!";
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore++;
            console.log("You win the round!");
            return;
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose the round!");
            return;
   }
}

    function playGame() {
       
        for ( let i = 0; i < 5; i++) {
            
            let playerChoice = getPlayerChoice();
            let computerChoice = getComputerChoice();
            console.log("player: " + playerChoice);
            console.log("computer: " + computerChoice);
            playRound(playerChoice, computerChoice);
            console.log("Player score: " + playerScore)
            console.log("Computer score: " + computerScore)
            
        }
        if (playerScore > computerScore) {
            console.log("You win the game!")
        } else {
            console.log("You lose the game!")
        }
    }

    playGame();
    
