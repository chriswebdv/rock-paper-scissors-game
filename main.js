// write function which plays the computer's part of the game

function getComputerChoice() {
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"
    let computerChoice = Math.floor(Math.random()*3);

    if (computerChoice === 0) {
        return rock
    } else if (computerChoice === 1) {
        return paper
    }else {
        return scissors
    }
}

// Write the logic for the human choice using if/else statements

function getHumanChoice () {
    let humanChoice = prompt("Choose one: rock, paper, scissors ")
    console.log(humanChoice);
}
getHumanChoice()