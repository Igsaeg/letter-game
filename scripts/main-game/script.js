// Elements
const scoreElement = document.getElementById("score");
const letterElement = document.getElementById("letters");
const feedbackElement = document.getElementById("feedback");

// Constants
const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

// Variables
let letterValue;
let userInput = "";
let score = 0;
let keyPressed = false;

// Functions
function initGame() {
  let letterRan = Math.floor(Math.random() * 26);
  letterValue = letters[letterRan];
  letterElement.innerHTML = `${letterValue}`.toUpperCase();
}

function checkInput() {
  if (userInput === letterValue) {
    score += 100;
    feedbackElement.innerHTML = `Correct!`
  } else {
    score -= 50
    feedbackElement.innerHTML = `Wrong, you pressed ${userInput.toUpperCase()}.`
  }
  scoreElement.innerHTML = `Score: ${score}`
  initGame();
}

// Event Listeners
addEventListener('keydown', function(event) {
  const letterRegex = /^[a-zA-Z]$/;
  if (!keyPressed && letterRegex.test(event.key)) {
    userInput = event.key.toLowerCase();
    keyPressed = true;
    checkInput();
  }
});

addEventListener('keyup', function(event) {
  keyPressed = false;
});

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderDiv").style.display = "block";
    initGame();
  }, 2000);
});