// score count variables
let humanScore = 0;
let computerScore = 0;

// Computer Choice
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Play round logic
function playRound(humanC, computerC) {
  if (humanC === computerC) {
    console.log("It's a tie!");
  } else if (humanC === "rock" && computerC === "paper") {
    console.log("You lose, paper beats rock!");
    computerScore++;
  } else if (humanC === "rock" && computerC === "scissors") {
    console.log("You win, rock beats scissors");
    humanScore++;
  } else if (computerC === "rock" && humanC === "paper") {
    console.log("You win, paper beats rock");
    humanScore++;
  } else if (computerC === "rock" && humanC === "scissors") {
    console.log("You lose, rock beats scissors");
    computerScore++;
  } else if (humanC === "paper" && computerC === "scissors") {
    console.log("You lose, scissors beats paper");
    computerScore++;
  } else if (computerC === "paper" && humanC === "scissors") {
    console.log("You win, scissors beat paper");
    humanScore++;
  }
  console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".but");

  function getHumanChoice(event) {
    const buttonId = event.target.id;
    let choice;
    if (buttonId === "but1") {
      choice = "rock";
    } else if (buttonId === "but2") {
      choice = "paper";
    } else if (buttonId === "but3") {
      choice = "scissors";
    }
    return choice;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const humanSelection = getHumanChoice(event);
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    });
  });
});
