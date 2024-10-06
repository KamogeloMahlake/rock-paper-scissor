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
        moves.textContent = `${humanSelection} beats ${computerSelection}`;
    }  
    
    else if (humanSelection === computerSelection) 
    {   moves.textContent = `It's a tie`;
    } 
    else 
    {   computerScore++;
        moves.textContent = `${computerSelection} beats ${humanSelection}`;
    }

    hScore.innerHTML = `<p>${humanScore}</p><p>Player</p>`;
    cScore.innerHTML = `<p>${computerScore}</p><p>Computer</p>`;

    if (humanScore === 5) {
        moves.style.fontWeight = "bold";
        moves.innerHTML = "<p>Game Over</p><p>You win</p><p>Choose to start new game</p>";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5 ) {
        moves.innerHTML = "<p>Game Over</p><p>You lose</p><p>Choose to start new game</p>";
        moves.style.fontWeight = "bold";
        humanScore = 0;
        computerScore = 0;
    }


}

const div = document.querySelector("#main");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissor");
const header = document.createElement("h1");
const scores = document.createElement("div");
const hScore = document.createElement("div");
const cScore = document.createElement("div");
const moves = document.createElement("div");

moves.textContent = "Let the game begin";
moves.style.textAlign = "center";

hScore.innerHTML = `<p>${humanScore}</p><p>Player</p>`;
hScore.style.border = "1px solid black";
hScore.style.display = "flex";
hScore.style.flexDirection = "column";
hScore.style.alignItems = "center";
hScore.style.width = "85px";

cScore.innerHTML = `<p>${computerScore}</p><p>Computer</p>`;
cScore.style.border = "1px solid black";
cScore.style.display = "flex";
cScore.style.flexDirection = "column";
cScore.style.alignItems = "center";
cScore.style.width = "85px";


header.textContent = "First to five wins";
header.style.textAlign = "center";
const text = document.createElement("div");
const buttons = document.createElement("div");

scores.appendChild(hScore);
scores.appendChild(moves);
scores.appendChild(cScore);

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

div.appendChild(header);
div.appendChild(buttons);
div.appendChild(scores);
div.appendChild(text);

buttons.style.display = "flex";
buttons.style.alignItems = "center";
buttons.style.justifyContent = "space-evenly";
buttons.style.flexWrap = "wrap";
buttons.style.marginBottom = "10px";

scores.style.display = "flex";
scores.style.justifyContent = "space-evenly";
scores.style.flexWrap = "wrap";

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
