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

const btns = document.querySelectorAll("button[id^=but]");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.id);
  });
});

function playRound(humanC, computerC) {
  if (humanC === computerC) {
    console.log("It's a tie!");
  } else if (humanc === "rock" && computerC === "paper") {
    console.log("You lose, paper beats rock!");
    computerScore++;
  } else if (humanC === "rock" && computerC === "scissors") {
    console.log("You win, rock beats scissors");
    humanScore++;
  }
}
