window.onload = function loaded(){

	var oceansArray= ["ARCTIC", "PACIFIC", "ATLANTIC", "INDIAN"];

	var letters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	var arctic = ["A", "R", "C", "T", "I", "C"];
	var pacific = ["P", "A", "C", "I", "F", "I", "C"];
	var atlantic = ["A", "T", "L", "A", "N", "T", "I", "C"];
	var indian = ["I", "N", "D", "I", "A", "N"];
	
	var lettersGuessed = [];

	var wins = 0;

	var losses = 0;

	var guessesRemaining = 5;
	
	var arrayIndex = 0;

	var array = [];
	
	var gotWord;

	

	document.onkeyup = function(event){
		
		if (event.keyCode === 13){
			gotWord = findWord(arrayIndex);
			// console.log(gotWord);
			replaceWithDashes(gotWord);
			guessesRemaining;


		}
		


		document.onkeyup = function (event){

		var userGuess = event.key.toUpperCase();

		if(letters.indexOf(userGuess) === -1){
		alert("CHOOSE A LETTER");}
		
		else{

 		replaceWithCharacter(userGuess, gotWord);

		
		}//close else
		}//close second onkeyup


				
			
	}//close first onkey up


function findWord(arrayIndex){

	var word = oceansArray[arrayIndex];

		

		if (word =="ATLANTIC"){
			array = atlantic;
		}
		if (word == "INDIAN"){
			array = indian;
		}
		if (word == "PACIFIC"){
			array = pacific
		}
		if (word == "ARCTIC"){
			array = arctic;
		}
		return word;
	}

function replaceWithDashes(gotWord){  // THIS FUNCTION WORKS MONDAY 5:00
	array = [];
	
	for(i= 0; i < gotWord.length; i++){
		//dashedWord = dashedWord + "_ ";
		array.push("_ ");
	}
	var middleDiv = document.getElementById("middle");
	var noCommas = array.join(" ");
	middleDiv.innerHTML = noCommas;
	
	
}

function replaceWithCharacter(userGuess, gotWord){
		;
		for (var i = 0; i < gotWord.length; i++){
			if (gotWord[i] === userGuess){
				array[i] = userGuess;
			}//end if
			
		}//end for loop

		var middleDiv = document.getElementById("middle");
		
		var noCommas = array.join(" ");
		
		middleDiv.innerHTML = noCommas;


		if (gotWord.indexOf(userGuess, gotWord) > -1){ //if letter is in the word
		
			if(lettersGuessed.indexOf(userGuess, gotWord) != -1){ //if you have already guessed this letter
				alert("You have already guessed " + userGuess);
			}else{  //add to letters guessed if you have not guessed this letter

				var bottomDiv = document.getElementById("bottom"); 
				lettersGuessed.push(userGuess);
				bottomDiv.innerHTML = "Chosen Letters: " + lettersGuessed;
			}//end else
			
		}//end if

		
		if (gotWord.indexOf(userGuess, gotWord) == -1)        { //if letter is not in the word

			if(lettersGuessed.indexOf(userGuess, gotWord) != -1){ //if you have already guessed this letter
				alert("You have already guessed " + userGuess);
			}
			else {  
				console.log("testing line 137");
				var redDiv = document.getElementById("red");
					redDiv.innerHTML = "Guesses Remaining: " + guessesRemaining;

				var bottomDiv = document.getElementById("bottom"); 
				lettersGuessed.push(userGuess);
				bottomDiv.innerHTML = "Chosen Letters: " + lettersGuessed;
				guessesMinus();
				console.log("guesses minus fired");

			}//end else

		
		var redDiv = document.getElementById("red");
		redDiv.innerHTML = "Guesses Remaining: " + guessesRemaining;
		}//end if

		if (array.indexOf("_ ") == -1){
				wins++;
				var updateWins = document.getElementById("wins");
				updateWins.innerHTML = "Wins: " + wins;

				var goodJob = document.getElementById("red");
				goodJob.innerHTML = "Good job!  Click on 'Next Game' to continue."

				if(window.event.keyCode != 13) return false;
				
			}	

		if (guessesRemaining == 0){
			losses++;
			var udpateLosses = document.getElementById("losses");
			udpateLosses.innerHTML = "Losses: " + losses;

			var badJob = document.getElementById("red");
			badJob.innerHTML = "The correct word was " + gotWord + ".  Click on 'Next Game' to continue.";
			
	}

		

		
	}//end replace with character
		document.getElementById("button").onclick = function() {next()}
		function next(){

					lettersGuessed = [];
					var clearLettersGuessed = document.getElementById("bottom");
					clearLettersGuessed.innerHTML = "Chosen Letters: " + lettersGuessed;

					guessesRemaining = 5;
					arrayIndex++;
					array = [];

					var redDiv = document.getElementById("red");
					redDiv.innerHTML = "Guesses Remaining: " + guessesRemaining;

					var newWord = findWord(arrayIndex);
					// console.log(newWord);
					gotWord = newWord;
					replaceWithDashes(newWord);
					// console.log(array);

					var blackDiv = document.getElementById("bottom");
					blackDiv.innerHTML = "Chosen Letters: " + lettersGuessed;
					

				}

	function guessesMinus(){
		guessesRemaining--;
		var redDiv = document.getElementById("red");
			redDiv.innerHTML = "Guesses Remaining: " + guessesRemaining;
			console.log(guessesRemaining);

	}				

}  //end window.onload








    		
			 

 	










