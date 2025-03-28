class Ship {
  constructor(length = 1) {
    this.length = length;
    this.hitCounter = 0;
    this.underwater = false;
  }
  hit() {
    if (!this.isSunk()) {
      this.hitCounter++;
      return true
    }else{
      return false
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
