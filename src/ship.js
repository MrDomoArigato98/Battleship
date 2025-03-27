class Ship {
  constructor(length = 1) {
    this.length = length;
    this.hitCounter = 0;
  }
  hit() {
    if (!this.isSunk()) {
      this.hitCounter++;
    }
  }

  isSunk() {
    if (this.hitCounter === this.length) {
      return true;
    } else {
      return false;
    }
  }
}

export { Ship };
