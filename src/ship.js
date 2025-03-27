class Ship {
  constructor(length = 1) {
    this.length = length;
    this.hitCounter = 0;
    this.isSunk = false;
  }
  hit() {
    this.hitCounter++;
  }
}

export { Ship };
