function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "rock";
    } else if (x === 1) {
        return "paper";
    } else {
        return "scissors";
    }    
}

function getHumanChoice() {
    let x = prompt("Enter rock, paper or scissors").toLowerCase();
    if (x === "rock" || x === "scissors" || x === "paper") {
        return x;
    }  else {
        alert("Incorrect input");
        return getHumanChoice();
    }
}

function playRound(humanSelection, computerSelection) {
    if ((humanSelection === "rock"  && computerSelection === "scissors") || (humanSelection === "paper"  && computerSelection === "rock") || (humanSelection === "scissors"  && computerSelection === "paper")) {
        return "You win"
    }  else if (humanSelection === computerSelection) {
        return "Tie"
    } else {
        return "You lose"
    } 

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5;  i++) {
        let x = getHumanChoice();
        let y = getComputerChoice();
        let z = playRound(x, y);
        if (z === "You win") {
            humanScore++;
            console.log(`You win ${x} beats ${y}\nCurrentscore: ${humanScore}\nComputerscore: ${computerScore}`);
            
        } else if (z === "You lose") {
            computerScore++;
            console.log(`You lose ${y} beats ${x}\nCurrentscore: ${humanScore}\nComputerscore: ${computerScore}`)

        } else {
            computerScore++;
            humanScore++;
            console.log(`Draw\nCurrentscore: ${humanScore}\nComputerscore: ${computerScore}`);
            
        }

    }

    if (humanScore > computerScore) {
        return `You Won\nfinal score: ${humanScore}\ncomputerscore: ${computerScore}`
    } else if (humanScore < computerScore) {
        return `You lost\nfinal score: ${humanScore}\ncomputerscore: ${computerScore}`
    } else {
        return `Tie\nfinal score: ${humanScore}\ncomputerscore: ${computerScore}`
    }
}

console.log(playGame());

