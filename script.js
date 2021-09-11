// player elements
const playerscore = document.getElementById('player-score');
const playerchoice = document.getElementById("player-choice");

const playerRockelt = document.getElementById('playerRock');
const playerPaperelt = document.getElementById("playerPaper");
const playerScissorselt = document.getElementById("playerScissors");
const playerLizardelt = document.getElementById("playerLizard");
const playerSpockelt = document.getElementById("playerSpock");

// computer elements
const computerscore = document.getElementById("computer-score");
const computerchoice = document.getElementById("computer-choice");

const computerRockelt = document.getElementById("computerRock");
const computerPaperelt = document.getElementById("computerPaper");
const computerScissorselt = document.getElementById("computerScissors");
const computerLizardelt = document.getElementById("computerLizard");
const computerSpockelt = document.getElementById("computerSpock");

const resulttext = document.getElementById('result-text');
const allicons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerans = '';
function autocomputerchoice()
{
  const computeransnumber = Math.random();
  //console.log(computeransnumber);
  if(computeransnumber<0.2)
  {
    computerans = 'rock';
  }
  else if (computeransnumber <= 0.4) {
    computerans = "paper";
  }
  else if (computeransnumber <= 0.6) {
    computerans = "scissors";
  }
  else if (computeransnumber <= 0.8) {
    computerans = "lizard";
  }
  else{
    computerans = "spock";
  }

}

function resetselected()
{
  allicons.forEach(event=>
    {
      event.classList.remove('selected');
    })
}

function computerselect() {
  switch (computerans) {
    case "rock":
      computerRockelt.classList.add("selected");
      computerchoice.textContent = " --- Rock";
      break;
    case "paper":
      computerPaperelt.classList.add("selected");
      computerchoice.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissorselt.classList.add("selected");
      computerchoice.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizardelt.classList.add("selected");
      computerchoice.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpockelt.classList.add("selected");
      computerchoice.textContent = " --- Spock";
      break;

    default:
      break;
  }
}

function Getresult()
{
  resetselected();
  autocomputerchoice();
  computerselect();
}

function select(choice)
{
  //console.log(playerchoice);
  Getresult();
  switch (choice) {
    case 'rock':
      playerRockelt.classList.add("selected");
      playerchoice.textContent = " --- Rock";
      break;
    case "paper":
      playerPaperelt.classList.add("selected");
      playerchoice.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissorselt.classList.add("selected");
      playerchoice.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizardelt.classList.add("selected");
      playerchoice.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpockelt.classList.add("selected");
      playerchoice.textContent = " --- Spock";
      break;

    default:
      break;
  }
}
