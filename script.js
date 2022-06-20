const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);



function computerPlay() {
    const computerHand = ["rock", "paper", "scissors"];
    let computerCurrentHand = computerHand[Math.floor(Math.random() * computerHand.length)];
    return (computerCurrentHand);

}

function playRound(playerSelection, computerSelection) {
    for (i = 1; i <= 5; i++) {
        console.log(computerSelection);
        let playerScore = 0;
        let computerScore = 0;
        let playerHand = window.prompt("Enter your Hand!!!");
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        computerPlay();
        switch (playerHand) {
            case playerHand === 'rock' && computerSelection === 'paper':
                computerScore++;
                windows.prompt("Computer Won!!!");
                break;
            case playerHand === 'rock' && computerSelection === 'scissors':
                playerScore++;
                windows.prompt("Player Won!!!");
                break;
            case playerHand === 'scissors' && computerSelection === 'paper':
                playerScore++;
                windows.prompt("Player Won!!!");
                break;
            case playerHand === 'scissors' && computerSelection === 'rock':
                computerScore++;
                windows.prompt("Computer Won!!!");
                break;
            case playerHand === 'paper' && computerSelection === 'rock':
                playerScore++;
                windows.prompt("Player Won!!!");
                break;
            case playerHand === 'paper' && computerSelection === 'scissors':
                computerScore++;
                windows.prompt("Computer Won!!!");
                break;
            case playerHand === computerSelection:
                windows.prompt("Its a Tie!");
        }

    }
    (playerScore > computerScore) ?
        windows.prompt("Player Won! Congratulations") :
        windows.prompt("Computer Won! You Suck!");

}

function game() {
    playRound();
}