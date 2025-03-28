/*
 Need a function to create a 7x7 grid and populate the ships on the grid location too.
*/
export function createGrid() {
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
