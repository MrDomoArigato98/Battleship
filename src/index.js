import "./reset.css";
import "./style.css";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Ship } from "./Ship";

const player1Area = document.getElementById("player1-area")
const player2Area = document.getElementById("player2-area")
/*
 Need a function to create a 7x7 grid and populate the ships on the grid location too.
*/
function createGrid() {
  const playerWarzone = document.createElement("div");
  playerWarzone.classList.add("play-area")

  const battlegrid = document.createElement("div");
  battlegrid.classList.add("battlegrid");

  playerWarzone.appendChild(battlegrid);

  //Nested loop to make the [row][col] Array
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("row", row);
      cell.setAttribute("col", col);
      battlegrid.appendChild(cell);
    }
  }

  return playerWarzone;
}

const grid = createGrid();
const grid2 = createGrid();
player1Area.appendChild(grid)
player2Area.appendChild(grid2)
