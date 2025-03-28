import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

test("Creates ship Horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(1, 5, "Horizontal", 2)).toBe("Ship created");
});

test("Creates ship Vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(1, 1, "Vertical", 2)).toBe("Ship created");
});

test("Ship out of bounds check Horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(6, 6, "Horizontal", 2)).toBe(
    "Ship placement out of bounds Horizontally"
  );
});

test("Ship out of bounds check Vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(0, 6, "Vertical", 2)).toBe(
    "Ship placement out of bounds Vertically"
  );
});

test("Ship receives attack", () => {
  const gameboard = new Gameboard();
  gameboard.placeShips(2, 2, "Vertical", 2);
  expect(gameboard.receiveAttack(2, 2)).toBe("Hit!");
});

test("No ship in location", () => {
  const gameboard = new Gameboard();
  gameboard.placeShips(2, 2, "Vertical", 2);
  expect(gameboard.receiveAttack(2, 3)).toBe("Miss!");
});

test("Ship receives attack", () => {
  const gameboard = new Gameboard();
  gameboard.placeShips(2, 2, "Horizontal", 2);
  expect(gameboard.receiveAttack(2, 3)).toBe("Hit!");
});

test("Ship receives attack, all ships sink", () => {
  const gameboard = new Gameboard();
  gameboard.placeShips(2, 2, "Horizontal", 2);
  expect(gameboard.receiveAttack(2, 3)).toBe("Hit!");
  expect(gameboard.receiveAttack(2, 2)).toBe("Sunk!");
  expect(gameboard.areAllShipsSunk()).toBe(true);
});
