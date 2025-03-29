/*
 * Could append [row][col] that has a ship and try adjacent values
 * [[row,col],[row][col]]
 */

function computerAttackCoordinates() {
  const randomRow = random(6);
  const randomCol = random(6);

  return [randomRow, randomCol];
}

function random(range) {
  return Math.floor(Math.random() * (range + 1));
}

export { computerAttackCoordinates };
