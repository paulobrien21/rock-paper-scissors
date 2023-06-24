console.log("Select rock, paper or scissors on the webpage to play:");

let computerScore = 0;
let playerScore = 0;
let result;

const log = document.getElementById('log');
const playerScoreDisplay = document.getElementById('PlayerScore');
const computerScoreDisplay = document.getElementById('ComputerScore');

log.textContent = 'First to 5! Choose your weapon below to start playing!';

playerScoreDisplay.textContent = 'Player: '+playerScore;
computerScoreDisplay.textContent = 'Computer: ' +computerScore;

function logUpdate(result, computerChoice){
	updateLogColor(result);
	log.textContent = result + '! Computer chose ' + computerChoice;
}

function updateScore(playerScore, computerScore){
	playerScoreDisplay.textContent = 'Player: '+playerScore;
	computerScoreDisplay.textContent = 'Computer: ' +computerScore;
}

function updateLogColor(result){
	if(result=='WIN'){
		log.style.color='green';
	}
	else if(result=='DRAW'){
		log.style.color='yellow';
	}
	else if(result=='LOSE'){
		log.style.color='red';
	}
	else{
		log.style.color='black';
	}
}

function getComputerChoice(){
	const choice = ["rock","paper","scissors"];
	let random = Math.floor(Math.random() * choice.length);
	let computerChoice = choice[random];
	return computerChoice;
}

function play(playerChoice){
	let computerChoice = getComputerChoice();

	if (playerChoice == 'rock'){
		if(computerChoice == 'rock'){
			console.log("DRAW! Computer picked Rock!");
			result = 'DRAW';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore);
			console.log("Computer: "+computerScore);
			updateScore(playerScore, computerScore);
		}
		else if(computerChoice == 'paper'){
			console.log('LOSE! Computer picked Paper!')
			computerScore +=1;
			result = 'LOSE';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
		else{
			console.log('WIN! Computer picked Scissors!')
			playerScore +=1;
			result = 'WIN';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
	}
	else if (playerChoice == 'paper'){
		if(computerChoice == 'rock'){
			console.log("WIN! Computer picked Rock!")
			playerScore +=1;
			result = 'WIN';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
		else if(computerChoice == 'paper'){
			console.log('DRAW! Computer picked Paper!')
			result = 'DRAW';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
		else{
			console.log('LOSE! Computer picked Scissors!')
			computerScore +=1;
			result = 'LOSE';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
	}
	else{
		if(computerChoice == 'rock'){
			console.log("LOSE! Computer picked Rock!")
			computerScore +=1;
			result = 'LOSE';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
		else if(computerChoice == 'paper'){
			console.log('WIN! Computer picked Paper!')
			playerScore +=1;
			result = 'WIN';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
		else{
			console.log('DRAW! Computer picked Scissors!')
			result = 'DRAW';
			logUpdate(result, computerChoice);
			console.log("Player: "+playerScore)
			console.log("Computer: "+computerScore)
			updateScore(playerScore, computerScore);
		}
	}
	if(playerScore == 5){
		console.log("GAME OVER! PLAYER WINS!")
		log.textContent = 'GAME OVER! PLAYER WINS! Choose your weapon to play again!';
		playerScore = 0;
		computerScore = 0;
	}
	else if(computerScore == 5){
		console.log("GAME OVER! COMPUTER WINS!")
		log.textContent = 'GAME OVER! COMPUTER WINS! Choose your weapon to play again!';
		playerScore = 0;
		computerScore = 0;
	}
}