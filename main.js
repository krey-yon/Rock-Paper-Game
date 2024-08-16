const userChoice = document.querySelectorAll('.selection');
const choice = document.querySelector('#choices');

function computerChoice() {
  let randomNum = Math.random();
  if (randomNum < 0.34) {
    return 'rock';
  } else if (randomNum <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

userChoice.forEach((button) => {
  button.addEventListener('click', (e) => {
    let userChoice = e.target.id;
    let aichoice = computerChoice(); // AI makes a new choice each time
    // choice.innerHTML = `User choice: ${userChoice} and AI choice: ${aichoice}`;
    if(userChoice == "rock"){
      if(aichoice == "rock"){
        choice.innerHTML = "It is a tie!";
      } else if(aichoice == "paper"){
        choice.innerHTML = "AI wins!";
      } else {
        choice.innerHTML = "User wins!";
      }
    }
    if(userChoice == "paper"){
      if(aichoice == "rock"){
        choice.innerHTML = "User wins!";
      } else if(aichoice == "paper"){
        choice.innerHTML = "It is a tie!";
      } else {
        choice.innerHTML = "AI wins!";
      }
    }
    if(userChoice == "scissor"){
      if(aichoice == "rock"){
        choice.innerHTML = "AI wins!";
      } else if(aichoice == "paper"){
        choice.innerHTML = "User wins!";
      } else {
        choice.innerHTML = "It is a tie!";
      }
    }
  });
});

