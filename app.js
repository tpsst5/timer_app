// Define UI Vars
const startStop = document.querySelector('.start');
const reset = document.querySelector('.reset');
const timer = document.querySelector('.timer');
const timerText = timer.textContent.split(':');
const startStopText = document.querySelector('.lead');
let hours = parseInt(timerText[0], 10);
let minutes = parseInt(timerText[1], 10);
let seconds = parseInt(timerText[2], 10);

// Var to toggle timer
let toggleTimer = 'off';
// Vars for displaying time
let displayHours = '00';
let displayMinutes = '00';
let displaySeconds = '00';
// Toggle var for reset
let resetPressed = null;

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Stop & Start timer event
  startStop.addEventListener('click', startStopTimer);
  // Rese timer event
  reset.addEventListener('click', resetTimer);
}


function startStopTimer() {
  // Toggle time on click
  if (toggleTimer === 'off') {
    toggleTimer = 'on';
    startStopText.textContent = 'STOP';
  } else {
    toggleTimer = 'off';
    startStopText.textContent = 'START';
  }

  function displayTime() {
    if (hours < 10) {
      displayHours = `0${hours}`;
    } else {
      displayHours = hours;
    }
    if (minutes < 10) {
      displayMinutes = `0${minutes}`;
    } else {
      displayMinutes = minutes;
    }
    if (seconds < 10) {
      displaySeconds = `0${seconds}`;
    } else {
      displaySeconds = seconds;
    }

    // Display timer text
    timer.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  }

  const runTimer = setInterval(startOrStop, 1000);

  function startOrStop() {

    if (toggleTimer === 'on') {
      if (seconds < 59) {
        seconds++;
        displayTime();
      } else if (minutes < 59) {
        minutes++;
        seconds = 0;
        displayTime();
      } else if (minutes === 59) {
        if (hours < 99) {
          hours++;
          minutes = 0;
          seconds = 0;
          displayTime();
        } else if (hours === 99) {
          seconds = 0;
          minutes = 0;
          hours = 0;
          displayTime();
          alert('Max time reached!');
          clearInterval(runTimer);
        }
      }
    } else if (toggleTimer === 'off') {
      clearInterval(runTimer);
    }
  }
}

function resetTimer() {
  location.reload();
}