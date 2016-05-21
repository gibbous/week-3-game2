//Variables
   var guessCounter = 0;
   var lossCounter =0;
   var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];
   var lettersGuessed;
   var gameOver = false;

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
	console.log(guessCounter);
	var targetDiv = document.getElementById("guessCounter");
	targetDiv.innerHTML = guessCounter;
	}




//compare computer guess to user guess



if (guessCounter >= 10) {
	lossCounter = lossCounter + 1;
	console.log(lossCounter);
	alert("Game Over");
	var loseDiv = document.getElementById("lossCounter");
	loseDiv.innerHTML = lossCounter;
}
