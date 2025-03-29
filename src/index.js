import "./reset.css";
import "./style.css";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Ship } from "./Ship";
import { createGrid, populateShips } from "./createGrid";

let isPlayerOneTurn = true;
let gameWinner = "";
/*
Get both player areas using their ID.
*/
const player1Area = document.getElementById("player1-area");
const player2Area = document.getElementById("player2-area");

/*
Create the players, and the gameboard.
*/
const player1 = new Player();
const player2 = new Player();
player1.placeShipsTest();
player2.placeShipsTest();

/*
Then create the grids based on the gameboards.
*/
const grid1 = createGrid(player1.gameboard);
const grid2 = createGrid(player2.gameboard);

populateShips(grid1, player1.gameboard);
populateShips(grid2, player2.gameboard);

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
        const circle = document.createElement("div");
        circle.classList.add("isHit");
        cell.appendChild(circle);
      } else {
        const circle = document.createElement("div");
        circle.classList.add("isMiss");
        cell.appendChild(circle);
      }

      if (player1.gameboard.areAllShipsSunk() == true) {
        gameWinner = ("Player2")
        console.log("Winner is: "+gameWinner)
      }
      isPlayerOneTurn = true;
    }
  }
});

/* 
Grid 2 is from player2
So player2 receiveAttack() here, from player1
*/
grid2.addEventListener("click", (event) => {
  //Get the closest cell
  const cell = event.target.closest(".cell");

  if (cell && isPlayerOneTurn == true && !gameWinner ) {
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
        const circle = document.createElement("div");
        circle.classList.add("isHit");
        cell.appendChild(circle);
      } else {
        const circle = document.createElement("div");
        circle.classList.add("isMiss");
        cell.appendChild(circle);
      }

      if (player2.gameboard.areAllShipsSunk() == true) {
        gameWinner = ("Player1")
        console.log("Winner is: "+gameWinner)
      }
      isPlayerOneTurn = false;
    }
  }
});

/*
Then append the elements to the DOM
*/
player1Area.appendChild(grid1);
player2Area.appendChild(grid2);

// player1Area.classList.toggle("visible")
