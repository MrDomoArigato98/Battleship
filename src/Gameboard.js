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
    this.allShipsSunk;
    this.board = [
      [0, 0, 0, 0, 0, 0, 0], //[0][0], [0][1] etc ..
      [0, 0, 0, 0, 0, 0, 0], //[1][0], [1][1] etc ..
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
  }
  receiveAttack(x, y) {}

  placeShips(row, col) {
    const ship = new Ship(); // Need a length.

    //The ship should also be able to span going horizontally or vertically. So Either increment the X or the Y
    //Horizontal
    for (let i = 0; i < ship.length; i++) {
      this.board[row][col + 0] = ship;
    }

    // Vertical
    for (let i = 0; i < ship.length; i++) {
      this.board[row + 1][col] = ship;
    }
  }
}

export { Gameboard };
