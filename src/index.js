import { aiFactory } from "./ai.js";
import { shipFactory } from "./factorys.js";
import { playerFactory } from "./factorys.js";
import { GameBoard } from "./factorys.js";
import "./styles/style.css";

// create gameBoards
let playerBoard = new GameBoard();
let aiBoard = new GameBoard();

// create all ships in the game
let playerDestroyer = shipFactory(2);
let playerSubmarine = shipFactory(3);
let playerCruiser = shipFactory(3);
let playerBattleship = shipFactory(4);
let playerCarrier = shipFactory(5);

let aiDestroyer = shipFactory(2);
let aiSubmarine = shipFactory(3);
let aiCruiser = shipFactory(3);
let aiBattleship = shipFactory(4);
let aiCarrier = shipFactory(5);

// create cells for the gameboard
function createBoard(boardName) {
  const board = document.querySelector(`.${boardName}`);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = i;
      cell.dataset.y = j;
      board.appendChild(cell);
    }
  }
}

createBoard("ai-board");

// place ai ships in the ai-board
function placeAiShips() {
  aiBoard.placeRandomShip(aiDestroyer);
  aiBoard.placeRandomShip(aiSubmarine);
  aiBoard.placeRandomShip(aiCruiser);
  aiBoard.placeRandomShip(aiBattleship);
  aiBoard.placeRandomShip(aiCarrier);
}

function colorShips() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (aiBoard.gameBoardArray[i][j].shipName != undefined) {
        let cell = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
        cell.style.backgroundColor = "red";
      }
    }
  }
}

placeAiShips();
colorShips();

console.log(aiBoard.gameBoardArray);
