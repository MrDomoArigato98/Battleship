import { Ship } from "../ship";

test("Ship hit", () => {
  const ship = new Ship();
  ship.hit();
  ship.hit();
  expect(ship.hitCounter).toBe(2);
});
