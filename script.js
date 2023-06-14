console.log("Select rock, paper or scissors on the webpage to play:");

function getComputerChoice(){
	const choice = ["rock","paper","scissors"];
	let random = Math.floor(Math.random() * choice.length);
	let computerChoice = choice[random];
	return computerChoice;
}

let computerScore = 0;
let playerScore = 0;

function play(playerChoice){
	let computerChoice = getComputerChoice();

	if (playerChoice == 'rock'){
		if(computerChoice == 'rock'){
			console.log("DRAW! Computer picked Rock!")
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
		else if(computerChoice == 'paper'){
			console.log('LOSE! Computer picked Paper!')
			computerScore +=1;
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
		else{
			console.log('WIN! Computer picked Scissors!')
			playerScore +=1;
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
	}
	else if (playerChoice == 'paper'){
		if(computerChoice == 'rock'){
			console.log("WIN! Computer picked Rock!")
			playerScore +=1;
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
		else if(computerChoice == 'paper'){
			console.log('DRAW! Computer picked Paper!')
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
		else{
			console.log('LOSE! Computer picked Scissors!')
			computerScore +=1;
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
	}
	else{
		if(computerChoice == 'rock'){
			console.log("LOSE! Computer picked Rock!")
			computerScore +=1;
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
		else if(computerChoice == 'paper'){
			console.log('WIN! Computer picked Paper!')
			playerScore +=1;
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
		else{
			console.log('DRAW! Computer picked Scissors!')
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
		}
	}
	if(playerScore == 5){
		console.log("GAME OVER! PLAYER WINS!")
		playerScore = 0;
		computerScore = 0;
	}
	else if(computerScore == 5){
		console.log("GAME OVER! COMPUTER WINS!")
		playerScore = 0;
		computerScore = 0;
	}
}