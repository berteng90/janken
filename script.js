const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);

function playerPlay() {
    let selectHand = document.querySelectorAll('#selection li');
    selectHand.addEventListener('click', (e) => {
        let playerHand = selectHand.id;
        return (playerHand);

    })

}

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

        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;

        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;

        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;

        } else if (playerSelection === computerSelection) {

        } else {
            //Tallies Score
            // (playerScore > computerScore) ?
            //     window.alert(`Player Won with ${playerScore} points! Congratulations`) :
            //     window.alert(`Computer Won with ${computerScore} points.! You Suck!`);
        }

    }
}


function game() {
    playRound();
}