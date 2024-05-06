// write function which plays the computer's part of the game

function getComputerChoice() {
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"
    let computerChoice = Math.floor(Math.random()*3);

    if (computerChoice === 0) {
        //return rock
        console.log(rock);
    } else if (computerChoice === 1) {
        //return paper
        console.log(paper);
    }else {
        //return scissors
        console.log(scissors);
    }
}

getComputerChoice()






// Write the logic for the human choice using if/else statements

