

//bank of random words
var wordBank = ["rough","political","trouble","listen","crazy","adjustment","faithful","horrible","classy","different","swing","unwritten","plan","burn","soggy","tart","add","crash","cough","lazy","kaput","fat","deranged","naughty","measure","explode","form","mouth","adjoining","accurate"]


var numTries = 20;

//selects random word
var randomWord = wordBank [Math.floor(Math.random()*wordBank.length)];
var userGuess = "";
var alreadyTried = [];
var guessWrong = [];
var guessCorrect = [];
var hiddenWord=[];


//Get the letter that user enters
console.log (randomWord);

for(i=0; i<randomWord.length;i++){
	hiddenWord.push("_");
}

console.log(hiddenWord);

function checkLetter(x,y){
	x.indexOf(y);
}

document.onkeyup = function (event){


	var userGuess = event.key;
//check if the letter entered already tried 

	if( (alreadyTried.length !== 0) && (alreadyTried.indexOf(userGuess) > -1)){
		alert("Enter a letter you have not tried :)")
		console.log("Already Tried Letter: " + alreadyTried);
	}

//check if entered number is not word and reduce number of tries
	else if (randomWord.indexOf(userGuess) === -1){
		numTries--;
		alreadyTried.push(userGuess);
		guessWrong.push(userGuess);
		console.log(numTries);
		console.log("Wrong Guess: " + guessWrong); 
	}
//check if the letter entered is in random word
	else if (randomWord.indexOf(userGuess) > -1){
		guessCorrect.push(userGuess);
		alreadyTried.push(userGuess);
		console.log("Correct Guess: " + guessCorrect);
//Check all letters of the word for letter guessed by user
		for (i=0;i<randomWord.length;i++){
			if(randomWord[i] === userGuess){
				hiddenWord[i] = userGuess;
				console.log(hiddenWord)
			}
		}
	}
}







//Check if the letter user entered is in random word







