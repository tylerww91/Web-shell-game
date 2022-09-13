/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
// let userGuess = '';
// let pearl = '';
let guess = '';

/* Actions */
function loadPage() {
    displayShells();
}

/* Components */
const pearlArray = ['pearl-1', 'pearl-2', 'pearl-3'];
/* Component */

let pearls = getRandomItem(pearlArray);

// get DOM

const guessLeft = document.getElementById('guess-1');
const guessMiddle = document.getElementById('guess-2');
const guessRight = document.getElementById('guess-3');
const guessDiv = document.getElementById('guesses');

const leftPearl = document.getElementById('pearl-1');
const middlePearl = document.getElementById('pearl-2');
const rightPearl = document.getElementById('pearl-3');

const leftShell = document.getElementById('shell-1');
const middleShell = document.getElementById('shell-2');
const rightShell = document.getElementById('shell-3');

// const loseDisplay = document.getElementById('display-1');
// const nonDisplay = document.getElementById('display-2');
// const winDisplay = document.getElementById('display-3');

const resultsDiv = document.getElementById('results');
const playAgain = document.getElementById('play-again-button');

// display
function displayShells() {
    // guessLeft.classList.remove('win', 'lose', 'reveal');
    // guessMiddle.classList.remove('win', 'lose', 'reveal');
    // guessRight.classList.remove('win', 'lose', 'reveal');

    if (gameState === 'guess') {
        leftShell.classList.remove('reveal');
        middleShell.classList.remove('reveal');
        rightShell.classList.remove('reveal');
        playAgain.classList.add('hidden');
        resultsDiv.classList.add('hidden');
    } else {
        if (guess === 'guess-1') {
            leftShell.classList.add('reveal');
            leftPearl.classList.remove('hidden');
        }
        if (guess === 'guess-2') {
            middleShell.classList.add('reveal');
            middlePearl.classList.remove('hidden');
        }
        if (guess === 'guess-3') {
            rightShell.classList.add('reveal');
            rightPearl.classList.remove('hidden');
        } else {
            guessDiv.classList.add('hidden');
        }
    }
}
// event listeners
guessLeft.addEventListener('click', () => {
    guess = 'guess-1';
    displayShells(leftShell);
    pearls;
    gameState = 'results';
});

guessMiddle.addEventListener('click', () => {
    guess = 'guess-2';
    displayShells(middleShell);
    pearls;
    gameState = 'results';
});

guessRight.addEventListener('click', () => {
    guess = 'guess-3';
    displayShells(rightShell);
    pearls;
    gameState = 'results';
});

/* Run page load code */
loadPage();
