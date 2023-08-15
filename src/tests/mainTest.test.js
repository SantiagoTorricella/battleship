/* eslint-disable prefer-const */

import shipFactory from "../factorys.js";

test("length of ship is 3", () => {
  const ship = shipFactory(3);
  expect(ship.length).toBe(3);
});
