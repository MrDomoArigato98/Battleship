import { computerAttackCoordinates } from "../../computer";

test("Gets random coordinates", () => {
  const coordinates = computerAttackCoordinates();
  expect(coordinates).toHaveLength(2);
  expect(coordinates[0]).toBeLessThanOrEqual(6);
  expect(coordinates[1]).toBeGreaterThanOrEqual(0);
});
