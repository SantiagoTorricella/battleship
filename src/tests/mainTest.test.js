/* eslint-disable prefer-const */

import shipFactory from "../factorys.js";

test("length of ship is 3", () => {
  const ship = shipFactory(3);
  expect(ship.length).toBe(3);
});

test("ship is hit", () => {
  const ship = shipFactory(3);
  ship.hit();
  expect(ship.hitTimes).toBe(1);
});

test("ship is sunk", () => {
  const ship = shipFactory(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
