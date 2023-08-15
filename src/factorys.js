/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

function shipFactory(length) {
  return {
    length: length,
    hitTimes: 0,
    isShipSunk: false,
    hit() {
      hitTimes++;
    },
    isSunk() {
      if (this.length === hitTimes) {
        this.isShipSunk = true;
      }
      return this.isShipSunk;
    },
  };
}

export default shipFactory;
