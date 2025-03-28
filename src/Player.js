import { Gameboard } from "./Gameboard";
class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  placeShipsTest() {
    this.gameboard.placeShips(2, 2, "Horizontal", 2);
    this.gameboard.placeShips(4, 4, "Vertical", 2);
    return true;
  }
}

export { Player };
