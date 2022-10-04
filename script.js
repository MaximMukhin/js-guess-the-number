'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function (event) {
  const guessNumber = Number(document.querySelector('.number-input').value);
  console.log(guessNumber);

  console.log(secretNumber, 'secretNumber');
  console.log(guessNumber, 'guessNumber');

  if (!guessNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    console.log('Правильно!');
  }
});
