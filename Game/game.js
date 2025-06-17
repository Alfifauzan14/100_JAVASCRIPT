const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["batu", "kertas", "gunting"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Seri!";
  } else if (
    (playerSelection === "batu" && computerSelection === "gunting") ||
    (playerSelection === "kertas" && computerSelection === "batu") ||
    (playerSelection === "gunting" && computerSelection === "kertas")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "Anda Menang! " + playerSelection + " oleh " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Anda Kalah! " + computerSelection + " oleh " + playerSelection;
  }
}
