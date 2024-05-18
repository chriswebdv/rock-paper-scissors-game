// score count variables

const humanScore = 0;
const computerScore = 0;

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

function getHumanChoice() {
  const btns = document.querySelectorAll("button[id^=but]");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      return event.target.id;
    });
  });
}

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
}
