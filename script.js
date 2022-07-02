const playerSelection = playerPlay();
const computerSelection = computerPlay();



function playerPlay() {
   let handOne=document.getElementById('rock');
   let handTwo=document.getElementById('paper');
   let handThree=document.getElementById('scissors');

   if (handOne.onclick, ()=>{
   }){
    return 'rock';
   }else if (handTwo.onclick,()=>{

   }){
    return 'paper';  
   }else if (handThree.onclick,()=>{

    }){
    return 'scissors';  
    }
    else{


    }

}

//Generate random Computer Hand
function computerPlay() {
    const computerHand = ["rock", "paper", "scissors"];
    let computerCurrentHand = computerHand[Math.floor(Math.random() * computerHand.length)];
    return (computerCurrentHand);
}

//Play a Round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    
    const playerScore = 0;
    const computerScore = 0;
    let computer=document.getElementById('computer').textContent;
    let player=document.getElementById('player').textContent;
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            computer.textContent=`Computer : ${computerScore}`;



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


function game() {
    playRound();
}