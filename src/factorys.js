/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

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
        return this.isShipSunk;
      }
    },
  };
}

function gameBoardFactory() {
  return {};
}

export default shipFactory;
