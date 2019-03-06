let guessBox = document.getElementById('guessBox');
let guessBtn = document.getElementById('guessBtn');

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = getRandomNumber();


function doGuess() {
  let guessedValue = guessBox.value;
  console.log('You guessed: ' + guessedValue);
  if(guessedValue < randomNumber) {
    console.log('TOO LOW');
  }
  if(guessedValue > randomNumber) {
    console.log('TOO HIGH');
  }
  if(guessedValue == randomNumber) {
    console.log('Woo hoo! You win.');
  }

  guessBox.value = ""; // Clear the input box after a guess.
}


guessBtn.addEventListener('click', doGuess);