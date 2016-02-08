$(document).ready(function() {
	var buttonChoices = ["rock", "paper", "scissors"];
	var computerScore = "0";
	var userScore = "0";
	var roundCount = "0";
	var drawCount = "0";
	$("#restartButton").hide ();

	// After user click, comuputer choice will be randomized //
	
	$(".btn-default").on("click", function() {
		var computerChoice = Math.floor(Math.random() * 3);
		console.log(buttonChoices[computerChoice]) 
		if (computerChoice === 0) {
		computerChoice = "rock";
		} else if(computerChoice === 1) {
		computerChoice = "paper";
		} else {
		computerChoice = "scissors";
		}; 

		var userChoice = $(this).data("choice")
		console.log(userChoice)
		compareChoice(userChoice, computerChoice);

	});

	var compareChoice = function(userChoice, computerChoice) {
		if (userChoice === computerChoice) {
			tie();
			roundUp();
		} else if (userChoice === "rock") {
			if (computerChoice === "scissors") {
			userWin();
			roundUp();
		} else {
			computerWin();
			roundUp();
		};
		} else if (userChoice === "paper") {
			if (computerChoice === "rock") {
				userWin();
				roundUp();
		} else {
			computerWin();
			roundUp();
		};
		} else if (userChoice === "scissors") {
			if (computerChoice === "paper") {
				userWin();
				roundUp();
		} else {
			computerWin();
			roundUp();
		};
	};
};
	function tie() {
		drawCount++;
		$("#drawCount").html(drawCount);		
		$("#game-screen").html("DRAW - NO ONE WINS!");	
	};

	function userWin() {
		userScore++;
		console.log(userScore);
		$("#userScore").html(userScore);
		$("#game-screen").html("YOU WIN!");
	};

	function computerWin() {
		computerScore++;
		console.log(computerScore);
		$("#computerScore").html(computerScore);
		$("#game-screen").html("CHARLIE WINS!");
	};

	function roundUp() {
		roundCount++;
		console.log(roundCount);
		$("#roundCount").html(roundCount);

	if (roundCount === 5) {
			$("#button-row").hide ();
			$("#restartButton").show ();
				
			if (userScore > computerScore) {
				$("#game-screen").html("YOU WIN! YOUR STRENGTH IS EQUAL TO THAT OF YOUR WILL TO WIN!");
			} else if (userScore < computerScore) {
				$("#game-screen").html("YOU LOSE! YOU DID QUITE WELL,BUT YOU NEED MORE TRAINING TO DEFEAT ME!");
			} else if (userScore == computerScore) {
				$("#game-screen").html("NO ONE WINS, PLAY AGAIN!");
      }
      userScore = 0;
      computerScore = 0;
      roundCount = 0;
      drawCount = 0;
      userChoice = "";
      computerChoice = "";
      $("#userScore").html(userScore);
      $("#computerScore").html(computerScore);
      $("#roundCount").html(roundCount);
      $("#drawCount").html(drawCount);
		}
	};
});