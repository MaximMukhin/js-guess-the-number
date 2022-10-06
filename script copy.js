'use strict'; 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.question').textContent = secretNumber;

let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

const newGame = () => {
  score = 20;
  document.querySelector('.number-input').value = '';
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number-input').removeAttribute('disabled', true);
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.highscore').textContent = highScore;
};

const gameWon = () => {};

const gameLose = () => {};

const numberLess = () => {};

const numberLarger = () => {};

document.querySelector('.again').addEventListener('click', function () {
  newGame();
  /*   score = 20;
  document.querySelector('.number-input').value = '';
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number-input').removeAttribute('disabled', true);
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.highscore').textContent = highScore; */
});

document.querySelector('.check').addEventListener('click', function (event) {
  const guessNumber = Number(document.querySelector('.number-input').value);

  if (!guessNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.number-input').setAttribute('disabled', true);
    if (highScore === 0) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Число меньше!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Проиграл!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Число больше!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Проиграл!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
