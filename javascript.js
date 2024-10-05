let humanScore = 0;
let computerScore = 0;

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

function playRound(humanSelection, computerSelection) {
    if ((humanSelection === "rock"  && computerSelection === "scissors") 
    || (humanSelection === "paper"  && computerSelection === "rock") 
    || (humanSelection === "scissors"  && computerSelection === "paper")) 
    {
        humanScore++;
        text.textContent = `${humanSelection} beats ${computerSelection}\n
        humanscore: ${humanScore}\n
        computerscore: ${computerScore}`;
    }  
    
    else if (humanSelection === computerSelection) 
    {   text.textContent = `It's a tie\n
        humanscore: ${humanScore}\n
        computerscore: ${computerScore}`;
    } 
    else 
    {   computerScore++;
        text.textContent = `${computerSelection} beats ${humanSelection}\n
        humanscore: ${humanScore}\n
        computerscore: ${computerScore}`;
    }

    if (humanScore === 5) {
        text.textContent = `You win\nhumanscore: ${humanScore}
        \ncomputerscore: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5 ) {
        text.textContent = `You lose\nhumanscore: ${humanScore}
        \ncomputerscore: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;   
    }

}

const div = document.querySelector("#main");

const rock = document.createElement("button");
rock.textContent = "ROCK";

const paper = document.createElement("button");
paper.textContent = "PAPER";

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS"

const text = document.createElement("div");
const buttons = document.createElement("div");
text.textContent ="Let the game begin"

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors)
div.appendChild(buttons)
div.appendChild(text);

buttons.style.cssText = "display: flex; align-items: center ; justify-content: space-evenly;"
buttons.style.height = "100px"

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
