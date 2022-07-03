const player = document.getElementById('player');
const computer = document.getElementById('computer');
const update = document.getElementById('round');
const playerNewHand = document.getElementById('player img');
const computerNewHand = document.getElementById('computer img');
const info = document.getElementById('info-result');
const infoGraphic = document.getElementById('info-graphic');
const round = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN',
    'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY'];
let count = 0;
let playerScore = 0;
let computerScore = 0;
//Initialize Player Hand
function playerHand() {
    const playerHand = document.querySelectorAll('button');
    playerHand.forEach(button => {
        button.addEventListener('click', function () {
            playRound(button.id)
        })
    })
}
playerHand();


//Reset Game
function restart() {
    playerNewHand.src = './icons/questionmark.png';
    computerNewHand.src = './icons/questionmark.png';
    computer.textContent = 'Computer : 0';
    player.textContent = 'Player : 0';
    playerScore = 0;
    computerScore = 0;
    update.style.visibility = 'hidden';
    count = 0;
    infoGraphic.style.visibility = 'hidden';
}

//Generate random Computer Hand
function computerPlay() {
    const computerHand = ["rock", "paper", "scissors"];
    let computerCurrentHand = computerHand[Math.floor(Math.random() * computerHand.length)];
    return (computerCurrentHand);
}

//Play a Round
function playRound(playerSelection) {
    info.style.visibility = 'hidden';
    let computerSelection = computerPlay();
    infoGraphic.style.visibility = 'visible';
    playerNewHand.src = `./icons/${playerSelection}.png`;
    computerNewHand.src = `./icons/${computerSelection}.png`;
    update.style.visibility = 'visible';
    if (playerScore !== 5 && computerScore !== 5) {
        if ((playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'scissors' && computerSelection === 'rock') ||
            (playerSelection === 'paper' && computerSelection === 'scissors')) {
            infoGraphic.style.visibility = 'visible';
            infoGraphic.src = './icons/right.png';
            update.textContent = `ROUND ${round[count]}!`;
            count += 1;
            computerScore += 1;
            computer.textContent = `Computer : ${computerScore}`;
            if (computerScore === 5) {
                if (window.confirm(`COMPUTER WON WITH ${computerScore} POINTS!\nDo you want to try again?`)) {
                    restart();
                }
            }
        }
        else if (playerSelection === computerSelection) {
            infoGraphic.style.visibility = 'hidden';
            update.textContent = `ROUND ${round[count]}!`;
            count += 1;

        }
        else {
            infoGraphic.style.visibility = 'visible';
            infoGraphic.src = './icons/left.png';
            update.textContent = `ROUND ${round[count]}!`;
            count += 1;
            playerScore += 1;
            player.textContent = `Player :${playerScore}`;
            if (playerScore === 5) {
                if (window.confirm(`PLAYER WON WITH ${playerScore} POINTS!\nDo you want to try again?`)) {
                    restart();
                }
            }
        }
    }
    else {
        window.alert('ITS A TIE');
    }
}