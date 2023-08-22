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
      if (
        board.gameBoardArray[x][y].shipName !== undefined &&
        this.turn === true
      ) {
        board.gameBoardArray[x][y].shipName.hit();
        this.attackedArray.push({ x: x, y: y });
      }
    },
  };
}

let board = new GameBoard();
let ai = aiFactory();
ai.turn = true;
ai.aiAttack(board);
console.log(ai.attackedArray);

export default aiFactory;
