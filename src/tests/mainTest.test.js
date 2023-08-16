/* eslint-disable prefer-const */

import { shipFactory } from "../factorys.js";
import { GameBoard } from "../factorys.js";

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

describe("board", () => {
  test("the board is created", () => {
    let boardGame = new GameBoard();
    let object = { ship: undefined, shipIndex: undefined };
    expect(boardGame.gameBoardArray[0][0]).toEqual(object);
  });
  test("cant place invalid ships", () => {
    let ship = shipFactory(4);
    let board = new GameBoard();
    expect(board.checkValidPlacement(ship.length, 8, 5, true)).toBe(false);
  });
});
