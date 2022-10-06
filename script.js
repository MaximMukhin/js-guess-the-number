'use strict';

const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const guessMessageElement = document.querySelector('.guess-message');
const numberInputElement = document.querySelector('.number-input');
const bodyElement = document.querySelector('body');
const questionElement = document.querySelector('.question');
const newGameElement = document.querySelector('.again');
const buttonCheckElement = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
scoreElement.textContent = score;

let highScore = 0;
highScoreElement.textContent = highScore;

const setNewGame = () => {
  score = 20;
  numberInputElement.value = '';
  scoreElement.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberInputElement.removeAttribute('disabled', true);
  bodyElement.style.backgroundColor = 'black';
  questionElement.textContent = '???';
  highScoreElement.textContent = highScore;
  guessMessageElement.textContent = 'Начни угадывать!';
};

const setGameWon = () => {
  guessMessageElement.textContent = 'Правильно!';
  bodyElement.style.backgroundColor = 'green';
  questionElement.textContent = secretNumber;
  numberInputElement.setAttribute('disabled', true);
};
const setGameLose = () => {
  guessMessageElement.textContent = 'Проиграл!';
  scoreElement.textContent = 0;
  bodyElement.style.backgroundColor = 'red';
};
const setNumberLess = () => {
  guessMessageElement.textContent = 'Число меньше!';
  score--;
  scoreElement.textContent = score;
};
const setNumberLarger = () => {
  guessMessageElement.textContent = 'Число больше!';
  score--;
  scoreElement.textContent = score;
};

const setHighScore = () => {
  highScore = score;
  highScoreElement.textContent = highScore;
};

newGameElement.addEventListener('click', () => setNewGame());

buttonCheckElement.addEventListener('click', () => {
  const guessNumber = Number(numberInputElement.value);

  if (!guessNumber) {
    guessMessageElement.textContent = 'Введите число!';
  } else if (guessNumber === secretNumber) {
    setGameWon();
    if (highScore === 0) {
      setHighScore();
    }
    if (highScore < score) {
      setHighScore();
    }
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      setNumberLess();
    } else {
      setGameLose();
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      setNumberLarger();
    } else {
      setGameLose();
    }
  }
});
