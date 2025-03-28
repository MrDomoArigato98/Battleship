import "./reset.css";
import "./style.css";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Ship } from "./Ship";
import { createGrid, populateShips, shipSunkDisplay } from "./createGrid";
import { computerAttackCoordinates } from "../computer";

let isPlayerOneTurn = false;
let gameWinner = "";
/*
Get both player areas using their ID.
*/
const player1Area = document.getElementById("player1-area");
const player2Area = document.getElementById("player2-area");

/*
Create the players, and the gameboard.
Player 2 is the Human. Player 1 is the computer.
*/
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
        const circle = document.createElement("div");
        circle.classList.add("isHit");
        cell.appendChild(circle);
      } else if (attackResult == "Sunk!") {
        shipSunkDisplay(grid1, player1.gameboard.shipsList);
        const circle = document.createElement("div");
        circle.classList.add("isHit");
        cell.appendChild(circle);
      } else {
        const circle = document.createElement("div");
        circle.classList.add("isMiss");
        cell.appendChild(circle);
      }

      if (player1.gameboard.areAllShipsSunk() == true) {
        gameWinner = "Human";
        console.log("Human wins");
      }
      isPlayerOneTurn = true;
    }
  }
});

/*
 *Expand the above into separate modules like below rather than doing it in the event handler.
 *Maybe even separate them into another file
 */
function hit() {}

function sunk() {}

function miss() {}
const computerSavedMoves = [];
function computerMove() {
  const coordinates = computerAttackCoordinates();
  const attackResult = player2.gameboard.receiveAttack(
    coordinates[0],
    coordinates[1]
  );

  isPlayerOneTurn = true;
}
/* 
Grid 2 is from player2
So player2 receiveAttack() here, from player1
*/
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
        const circle = document.createElement("div");
        circle.classList.add("isHit");
        cell.appendChild(circle);
      } else if (attackResult == "Sunk!") {
        shipSunkDisplay(grid2, player2.gameboard.shipsList);
        const circle = document.createElement("div");
        circle.classList.add("isHit");
        cell.appendChild(circle);
      } else {
        const circle = document.createElement("div");
        circle.classList.add("isMiss");
        cell.appendChild(circle);
      }

      if (player2.gameboard.areAllShipsSunk() == true) {
        gameWinner = "Computer";
        console.log("Computer wins");
      }
      isPlayerOneTurn = false;
    }
  }
});

/*
Then append the elements to the DOM
*/
player2Area.appendChild(grid2);
player1Area.appendChild(grid1);
