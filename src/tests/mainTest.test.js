/* eslint-disable prefer-const */

import { experiments } from "webpack";
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
  test("board can place ships", () => {
    let ship = shipFactory(2);
    let board = new GameBoard();
    board.placeShip(ship, 2, 3, true);
    expect(board.getGameBoard()[2][3]).toEqual({
      shipName: ship,
      shipIndex: 2,
    });
    expect(board.getGameBoard()[3][3]).toEqual({
      shipName: ship,
      shipIndex: 3,
    });
  });
  test("ships can recive attacks", () => {
    let ship = shipFactory(3);
    let board = new GameBoard();
    board.placeShip(ship, 2, 1, true);
    board.reciveAttack(2, 1);
    board.reciveAttack(3, 1);
    expect(ship.hitTimes).toBe(2);
  });
  test("all ships are sunk", () => {
    let ship1 = shipFactory(2);
    let ship2 = shipFactory(3);
    let ship3 = shipFactory(2);
    let board = new GameBoard();
    board.placeShip(ship1, 1, 1, true);
    board.placeShip(ship2, 1, 2, true);
    board.placeShip(ship3, 5, 1, false);
    board.reciveAttack(1, 1);
    board.reciveAttack(2, 1);
    board.reciveAttack(1, 2);
    board.reciveAttack(2, 2);
    board.reciveAttack(3, 2);
    board.reciveAttack(5, 1);
    board.reciveAttack(5, 2);
    expect(board.allShipsSunk()).toBe(true);
  });
});
