import { rows } from "./factorys.js";
import { cols } from "./factorys.js";
import { GameBoard } from "./factorys.js";
import { shipFactory } from "./factorys.js";

function aiFactory() {
  return {
    turn: false,
    attackedArray: [],
    makeRandomNumber() {
      let x = Math.floor(Math.random() * rows);
      let y = Math.floor(Math.random() * cols);
      return [x, y];
    },
    aiAttack(board) {
      let randomNumbers = this.makeRandomNumber();
      let x = randomNumbers[0];
      let y = randomNumbers[1];
      let flag = true;
      while (flag) {
        if (
          this.turn === true &&
          !this.attackedArray.some((e) => e.x === x && e.y === y)
        ) {
          this.attackedArray.push({ x: x, y: y });
          board.gameBoardArray[x][y].shipName.hit();
          flag = false;
        }
      }
      flag = true;
    },
  };
}

export default aiFactory;
