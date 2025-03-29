import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

test("Creates ship Horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(1, 5, "Horizontal", 2)).toBe(true);
});

test("Creates ship Vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(1, 1, "Vertical", 2)).toBe(true);
});

test("Ship out of bounds check Horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(6, 6, "Horizontal", 2)).toBe(
    "Ship placement out of bounds Horizontally"
  );
});

test("Ship out of bounds check Vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShips(6, 0, "Vertical", 2)).toBe(
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
  expect(gameboard.receiveAttack(2, 4)).toBe("Miss!");
  expect(gameboard.missedAttacks).toBe(2);
});

test("Ship receives attack", () => {
  const gameboard = new Gameboard();
  gameboard.placeShips(2, 2, "Horizontal", 2);
  expect(gameboard.receiveAttack(2, 3)).toBe("Hit!");
});

test("One ship on gameboard receives attacks, all ships are sunk", () => {
  const gameboard = new Gameboard();
  gameboard.placeShips(2, 2, "Horizontal", 2);
  expect(gameboard.receiveAttack(2, 3)).toBe("Hit!");
  expect(gameboard.receiveAttack(2, 2)).toBe("Sunk!");
  expect(gameboard.areAllShipsSunk()).toBe(true);
});

test("Two ships on gameboard, both receive attacks and sink", () => {
  const gameboard = new Gameboard();
  gameboard.placeShips(2, 2, "Horizontal", 2);
  gameboard.placeShips(4, 4, "Vertical", 2);
  expect(gameboard.receiveAttack(2, 2)).toBe("Hit!");
  expect(gameboard.receiveAttack(2, 3)).toBe("Sunk!");

  expect(gameboard.receiveAttack(4, 4)).toBe("Hit!");
  expect(gameboard.receiveAttack(5, 4)).toBe("Sunk!");
  expect(gameboard.receiveAttack(3, 4)).toBe("Miss!");
  expect(gameboard.areAllShipsSunk()).toBe(true);
});
