import "./reset.css";
import "./style.css";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Ship } from "./Ship";
import { createGrid, populateShips } from "./createGrid";

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
const grid = createGrid(player1.gameboard);
const grid2 = createGrid(player2.gameboard);

populateShips(grid, player1.gameboard);
populateShips(grid2, player2.gameboard);

/*
Need to add event listeners to the grids as well
*/

grid.addEventListener("click", (event) => {
  //Get the closest cell
  const cell = event.target.closest(".cell");

  if (cell) {
    if (!cell.querySelector(".isHit")) {
      const circle = document.createElement("div");
      circle.classList.add("isHit");
      cell.appendChild(circle);
    }
  }
});

grid2.addEventListener("click", (event) => {
    //Get the closest cell
    const cell = event.target.closest(".cell");
  
    if (cell) {
      if (!cell.querySelector(".isHit")) {
        const circle = document.createElement("div");
        circle.classList.add("isHit");
        cell.appendChild(circle);
      }
    }
  });
/*
Then append the elements to the DOM
*/
player1Area.appendChild(grid);
player2Area.appendChild(grid2);

// player1Area.classList.toggle("visible")
