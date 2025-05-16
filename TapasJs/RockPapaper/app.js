function rockPaper() {
  console.log('Gettin started with the rock, paper, scissors');

  const gamePrompt = prompt('Enter Rock, Paper, or Scissors');

  if (!gamePrompt) {
    console.log('Invalid input! Please enter Rock, Paper, or Scissors.');
    return;
  }

  let userChoice = gamePrompt.toLowerCase();

 

  let computerChoice;
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    computerChoice = 'rock';
  } else if (randomNum === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  console.log('User Selected:', userChoice);
  console.log('Computer Selected:', computerChoice);

  if (userChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    console.log('User wins!');
  } else {
    console.log('Computer wins!');
  }
}

rockPaper();
