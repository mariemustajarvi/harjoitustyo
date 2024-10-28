
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');


let playerScore = 0;
let computerScore = 0;


const choices = ['kivi', 'paperi', 'sakset'];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tasapeli!';
    }

    if (
        (playerChoice === 'kivi' && computerChoice === 'sakset') ||
        (playerChoice === 'paperi' && computerChoice === 'kivi') ||
        (playerChoice === 'sakset' && computerChoice === 'paperi')
    ) {
        playerScore++;
        return 'Voitit!';
    } else {
        computerScore++;
        return 'Hävisit!';
    }
}


function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = checkWinner(playerChoice, computerChoice);

    
    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;

  
    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
}


document.getElementById('kivi').addEventListener('click', () => playRound('kivi'));
document.getElementById('paperi').addEventListener('click', () => playRound('paperi'));
document.getElementById('sakset').addEventListener('click', () => playRound('sakset'));
