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

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (rounds = 1; rounds <=5; rounds++) {
		const playerSelection = prompt('Choose a hand: "rock", "paper", or "scissors"!');
		const computerSelection = computerPlay();
		const results = playRound(playerSelection, computerSelection);

		if (results[0] == true) {
			playerScore += 1;
		} else if (results[1] == true) {
			computerScore += 1;
		}

		console.log(results[2]);
	}

	if (playerScore > computerScore) {
		return 'Congrats! You won!';
	} else if (playerScore < computerScore) {
		return 'Oof! The computer won this time. Try again!';
	} else {
		return 'Tie game! That was close!';
	}
}