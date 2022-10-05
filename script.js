'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;

let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function (event) {
  const guessNumber = Number(document.querySelector('.number-input').value);

  if (!guessNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = 'green';
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
