import { Gameboard } from "./Gameboard";
class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  placeShipsTest() {
    this.gameboard.placeShips(2, 2, "Horizontal", 2);
    this.gameboard.placeShips(4, 4, "Vertical", 2);
    this.gameboard.placeShips(5, 2, "Vertical", 2);
    this.gameboard.placeShips(0, 0, "Vertical", 2);
    return true;
  }

  placeShipsRandom() {
    for (let shipLength = 4; shipLength > 0; shipLength--) {
      //Decide whether it's Horizontal or Vertical
      let direction = "";
      if (random(2) % 2 == 0) {
        direction = "Horizontal";
      } else {
        direction = "Vertical";
      }
      //So if it's 4, I'll have to do row Min 0, max 6(7) and be able to place it so it has to be between 0 and 2

      if (direction == "Horizontal") {
        let isPlaceable = false;
        while (!isPlaceable) {
          isPlaceable = true;
          let row = random(6);
          let col = random(6 - shipLength); // 6 - length of ship to get the ceiling
          // 2 + 4 (will end up being 6 loops)
          // 0 + 3 (will end up doing 3 loops)
          for (let range = col; range < col + shipLength; range++) {
            if (this.gameboard.board[row][range] !== null) {
              isPlaceable = false;
            }
          }
          if (isPlaceable) {
            this.gameboard.placeShips(row, col, direction, shipLength);
          }
        }
      } else {
        //Direction is vertical
        let isPlaceable = false;
        while (!isPlaceable) {
          isPlaceable = true;
          let row = random(6 - shipLength);
          let col = random(6); // 6 - length of ship to get the ceiling
          // 2 + 4 (will end up being 6 loops)
          // 0 + 3 (will end up doing 3 loops)
          for (let range = row; range < row + shipLength; range++) {
            if (this.gameboard.board[range][col] !== null) {
              isPlaceable = false;
            }
          }
          if (isPlaceable) {
            this.gameboard.placeShips(row, col, direction, shipLength);
          }
        }
      }
    }
    return true;
  }
}

function random(range) {
  return Math.floor(Math.random() * (range + 1));
}
export { Player };
