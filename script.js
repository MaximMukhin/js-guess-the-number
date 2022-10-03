'use strict';

document.querySelector('.check').addEventListener('click', function (event) {
  const guessNumber = document.querySelector('.number-input').value;
  console.log(guessNumber);

  if (!guessNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  }
});
