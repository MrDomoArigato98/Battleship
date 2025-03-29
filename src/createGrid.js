import { Gameboard } from "./Gameboard";
/*
 Need a function to create a 7x7 grid and populate the ships on the grid location too.
*/
export function createGrid(gameboard = Gameboard) {
  const playerWarzone = document.createElement("div");
  playerWarzone.classList.add("play-area");

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

export function populateShips(grid, gameboard) {
  const battlegrid = grid.childNodes;
  const cells = battlegrid[0].childNodes;

  const cellsArray = Array.from(cells);
  const board = gameboard.board;
  console.log(gameboard);

  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      if (board[row][col] !== null) {
        const cell = findCell(cellsArray, row, col);
        cell.classList.add("hasShip");
      }
    }
  }
}

function findCell(cells, row, col) {
  return Array.from(cells).find(
    (cell) =>
      cell.getAttribute("row") === String(row) &&
      cell.getAttribute("col") === String(col)
  );
}
