/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let userChoice = '';

let result = '';
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

//scoreboard
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

//results
const rightDisplay = document.getElementById('display-3');
const leftDisplay = document.getElementById('display-1');
const middleDisplay = document.getElementById('display-2');
const resultsDiv = document.getElementById('results');
const playAgain = document.getElementById('play-again-button');

// display
function displayShells() {
    if (gameState === 'guess') {
        leftShell.classList.remove('reveal');
        middleShell.classList.remove('reveal');
        rightShell.classList.remove('reveal');
        leftPearl.classList.add('hidden');
        middlePearl.classList.add('hidden');
        rightPearl.classList.add('hidden');
        guessDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        leftDisplay.textContent = '';
        middleDisplay.textContent = '';
        rightDisplay.textContent = '';
    }
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

function guessShell() {
    gameState = 'results';
    guessDisplay();
    pearlLocation();
    score();
}

function score() {
    if (gameState === 'results') {
        if (userChoice === 'guess-1' && pearls === 'pearl-1') {
            result = 'win';
            wins++;
            total++;
            winsDisplay.textContent = wins;
            totalDisplay.textContent = total;
        } else if (userChoice === 'guess-2' && pearls === 'pearl-2') {
            result = 'win';
            wins++;
            total++;
            winsDisplay.textContent = wins;
            totalDisplay.textContent = total;
        } else if (userChoice === 'guess-3' && pearls === 'pearl-3') {
            result = 'win';
            wins++;
            total++;
            winsDisplay.textContent = wins;
            totalDisplay.textContent = total;
        } else {
            result = 'loss';
            losses++;
            total++;
            lossesDisplay.textContent = losses;
            totalDisplay.textContent = total;
        }
    }
}

function guessDisplay() {
    if (gameState === 'results') {
        if (userChoice === 'guess-1') {
            leftShell.classList.add('reveal');
            guessDiv.classList.add('hidden');
            resultsDiv.classList.remove('hidden');
        } else if (userChoice === 'guess-2') {
            middleShell.classList.add('reveal');
            guessDiv.classList.add('hidden');
            resultsDiv.classList.remove('hidden');
        } else if (userChoice === 'guess-3') {
            rightShell.classList.add('reveal');
            guessDiv.classList.add('hidden');
            resultsDiv.classList.remove('hidden');
        }
    }
}

// event listeners
guessLeft.addEventListener('click', () => {
    userChoice = 'guess-1';
    guessShell(userChoice);
    guessDisplay('guess-1');
    if (result === 'win') {
        leftDisplay.textContent = 'Found it!';
    } else {
        leftDisplay.textContent = 'Not Here';
    }
});

guessMiddle.addEventListener('click', () => {
    userChoice = 'guess-2';
    guessShell(userChoice);
    guessDisplay('guess-2');
    if (result === 'win') {
        middleDisplay.textContent = 'Found it!';
    } else {
        middleDisplay.textContent = 'Not Here';
    }
});

guessRight.addEventListener('click', () => {
    userChoice = 'guess-3';
    guessShell(userChoice);
    guessDisplay('guess-3');
    if (result === 'win') {
        rightDisplay.textContent = 'Found it!';
    } else {
        rightDisplay.textContent = 'Not Here';
    }
});

playAgain.addEventListener('click', () => {
    gameState = 'guess';
    displayShells();
    pearls = getRandomItem(pearlArray); // pearls = a function that randomly pulls a value, then returns that value
});
/* Run page load code */
loadPage();
// pearlLocation();
