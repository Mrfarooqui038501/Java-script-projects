let randomNumber = parseInt(Math.random() *100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =  document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame =  true;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess =  parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a Valid digit`)
    }else if(guess < 1){
        alert(`Please Enter a Number Greater than 1.`)
    } else if(guess > 100){
        alert(`Please Enter a Number less than 100.`)
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            cleanUPGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }else{
            cleanUPGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`HEY your Guess were Right You win`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Oo Your Guess was low Keep guessing`)
    } else  if(guess > randomNumber){
        displayMessage(`Oh Your Guessed number was High Keep Going`)
    }
}

function cleanUPGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame =  false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true

    });
}


