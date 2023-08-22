/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
let rows = 10;
let cols = 10;

// factory function for ships
function shipFactory(length) {
  return {
    length: length,
    hitTimes: 0,
    hit() {
      this.hitTimes++;
    },
    isSunk() {
      if (this.length === this.hitTimes) {
        return true;
      } else {
        return false;
      }
    },
  };
}

// class for creating gameboard
class GameBoard {
  constructor() {
    this.gameBoardArray = this.createGameBoard();
    this.missedAttacks = [];
    this.placedShips = [];
  }
  createGameBoard() {
    let array = [];
    let arrayItem = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arrayItem.push({ shipName: undefined, shipIndex: undefined });
      }
      array.push(arrayItem);
      arrayItem = [];
    }
    return array;
  }
  getGameBoard() {
    return this.gameBoardArray;
  }
  checkCollision(length, x, y, isHorizontal) {
    let i = 0;
    if (isHorizontal) {
      for (i = x; i < x + length; i++) {
        if (this.gameBoardArray[i][y].shipName !== undefined) return true;
      }
    }
    if (!isHorizontal) {
      for (i = y; i < y + length; i++) {
        if (this.gameBoardArray[x][i].shipName !== undefined) return true;
      }
    }
    return false;
  }
  checkValidPlacement(length, x, y, isHorizontal) {
    if (this.checkCollision()) return false;
    if (x > 10 || x < 0 || y > 10 || y < 0) return false;
    if (length + x > 10 && isHorizontal === true) return false;
    if (length + y > 10 && isHorizontal === false) return false;
    return true;
  }
  placeShip(ship, x, y, isHorizontal) {
    let i = 0;
    if (this.checkValidPlacement(ship.length, x, y, isHorizontal)) {
      if (isHorizontal) {
        for (i = x; i < x + ship.length; i++) {
          this.gameBoardArray[i][y].shipName = ship;
          this.gameBoardArray[i][y].shipIndex = i;
        }
      }
      if (!isHorizontal) {
        for (i = y; i < y + ship.length; i++) {
          this.gameBoardArray[x][i].shipName = ship;
          this.gameBoardArray[x][i].shipIndex = i;
        }
      }
      this.placedShips.push(ship);
    }
  }
  reciveAttack(x, y) {
    if (this.gameBoardArray[x][y].shipName === undefined)
      this.missedAttacks.push({ x: x, y: y });
    else {
      this.gameBoardArray[x][y].shipName.hit();
    }
  }
  allShipsSunk() {
    let i;
    for (i = 0; i < this.placedShips.length; i++) {
      if (this.placedShips[i].isSunk() === true) {
        return true;
      } else return false;
    }
  }
}

function playerFactory(name) {
  return {
    name: name,
    turn: false,
    getPlayerName() {
      return this.name;
    },
    checkTurn() {
      return this.turn;
    },
    changeTurn() {
      if (this.turn === true) this.turn = false;
      else this.turn = true;
    },
    attack(board, x, y) {
      if (this.turn) {
        board.reciveAttack(x, y);
        this.changeTurn();
      }
    },
  };
}

export { shipFactory, GameBoard, playerFactory, rows, cols };
