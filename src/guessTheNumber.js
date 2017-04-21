// ### Guess The Number

// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.
// When the user types a guess, the program should tell them if they won (the guess matched the computer's number),
// if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated.
// Terminate the program if the user types "exit".

// Keep asking the user to input a number if the number differs from the computer's number (loops!).

const readlineSync = require('readline-sync')

class GuessNum {
  constructor(number) {
    this.score = 0;
    this.number = number || this.generateRandNum()
    this.guess = null;
  }

  generateRandNum() {
    let randNum = Math.floor(Math.random() * 101)
    return randNum
  }

  gameStart() {
    this.promptUser()
  }

  promptUser() {
    this.guess = Number(readlineSync.question('Enter a number between 1 and 100'));
    this.winOrLose()
  }

  closeNode() {
    process.exit(0)
  }

  winOrLose() {
    if(this.guess == this.number) {
      this.score++
      console.log('Your guess: ' + this.guess + ' is correct.' + '\n' + 'You won!')
      this.closeNode()
    } else if (this.guess > this.number) {
      console.log('Your guess: ' + this.guess + ' is greater than the number.' + '\n' + 'Please try again.')
      this.promptUser()
    } else if (this.guess < this.number) {
      console.log('Your guess: ' + this.guess + ' is less than the number.' + '\n' + 'Please try again.')
      this.promptUser()
    }
  }

}

export default GuessNum

