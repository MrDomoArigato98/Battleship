import { Ship } from "../Ship.js";

test("Ship hit", () => {
  const ship = new Ship();
  ship.hit();
  expect(ship.hitCounter).toBe(1);
});

test("Ship not sunk", () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("Ship is sunk", () => {
    const ship = new Ship(2)
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
  