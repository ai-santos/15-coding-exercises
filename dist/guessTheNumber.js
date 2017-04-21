'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ### Guess The Number

// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.
// When the user types a guess, the program should tell them if they won (the guess matched the computer's number),
// if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated.
// Terminate the program if the user types "exit".

// Keep asking the user to input a number if the number differs from the computer's number (loops!).

var readlineSync = require('readline-sync');

var GuessNum = function () {
  function GuessNum(number) {
    _classCallCheck(this, GuessNum);

    this.score = 0;
    this.number = number || this.generateRandNum();
    this.guess = null;
  }

  _createClass(GuessNum, [{
    key: 'generateRandNum',
    value: function generateRandNum() {
      var randNum = Math.floor(Math.random() * 101);
      return randNum;
    }
  }, {
    key: 'gameStart',
    value: function gameStart() {
      this.promptUser();
    }
  }, {
    key: 'promptUser',
    value: function promptUser() {
      this.guess = Number(readlineSync.question('Enter a number between 1 and 100'));
      this.winOrLose();
    }
  }, {
    key: 'closeNode',
    value: function closeNode() {
      process.exit(0);
    }
  }, {
    key: 'winOrLose',
    value: function winOrLose() {
      if (this.guess == this.number) {
        this.score++;
        console.log('Your guess: ' + this.guess + ' is correct.' + '\n' + 'You won!');
        this.closeNode();
      } else if (this.guess > this.number) {
        console.log('Your guess: ' + this.guess + ' is greater than the number.' + '\n' + 'Please try again.');
        this.promptUser();
      } else if (this.guess < this.number) {
        console.log('Your guess: ' + this.guess + ' is less than the number.' + '\n' + 'Please try again.');
        this.promptUser();
      }
    }
  }]);

  return GuessNum;
}();

var gn = new GuessNum();
gn.gameStart();

// export default GuessNum