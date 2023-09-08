import { aiFactory } from "./ai.js";
import { shipFactory } from "./factorys.js";
import { playerFactory } from "./factorys.js";
import { GameBoard } from "./factorys.js";
import "./styles/style.css";

// DOM references
const intialModal = document.querySelector(".initial-modal");
const button = document.querySelector("#rotate-button");
const boardPlacement = document.querySelector(".setup-board");
const playerBoardDom = document.querySelector(".player-board");

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

// variable declaration
const playerShipsArray = [
  playerDestroyer,
  playerSubmarine,
  playerCruiser,
  playerBattleship,
  playerCarrier,
];
let isVertical = true;

intialModal.showModal();

createBoard("player-board");
createBoard("ai-board");
createSetUpBoard();
placeAiShips();

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

function createSetUpBoard() {
  const board = document.querySelector(".setup-board");
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

// place ai ships in the ai-board
function placeAiShips() {
  aiBoard.placeRandomShip(aiDestroyer);
  aiBoard.placeRandomShip(aiSubmarine);
  aiBoard.placeRandomShip(aiCruiser);
  aiBoard.placeRandomShip(aiBattleship);
  aiBoard.placeRandomShip(aiCarrier);
}
// color aiships
function colorShips() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (aiBoard.gameBoardArray[i][j].shipName != undefined) {
        let board = document.querySelector(".ai-board");
        let cell = board.querySelector(`[data-x="${i}"][data-y="${j}"]`);
        cell.style.backgroundColor = "red";
      }
    }
  }
}
colorShips();

const cellPlacement = boardPlacement.querySelectorAll(".cell");

// color ships from the player
function colorPlayerShips() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (playerBoard.gameBoardArray[i][j].shipName != undefined) {
        let cell = playerBoardDom.querySelector(
          `[data-x="${i}"][data-y="${j}"]`
        );
        let cellSetUp = boardPlacement.querySelector(
          `[data-x="${i}"][data-y="${j}"]`
        );
        cell.style.backgroundColor = "green";
        cellSetUp.style.backgroundColor = "green";
      }
    }
  }
}

// rotate ship placement
button.addEventListener("click", () => {
  isVertical = !isVertical;
  if (button.innerText === "Rotate: y") {
    button.innerText = "Rotate: x";
  } else button.innerText = "Rotate: y";
});

// place player ships
function placePlayerShips() {
  let i = 0;
  cellPlacement.forEach((e) => {
    e.addEventListener("click", () => {
      let x = Number(e.getAttribute("data-x"));
      let y = Number(e.getAttribute("data-y"));
      if (playerBoard.placeShip(playerShipsArray[i], x, y, isVertical)) i++;
      colorPlayerShips();
      if (i === 5) {
        intialModal.close();
      }
    });
  });
}

placePlayerShips();
