/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let guess = '';
let pearl = '';
let userChoice = '';

let wins = 0;
let losses = 0;
let total = 0;

/* Actions */
function loadPage() {
    displayShells();
}

/* Components */
const pearlArray = ['pearl-1', 'pearl-2', 'pearl-3'];
/* Component */

let pearls = getRandomItem(pearlArray);
// get DOM

//guess
const guessLeft = document.getElementById('guess-1');
const guessMiddle = document.getElementById('guess-2');
const guessRight = document.getElementById('guess-3');
const guessDiv = document.getElementById('guesses');

//pearls
const leftPearl = document.getElementById('pearl-1');
const middlePearl = document.getElementById('pearl-2');
const rightPearl = document.getElementById('pearl-3');

//shells
const leftShell = document.getElementById('shell-1');
const middleShell = document.getElementById('shell-2');
const rightShell = document.getElementById('shell-3');

// const loseDisplay = document.getElementById('display-1');
// const nonDisplay = document.getElementById('display-2');
// const winDisplay = document.getElementById('display-3');

//results
const resultsDiv = document.getElementById('results');
const playAgain = document.getElementById('play-again-button');

// display
function displayShells() {
    leftPearl.classList.remove('hidden');
    middlePearl.classList.remove('hidden');
    rightPearl.classList.remove('hidden');
    leftShell.classList.remove('reveal');
    resultsDiv.classList.add('hidden');
    playAgain.classList.add('hidden');
}

function pearlLocation() {
    if (gameState === 'results') {
        if (pearls === 'pearl-1') {
            leftShell.classList.add('reveal');
            leftPearl.classList.remove('hidden');
        } else if (pearls === 'pearl-2') {
            middleShell.classList.add('reveal');
            middlePearl.classList.remove('hidden');
        } else if (pearls === 'pearl-3') {
            rightShell.classList.add('reveal');
            rightPearl.classList.remove('hidden');
        }
    }
}

function guessShell(userChoice) {
    gameState = 'results';
    guess = userChoice;
    pearls;
    guessDisplay();
    pearlLocation();
}

function guessDisplay() {
    if (gameState === 'results') {
        if (userChoice === 'guess-1') {
            leftShell.classList.add('reveal');
        } else if (userChoice === 'guess-2') {
            middleShell.classList.add('reveal');
        } else if (userChoice === 'guess-3') {
            rightShell.classList.add('reveal');
        }
    }
}

//     if (gameState === 'guess') {
//         leftShell.classList.remove('reveal');
//         middleShell.classList.remove('reveal');
//         rightShell.classList.remove('reveal');
//         playAgain.classList.add('hidden');
//         resultsDiv.classList.add('hidden');
//     } else {
//         if (guess === 'guess-1') {
//             leftShell.classList.add('reveal');
//             leftPearl.classList.remove('hidden');
//         }
//         if (guess === 'guess-2') {
//             middleShell.classList.add('reveal');
//             middlePearl.classList.remove('hidden');
//         }
//         if (guess === 'guess-3') {
//             rightShell.classList.add('reveal');
//             rightPearl.classList.remove('hidden');
//         } else {
//             guessDiv.classList.add('hidden');
//         }
//     }
// }

// function guessShell() {
//     gameState = 'results';
//     guess = userGuess;
//     pearl = getRandomItem(pearlArray);
//     total++;

//     if (guess === pearl) {
//         result = 'win';
//         wins++;
//     } else {
//         result = 'lose';
//     }
// }

// event listeners
guessLeft.addEventListener('click', () => {
    guessShell(userChoice);
    // userGuess = 'guess-1';
    // guessShell(userGuess);
    // gameState = 'results';
});

guessMiddle.addEventListener('click', () => {
    guessShell(userChoice);
    // userGuess = 'guess-2';
    // displayShells(middleShell);
    // gameState = 'results';
});

guessRight.addEventListener('click', () => {
    guessShell(userChoice);
    // userGuess = 'guess-3';
    // displayShells(rightShell);
    // gameState = 'results';
});

/* Run page load code */
loadPage();
pearlLocation();
