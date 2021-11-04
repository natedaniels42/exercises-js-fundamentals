/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an odd integer of `height`, prints "plus" pattern `height` characters
 * tall consisting of `#` characters.
 *
 * Note:
 * 1. The input must be an ODD integer or else printing a "plus" pattern
 * isn't possible since there's no "middle point" for the two lines to cross.
 * 2. This PRINTS a plus pattern, it does not RETURN anything.
 *
 * @example
 * printPlus(3); // Prints the following:
 *  #
 * ###
 *  #
 *
 * @example
 * printPlus(5); // Prints the following:
 *   #
 *   #
 * #####
 *   #
 *   #
 *
 * @param {number} height - The height of the plus symbol to print. It must be
 *  an odd integer.
 */
const printPlus = (height) => {
  const mid = Math.floor(height / 2);
  const arr = [];

  for (let i = 0; i < height; i++) {
    if (i === mid) {
      arr.push('#'.repeat(height));
    } else {
      let str = '#';
      while (str.length < height) {
        str = str.padStart(str.length + 1, ' ');
        str = str.padEnd(str.length + 1, ' ');
      }
      arr.push(str);
    }
  }

  console.log(arr.join('\n'));
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function plusPrintTest(height) {
  console.log('');
  console.log(`Printing a PLUS SYMBOL of height ${height}:`);

  printPlus(height);
}

if (require.main === module) {
  plusPrintTest(1);
  plusPrintTest(3);
  plusPrintTest(5);
  plusPrintTest(7);
  plusPrintTest(9);
}

module.exports = printPlus;
