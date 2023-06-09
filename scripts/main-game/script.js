// Elements
const scoreElement = document.getElementById("score");
const letterElement = document.getElementById("letters");
const feedbackElement = document.getElementById("feedback");
const mobileInputElement = document.getElementById("mobileInput");
const buttonElement = document.getElementById("button");

// Constants
const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];
const letterRegex = /^[a-zA-Z]$/;

// Variables
let letterValue;
let userInput = "";
let score = 0;
let keyPressed = false;
let mobileMode = false;
let displaySwitch = 0;

// Functions
function initGame() {
  let letterRan = Math.floor(Math.random() * 26);
  letterValue = letters[letterRan];
  letterElement.innerHTML = `${letterValue}`.toUpperCase();
}

function checkInput() {
  if (userInput === letterValue) {
    score += 100;
    feedbackElement.innerHTML = `Correct!`;
  } else {
    score -= 50;
    feedbackElement.innerHTML = `Wrong, you pressed ${userInput.toUpperCase()}.`;
  }
  userInput = "";
  score0Handler();
  scoreElement.innerHTML = `Score: ${score}`;
  initGame();
}

function score0Handler() {
  if (score <= 0) {
    score = 0;
  }
}

function toggleMobileMode() {
  if (displaySwitch === 0) {
    mobileInputElement.style.display = "block";
    displaySwitch = 1;
  } else {
    mobileInputElement.style.display = "none";
    displaySwitch = 0;
  }
  buttonElement.classList.toggle("active");
}

// Event Listiners
document.addEventListener('keydown', function (event) {
  if (!keyPressed && letterRegex.test(event.key)) {
    userInput = event.key.toLowerCase();
    keyPressed = true;
    checkInput();
  }
});
document.addEventListener('keyup', function (event) {
  keyPressed = false;
});

mobileInputElement.addEventListener('input', function (event) {
  if (!keyPressed && letterRegex.test(event.key)) {
    userInput = event.key.toLowerCase();
    checkInput();
  }
  mobileInputElement.value = "";
});

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderDiv").style.display = "block";
    initGame();
  }, 2000);
});