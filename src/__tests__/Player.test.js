import { Player } from "../Player";

test("Places ships on gameboard", () => {
    const player = new Player();

    expect(player.placeShipsTest()).toBe(true)
});



test("Places random ships on gameboard", () => {
    const player = new Player();

    expect(player.placeShipsRandom()).toBe(true)
});