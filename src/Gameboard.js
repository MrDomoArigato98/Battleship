import { Ship } from "./Ship";
/* So this is the Battleship class. This should have:
 * 1. Definition of a 7x7 grid
 * 2. Ability to place ships at (X,Y) coordinates by calling ship factory (it creates each ship)
 * 3. Gameboards should have a receiveAttack function that takes a pair of coordinates,
 * determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship,
 * or records the coordinates of the missed shot.
 * 4. Gameboards should be able to report whether or not all of their ships have been sunk.
 * 5. Gameboards should keep track of missed attacks so they can display them properly.
 */
class Gameboard {
  constructor() {
    this.missedAttacks = 0;
    this.numberOfShips = 0;
    this.numberOfShipsSunk = 0;
    this.allShipsSunk = false;
    this.shipsList = []; //Could also do this and append them to a list. Might be an easier option.

    //Might have ro replace these values with null instead, but we'll see as we go along.
    this.board = [
      [null, null, null, null, null, null, null], //[0][0], [0][1] etc ..
      [null, null, null, null, null, null, null], //[1][0], [1][1] etc ..
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    this.missedBoard = [
      [null, null, null, null, null, null, null], //[0][0], [0][1] etc ..
      [null, null, null, null, null, null, null], //[1][0], [1][1] etc ..
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
  }

  //Checks whether a ship is at [row][col], and if it is - call the hit function on it.
  receiveAttack(row, col) {
    //If there's a ship
    if (this.board[row][col] !== null && !this.board[row][col].isSunk()) {
      // Hit the ship
      this.board[row][col].hit();
      //Check if it sinks after that shot and it's underwater, if it isn't - make it underwateer
      if (
        this.board[row][col].underwater == false &&
        this.board[row][col].isSunk() == true
      ) {
        this.numberOfShipsSunk++;
        this.board[row][col].underwater = true;
        this.areAllShipsSunk(); // Can decide whether to end the game later with this
        return "Sunk!";
      } else {
        return "Hit!";
      }
    } else {
      this.missedBoard[row][col] = 1;
      //   console.table(this.missedBoard);
      this.missedAttacks++;
      return "Miss!";
    }
  }

  areAllShipsSunk() {
    if (this.numberOfShips == this.numberOfShipsSunk) {
      return true;
    } else {
      return false;
    }
  }

  placeShips(row, col, direction, length) {
    const ship = new Ship(length); // Need a length.

    //Check to not allow placing multiple ships in the same place
    if (this.board[row][col] !== null) {
      return false;
    }
    //The ship should also be able to span going horizontally or vertically. So Either increment the X or the Y
    if (direction == "Horizontal") {
      //Horizontal
      if (col - 1 + ship.length > 6) {
        return "Ship placement out of bounds Horizontally";
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[row][col + i] = ship;
      }
    } else {
      if (row-1 + ship.length > 6) {
        return "Ship placement out of bounds Vertically";
      }
      // Vertical
      for (let i = 0; i < ship.length; i++) {
        this.board[row + i][col] = ship;
      }
    }
    this.numberOfShips++;
    this.shipsList.push([ship, row, col, direction, length]); // Might be useful at some point.
    return true;
  }
}

export { Gameboard };
