//VARIABLES
   var guessCounter = 0;
   var remainingGuesses = 10;
   var lossCounter =0;
   var winCounter = 0;
   var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
   var lettersGuessed;
   var gameOver = false;

//FUNCTIONS

function psychic(){

	//Computer selects a letter
	var computerGuess = letters[Math.floor(Math.random()*letters.length)];
		console.log(computerGuess);

	//Code to capture user guess
	document.onkeyup = function(event){

	//Determine which letter was chosen and make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		//Update Guess Counter
		guessCounter = guessCounter + 1;
		remainingGuesses = remainingGuesses - 1;
		console.log(guessCounter);
		var targetDiv = document.getElementById("guessCounter");
		targetDiv.innerHTML = guessCounter;
		var remainDiv = document.getElementById("remainingGuesses");
		remainDiv.innerHTML = remainingGuesses;
		

	//compare computer guess to user guess
	if (userGuess === computerGuess) {
		alert('You are correct!');
		winCounter = winCounter + 1;
		console.log(winCounter);
		var winDiv = document.getElementById("winCounter");
		winDiv.innerHTML = winCounter;
		guessCounter = 0;
		remainingGuesses = 10;
		return psychic();
		}

	//track number of guesses
	 if (guessCounter >= 10) {
		lossCounter = lossCounter + 1;
		console.log(lossCounter);
		alert("Game Over");
		var loseDiv = document.getElementById("lossCounter");
		loseDiv.innerHTML = lossCounter;
		guessCounter = 0;
		remainingGuesses = 10;
		return psychic();
		}

	}
	}
	psychic();