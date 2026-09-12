// const toGuess = Math.round(Math.random()*(max - min + 1)+ min
// to eliminate zero in randomness add by 1
let toGuess = Math.floor(Math.random() * (100 - 90 + 1) + 90);
console.log(toGuess);

const userInput = document.querySelector(".guessField");
const submit = document.querySelector(".guessSubmit");
const startOver = document.querySelector(".startOver");
const userGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let previousGuess = [];
let timesGuessed = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid Number. ${guess} is not a Number!`);
  } else if (guess > 100) {
    alert(`Please enter number less than 100. ${guess} is greater than 100`);
    console.log(previousGuess);
    console.log(timesGuessed);
  } else if (guess < 1) {
    alert(`Please enter number more than 1. ${guess} is less than 1`);
  } else {
    previousGuess.push(guess);
    if (timesGuessed === 11) {
      displayGuess(guess);
      displayMessage(`Game over ! Random Number was ${toGuess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === toGuess) {
    displayMessage(`You guessed it right. ${toGuess} is correct answer !!`);
    endGame();
  } else if (guess < toGuess) {
    displayMessage(`You guessed low`);
  } else if (guess > toGuess) {
    displayMessage(`You guessed high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  if (timesGuessed === 1) {
    userGuess.innerHTML += `${guess}`;
  } else {
    userGuess.innerHTML += `, ${guess}`;
  }
  timesGuessed++;
  remainingGuess.innerHTML = `${11 - timesGuessed}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id = "newGame">Do you want to play again (Y/N)?</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    toGuess = Math.floor(Math.random() * (100 - 90 + 1) + 90);
    previousGuess = [];
    timesGuessed = 1;
    remainingGuess.innerHTML = `${11 - timesGuessed}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
