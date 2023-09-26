import { rows } from "./factorys.js";
import { cols } from "./factorys.js";
import { GameBoard } from "./factorys.js";
import { shipFactory } from "./factorys.js";

function aiFactory() {
  return {
    attackedArray: [],
    aiAttack(board) {
      let flag = true;
      while (flag) {
        let x = Math.floor(Math.random() * rows);
        let y = Math.floor(Math.random() * cols);
        if (!this.attackedArray.some((e) => e.x === x && e.y === y)) {
          this.attackedArray.push({ x: x, y: y });
          board.reciveAttack(x, y);
          flag = false;
          return [x, y];
        }
      }
    },
  };
}

export { aiFactory };
