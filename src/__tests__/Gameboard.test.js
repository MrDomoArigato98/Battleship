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


