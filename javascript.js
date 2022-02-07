function computerPlay() {
  const hands = ['rock', 'paper', 'scissors'];
  return hands[Math.floor(Math.random()*hands.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let playerWin = false;
  let computerWin = false;
  let resultMessage = '';

  switch(playerSelection) {
    case 'rock':
      switch(computerSelection) {
        case 'rock':
          resultMessage = 'Tie! We both chose Rock';
          break;
        case 'paper':
          computerWin = true;
          resultMessage = 'You Lose! Paper beats Rock';
          break;
        case 'scissors':
          playerWin = true;
          resultMessage = 'You Win! Rock beats Scissors';
          break;
      }
      break;
    case 'paper':
      switch(computerSelection) {
        case 'rock':
          playerWin = true;
          resultMessage = 'You Win! Paper beats Rock';
          break;
        case 'paper':
          resultMessage = 'Tie! We both chose Paper';
          break;
        case 'scissors':
          computerWin = true;
          resultMessage = 'You Lose! Scissors beats Paper';
          break;
      }
      break;
    case 'scissors':
      switch(computerSelection) {
        case 'rock':
          computerWin = true;
          resultMessage = 'You Lose! Rock beats Scissors';
          break;
        case 'paper':
          playerWin = true;
          resultMessage = 'You Win! Scissors beats Paper';
          break;
        case 'scissors':
          resultMessage = 'Tie! We both chose Scissors';
          break;
      }
  }

  return [playerWin, computerWin, resultMessage];
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

alert("Ready to play Rock Paper Scissors? Choose a hand!");

let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';
let results = [];

rockBtn.addEventListener('click', () => {
  playerSelection = 'rock';
  computerSelection = computerPlay();
  results = playRound(playerSelection, computerSelection);

  if (results[0] == true) {
    playerScore += 1;
  } else if (results[1] == true) {
    computerScore += 1;
  }

  alert(results[2]);

  rounds += 1;

  if (rounds == 5) {
    if (playerScore > computerScore) {
      alert('Congrats! You won!');
    } else if (playerScore < computerScore) {
      alert('Oof! The computer won this time. Try again!');
    } else {
      alert('Tie game! That was close!');
    }
  }
});
paperBtn.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = computerPlay();
  results = playRound(playerSelection, computerSelection);

  if (results[0] == true) {
    playerScore += 1;
  } else if (results[1] == true) {
    computerScore += 1;
  }

  alert(results[2]);

  rounds += 1;

  if (rounds == 5) {
    if (playerScore > computerScore) {
      alert('Congrats! You won!');
    } else if (playerScore < computerScore) {
      alert('Oof! The computer won this time. Try again!');
    } else {
      alert('Tie game! That was close!');
    }
  }
});
scissorsBtn.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = computerPlay();
  results = playRound(playerSelection, computerSelection);

  if (results[0] == true) {
    playerScore += 1;
  } else if (results[1] == true) {
    computerScore += 1;
  }

  alert(results[2]);

  rounds += 1;

  if (rounds == 5) {
    if (playerScore > computerScore) {
      alert('Congrats! You won!');
    } else if (playerScore < computerScore) {
      alert('Oof! The computer won this time. Try again!');
    } else {
      alert('Tie game! That was close!');
    }
  }
});