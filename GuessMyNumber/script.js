'use strict';
//
// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.message').textContent = 'Correct Number!';
//
// document.querySelector('.guess').value = 69;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
        //when player wins
    } else if (guess === number) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== number) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > number ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose!';
            document.querySelector('.score').textContent = 0;
        }
    }});

document.querySelector('.again').addEventListener('click', function() {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
})




