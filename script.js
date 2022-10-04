'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function (event) {
  const guessNumber = Number(document.querySelector('.number-input').value);

  if (!guessNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
  } else if (guessNumber > secretNumber) {
    document.querySelector('.guess-message').textContent = 'Меньше!';
  } else if (guessNumber < secretNumber) {
    document.querySelector('.guess-message').textContent = 'Больше!';
  }
});
