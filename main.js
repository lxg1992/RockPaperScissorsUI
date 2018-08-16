

	function computerPlay(){
		let choice = Math.random();
		if(choice <= 0.33){
			return "rock";
		} else if (choice <= 0.66){
			return "paper";
		} else if (choice <= 0.99){
			return "scissors";
		}
	}

	function playRound(playerSelection, computerSelection){
		if (playerSelection == computerSelection){
			console.log(`It's a tie: You've selected ${playerSelection} vs computer ${computerSelection}`);
		} else {
			if (playerSelection == "rock"){
				if(computerSelection == "paper"){
					console.log("You lose, rock is covered by paper");
				} else if (computerSelection == "scissors"){
					console.log("You win, rock beats scissors");
				}
			} else if (playerSelection == "paper"){
				if(computerSelection =="rock"){
					console.log("You win, paper covers rock");
				} else if (computerSelection == "scissors"){
					console.log("You lose, scissors cuts paper");
				}
			} else if (playerSelection == "scissors"){
				if(computerSelection == "rock"){
					console.log("You lose, rock smashes scissors");
				} else if (computerSelection == "paper"){
					console.log("You win, scissors cut paper");
				}
			} else {
				console.log("Critical error");
			}
		}
	}

	function game(){
		let pS = window.prompt("What do you wish to play?");
		let cS = computerPlay();

		playRound(pS.toLowerCase(),cS);
	}

