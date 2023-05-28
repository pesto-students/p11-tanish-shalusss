const playGuessingGame = (numToGuess, totalGuesses = 10) => {
    let number = 'Enter a number between 1 and 100. ';
    for(i=0; i<totalGuesses; i++) {
        let guess = prompt(number);
        if (isNaN(guess)) {
            number = 'Please enter a number. ';
            i = i-1;
        }else if(guess == numToGuess) {
            alert('You have guessed correct number in ' + (i+1) + ' attempts. ');
            return i+1;
        }else if(guess){
            if(guess < numToGuess) {
            number = guess + ' is too small. Guess a larger number. ';
            }else {
            number = guess + ' is too large. Guess a smaller number. ';
            } 
        }else {
            return 0;
        }
        
    }
    alert('Game over. '+i+ ' attempts reached. Number to be guessed is ' + numToGuess);
        return 0;
};
playGuessingGame(3,5);
