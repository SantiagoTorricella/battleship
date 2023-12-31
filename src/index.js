import { aiFactory } from "./ai.js";
import { shipFactory } from "./factorys.js";
import { playerFactory } from "./factorys.js";
import { GameBoard } from "./factorys.js";
import "./styles/style.css";

// DOM references
const intialModal = document.querySelector(".initial-modal");
const endModal = document.querySelector(".end-modal");
const winnerHeader = document.querySelector(".winner-header");
const replayButton = endModal.querySelector("button");
const button = document.querySelector("#rotate-button");
const boardPlacement = document.querySelector(".setup-board");
const playerBoardDom = document.querySelector(".player-board");
const aiBoardDom = document.querySelector(".ai-board");

// create gameBoards
let playerBoard = new GameBoard();
let aiBoard = new GameBoard();

// create ai
let ai = aiFactory();

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
/* function colorShips() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (aiBoard.gameBoardArray[i][j].shipName != undefined) {
        let cell = aiBoardDom.querySelector(`[data-x="${i}"][data-y="${j}"]`);
        cell.style.backgroundColor = "red";
      }
    }
  }
}
colorShips(); */

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

let aiCell = aiBoardDom.querySelectorAll(".cell");

function playerAttack(cell) {
  let x = Number(cell.getAttribute("data-x"));
  let y = Number(cell.getAttribute("data-y"));
  aiBoard.reciveAttack(x, y);
  colorMissedAttacks(x, y, cell);
  colorGoodAttacks(x, y, cell);
  let aiArray = ai.aiAttack(playerBoard);
  colorAiMissedAttacks(aiArray);
  colorAiGoodAttacks(aiArray);
  isGameFinished();
}

function colorGoodAttacks(x, y, cell) {
  if (aiBoard.gameBoardArray[x][y].shipName != undefined)
    cell.style.backgroundColor = "red";
}

function colorMissedAttacks(x, y, cell) {
  if (aiBoard.gameBoardArray[x][y].shipName === undefined)
    cell.style.backgroundColor = "gray";
}

function colorAiMissedAttacks(array) {
  let x = array[0];
  let y = array[1];
  if (playerBoard.gameBoardArray[x][y].shipName === undefined) {
    let cell = playerBoardDom.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    cell.style.backgroundColor = "gray";
  }
}

function colorAiGoodAttacks(array) {
  let x = array[0];
  let y = array[1];
  if (playerBoard.gameBoardArray[x][y].shipName != undefined) {
    let cell = playerBoardDom.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    cell.style.backgroundColor = "red";
  }
}

aiCell.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("hit")) return;
    else {
      playerAttack(e);
      e.classList.add("hit");
    }
  });
});

placePlayerShips();

function isGameFinished() {
  if (
    aiBoard.placedShips.every((ship) => {
      return ship.sunk === true;
    })
  ) {
    endModal.showModal();
    winnerHeader.innerText = "Congratulations captain!!! You Won";
    return true;
  }

  if (
    playerBoard.placedShips.every((ship) => {
      return ship.sunk === true;
    })
  ) {
    endModal.showModal();
    winnerHeader.innerText = "Better luck next time captain";
    return true;
  } else return false;
}

replayButton.addEventListener("click", () => {
  location.reload();
});
