// write function which plays the computer's part of the game
let humanScore;
let computerScore;

function getComputerChoice() {
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return rock;
  } else if (computerChoice === 1) {
    return paper;
  } else {
    return scissors;
  }
}

// Write the logic for the human choice using if/else statements

function getHumanChoice() {
  const btn1 = document.querySelector(".btn1");

  btn1.addEventListener("click", function (e) {
    playRound("rock");
  });

  const btn2 = document.querySelector(".btn2");

  btn2.addEventListener("click", function (e) {
    playRound("paper");
  });

  const btn3 = document.querySelector(".btn3");

  btn3.addEventListener("click", function (e) {
    playRound("scissors");
  });
}

// Single round play

function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else {
    console.log("Tie try again!");
  }
}

// playGame function
humanScore = 0;
computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound();
