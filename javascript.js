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
          resultMessage = 'Tie! You both chose Rock';
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
          resultMessage = 'Tie! You both chose Paper';
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
          resultMessage = 'Tie! You both chose Scissors';
          break;
      }
  }

  return [playerWin, computerWin, resultMessage];
}

function resetGame() {
  rounds = 0;
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = `Player Score: ${playerScore}`;
  cScore.textContent = `Computer Score: ${computerScore}`;
  round.textContent = `Round: ${rounds}`;
  message.textContent = "";
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const pScore = document.querySelector('.playerScore h1');
const cScore = document.querySelector('.computerScore h1');
const message = document.querySelector('.results');
const round = document.querySelector('.rounds h1');

alert("Ready to play Rock Paper Scissors against an AI Superintelligence? Choose a hand!");

let rounds = 1;
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';
let results = [];

rockBtn.addEventListener('click', () => {
  playerSelection = 'rock';
  computerSelection = computerPlay();
  results = playRound(playerSelection, computerSelection);

  if (results[0]) {
    playerScore ++;
    pScore.textContent = `Player Score: ${playerScore}`;
  } else if (results[1]) {
    computerScore ++;
    cScore.textContent = `Computer Score: ${computerScore}`;
  }

  message.textContent = results[2];

  rounds ++;
  round.textContent = `Round: ${rounds}`;

  if (rounds == 6) {
    if (playerScore > computerScore) {
      alert('Congrats! You won!');
      resetGame();
    } else if (playerScore < computerScore) {
      alert('Oof! The computer won this time. Try again!');
      resetGame();
    } else {
      alert('Tie game! That was close!');
      resetGame();
    }
  }
});

paperBtn.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = computerPlay();
  results = playRound(playerSelection, computerSelection);

  if (results[0]) {
    playerScore ++;
    pScore.textContent = `Player Score: ${playerScore}`;
  } else if (results[1]) {
    computerScore ++;
    cScore.textContent = `Computer Score: ${computerScore}`;
  }

  message.textContent = results[2];

  rounds ++;
  round.textContent = `Round: ${rounds}`;

  if (rounds == 6) {
    if (playerScore > computerScore) {
      alert('Congrats! You won!');
      resetGame();
    } else if (playerScore < computerScore) {
      alert('Oof! The computer won this time. Try again!');
      resetGame();
    } else {
      alert('Tie game! That was close!');
      resetGame();
    }
  }
});

scissorsBtn.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = computerPlay();
  results = playRound(playerSelection, computerSelection);

  if (results[0]) {
    playerScore ++;
    pScore.textContent = `Player Score: ${playerScore}`;
  } else if (results[1]) {
    computerScore ++;
    cScore.textContent = `Computer Score: ${computerScore}`;
  }

  message.textContent = results[2];

  rounds ++;
  round.textContent = `Round: ${rounds}`;

  if (rounds == 6) {
    if (playerScore > computerScore) {
      alert('Congrats! You won!');
      resetGame();
    } else if (playerScore < computerScore) {
      alert('Oof! The computer won this time. Try again!');
      resetGame();
    } else {
      alert('Tie game! That was close!');
      resetGame();
    }
  }
});