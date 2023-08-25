import { aiFactory } from "./ai.js";
import { shipFactory } from "./factorys.js";
import { playerFactory } from "./factorys.js";
import { GameBoard } from "./factorys.js";
import "./styles/style.css";

function createBoard(boardName) {
  const playerBoard = document.querySelector(`.${boardName}`);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("x", i);
      cell.setAttribute("y", j);
      playerBoard.appendChild(cell);
    }
  }
}
createBoard("player-board");
createBoard("ai-board");
