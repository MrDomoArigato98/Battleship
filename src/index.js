import "./reset.css";
import "./style.css";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Ship } from "./Ship";
import {
  createGrid,
  populateShips,
  shipSunkDisplay,
  findCell,
} from "./createGrid";
import { computerAttackCoordinates } from "./computer";

let isPlayerOneTurn = false;
let gameWinner = "";
/*
Get both player areas using their ID.
*/
const player1Area = document.getElementById("player1-area");
const player2Area = document.getElementById("player2-area");


const player1 = new Player();
const player2 = new Player();

player1.placeShipsRandom();
player2.placeShipsRandom();

/*
Then create the grids based on the gameboards.
*/
const grid1 = createGrid(player1.gameboard);
const grid2 = createGrid(player2.gameboard);

populateShips(grid1, player1.gameboard, false);
populateShips(grid2, player2.gameboard, true);

/*
const random = document.getElementById("randomize")
random.addEventListener('click',()=>{

})
*/


//Get all the possible moves for a 7x7 grid for computer
const computerLegalMoves = [];
for (let row = 0; row < 7; row++) {
  for (let col = 0; col < 7; col++) {
    computerLegalMoves.push([row, col]);
  }
}
computerLegalMoves.sort(() => Math.random() - 0.5);

function computerMove() {
  const battlegrid = grid2.childNodes;
  const cells = battlegrid[0].childNodes;
  const cellsArray = Array.from(cells);
  console.log(cellsArray);

  const coordinates = computerLegalMoves.pop();
  const attackResult = player2.gameboard.receiveAttack(
    coordinates[0],
    coordinates[1]
  );
  const cell = findCell(cellsArray, coordinates[0], coordinates[1]);
  if (attackResult == "Hit!") {
    hit(cell);
  } else if (attackResult == "Sunk!") {
    shipSunkDisplay(grid2, player2.gameboard.shipsList);
    sunk(cell);
  } else {
    miss(cell);
  }
  isPlayerOneTurn = false;
}

/*
 *Expand the above into separate modules like below rather than doing it in the event handler.
 *Maybe even separate them into another file
 */
function hit(cell) {
  const circle = document.createElement("div");
  circle.classList.add("isHit");
  cell.appendChild(circle);
  return true;
}

function sunk(cell) {
  shipSunkDisplay(grid1, player1.gameboard.shipsList);
  const circle = document.createElement("div");
  circle.classList.add("isHit");
  cell.appendChild(circle);
}

function miss(cell) {
  const circle = document.createElement("div");
  circle.classList.add("isMiss");
  cell.appendChild(circle);
}
/*
Need to add event listeners to the grids as well
Grid 1 is from player1.
So player1 receiveAttack() here, from player2
*/
grid1.addEventListener("click", (event) => {
  //Get the closest cell
  const cell = event.target.closest(".cell");

  if (cell && isPlayerOneTurn == false && !gameWinner) {
    if (!cell.querySelector(".isHit") && !cell.querySelector(".isMiss")) {
      //Now let's send the hit to the receiveAttack method of the player gameboard
      const row = `${cell.getAttribute("row")}`;
      const col = `${cell.getAttribute("col")}`;
      const attackResult = player1.gameboard.receiveAttack(row, col);

      if (attackResult == "Hit!") {
        hit(cell);
      } else if (attackResult == "Sunk!") {
        shipSunkDisplay(grid1, player1.gameboard.shipsList);
        sunk(cell);
      } else {
        miss(cell);
      }

      if (player1.gameboard.areAllShipsSunk() == true) {
        gameWinner = "Human";
        console.log("Human wins");
      }
      isPlayerOneTurn = true;
      computerMove();
    }
  }
});

/* 
Grid 2 is from player2
So player2 receiveAttack() here, from player1
*/

//This is a listener for a 2nd player if implemented.
/*
grid2.addEventListener("click", (event) => {
  //Get the closest cell
  const cell = event.target.closest(".cell");

  if (cell && isPlayerOneTurn == true && !gameWinner) {
    if (!cell.querySelector(".isHit") && !cell.querySelector(".isMiss")) {
      //Now let's send the hit to the receiveAttack method of the player gameboard
      const row = `${cell.getAttribute("row")}`;
      const col = `${cell.getAttribute("col")}`;
      const attackResult = player2.gameboard.receiveAttack(row, col);

      if (attackResult == "Hit!") {
        hit(cell);
      } else if (attackResult == "Sunk!") {
        shipSunkDisplay(grid2, player2.gameboard.shipsList);
        sunk(cell);
      } else {
        miss(cell);
      }

      if (player2.gameboard.areAllShipsSunk() == true) {
        gameWinner = "Computer";
        console.log("Computer wins");
      }
      isPlayerOneTurn = false;
    }
  }
});
*/

/*
Then append the elements to the DOM
*/
player2Area.appendChild(grid2);
player1Area.appendChild(grid1);
