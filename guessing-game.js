function guessingGame(){
    let answer = Math.floor(Math.random() * 100);
    let gameOver = false;
    let numGuess = 0;

    return function game(num){
        if(gameOver === true) return "You already won! Game Over."
    
        if(num === answer){
            gameOver = true;
            numGuess++;
            return `You WON! Lucky number was ${answer}. Start a new Game.`
        }
        if(num < answer){
            numGuess++;
            return `${num} is too low. Try again.`
        }
        if(num > answer){
            numGuess++;
            return `${num} is too high! Try again.`
        }
    }
}

module.exports = { guessingGame };
