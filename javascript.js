let playerScore = 0;
let computerScore = 0;

let selections = document.querySelector('#roundSelections');

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let btn = document.querySelectorAll('button');


let resetButton = document.querySelector('#reset');

for (const button of btn) {
   
    if (button !== resetButton) {
        button.addEventListener('click', function () {
            let playerChoice = button.textContent.toLowerCase();
            document.querySelector('#playerChoice').textContent = `You chose ${playerChoice}`;

            let computerChoice = getComputerChoice();
            document.querySelector('#computerChoice').textContent = `Computer chose ${computerChoice}`;

            playRound(playerChoice, computerChoice, btn); 
        });
    }
}


function playRound(playerChoice, computerChoice, btn) {
   
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {

        playerScore++;
        document.querySelector('#roundResult').textContent = 'You win the round!';
    } else if (playerChoice === computerChoice) {
        document.querySelector('#roundResult').textContent = 'It’s a tie!';
    } else {
        computerScore++;
        document.querySelector('#roundResult').textContent = 'You lose the round!';
    }

   
    if (playerScore === 5 || computerScore === 5) {
        const finalMessage = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
        document.querySelector('#roundResult').textContent = finalMessage;

        
        btn.forEach(button => {
            if (button !== resetButton) {
                button.disabled = true;
            }
        });
    }

   
    document.querySelector('#playerScoreDisplay').textContent = `Player Score: ${playerScore}`;
    document.querySelector('#computerScoreDisplay').textContent = `Computer Score: ${computerScore}`;
}


resetButton.addEventListener('click', resetGame);

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    
    document.querySelector('#roundResult').textContent = '';
    document.querySelector('#playerChoice').textContent = '';
    document.querySelector('#computerChoice').textContent = '';

   
    document.querySelector('#playerScoreDisplay').textContent = `Player Score: ${playerScore}`;
    document.querySelector('#computerScoreDisplay').textContent = `Computer Score: ${computerScore}`;

    
    btn.forEach(button => {
        if (button !== resetButton) { 
            button.disabled = false;
        }
    });
}