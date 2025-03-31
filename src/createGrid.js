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

export function populateShips(grid, gameboard, isHuman) {
  //Just going through the childnodes to get the cells from that grid

  const battlegrid = grid.childNodes;
  const cells = battlegrid[0].childNodes;
  const cellsArray = Array.from(cells);
  const board = gameboard.board;
  const shipsList = gameboard.shipsList;

  let index = 1;
  for (let ship of shipsList) {
    const row = ship[1];
    const col = ship[2];
    const direction = ship[3];
    const length = ship[4];

    if (direction == "Horizontal") {
      for (let i = col; i < col + length; i++) {
        const cell = findCell(cellsArray, row, i);
        cell.classList.add("hasShip");
        cell.classList.add(`ship${index}`);
        if (!isHuman) {
          //   cell.classList.add("isAi");
        }
      }
    }

    if (direction == "Vertical") {
      for (let i = row; i < row + length; i++) {
        const cell = findCell(cellsArray, i, col);
        cell.classList.add("hasShip");
        cell.classList.add(`ship${index}`);
        if (!isHuman) {
          //   cell.classList.add("isAi");
        }
      }
    }
    index++;
  }
}
//Function to show that the full ship is sunk
export function shipSunkDisplay(grid, shipsList) {
  const battlegrid = grid.childNodes;
  const cells = battlegrid[0].childNodes;
  const cellsArray = Array.from(cells);

  for (let ship of shipsList) {
    const row = ship[1];
    const col = ship[2];
    const direction = ship[3];
    const length = ship[4];

    if (ship[0].underwater == true) {
      if (direction == "Horizontal") {
        for (let i = col; i < col + length; i++) {
          const cell = findCell(cellsArray, row, i);
          cell.classList.add("isSunk");
        }
      }

      if (direction == "Vertical") {
        for (let i = row; i < row + length; i++) {
          const cell = findCell(cellsArray, i, col);
          cell.classList.add("isSunk");
        }
      }
    }
  }
}

export function findCell(cells, row, col) {
  return Array.from(cells).find(
    (cell) =>
      cell.getAttribute("row") === String(row) &&
      cell.getAttribute("col") === String(col)
  );
}
