const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);

//Generate random Computer Hand
function computerPlay() {
    const computerHand = ["rock", "paper", "scissors"];
    let computerCurrentHand = computerHand[Math.floor(Math.random() * computerHand.length)];
    return (computerCurrentHand);
}

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    //Loops 5 times to simulate 5 rounds
    for (i = 1; i <= 5; i++) {
        console.log(`ROUND ${i}`);
        // let playerHand = window.prompt("Enter your Hand!!!");
        if (playerHand === 'rock' && computerSelection === 'paper') {
            computerScore++;
            window.alert("Computer Won!!!");
            console.log(`Player score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (playerHand === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            window.alert("Player Won!!!");
            console.log(`Player score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (playerHand === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            window.alert("Player Won!!!");
            console.log(`Player score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (playerHand === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            window.alert("Computer Won!!!");
            console.log(`Player score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (playerHand === 'paper' && computerSelection === 'rock') {
            playerScore++;
            window.alert("Player Won!!!");
            console.log(`Player score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (playerHand === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            window.alert("Computer Won!!!");
            console.log(`Player score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (playerHand === computerSelection) {
            window.alert("Its a Tie!");
            console.log(`Player score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        }
    }
    //Tallies Score
    (playerScore > computerScore) ?
        window.alert(`Player Won with ${playerScore} points! Congratulations`) :
        window.alert(`Computer Won with ${computerScore} points.! You Suck!`);
}
function game() {
    playRound();
}






