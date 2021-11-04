/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a solid pyramid `height` characters tall
 * consisting of `#` characters.
 *
 *
 * Note, this PRINTS a pyramid, it does not RETURN a pyramid.
 *
 * @example
 * printSolidPyramid(2); // Prints the following:
 *  #
 * ###
 *
 * @example
 * printSolidPyramid(4); // Prints the following:
 *     #
 *    ###
 *   #####
 *  #######
 * #########
 *
 * @param {number} height - The height of the pyramid to print
 */
const printSolidPyramid = (height) => {
  const arr = [];
  let current = 1;
  let width = (height - 1) * 2 + 1; 

  for (let i = 0; i < height; i++) {
    let str = '#'.repeat(current);
    while(str.length < width) {
      str = str.padEnd(str.length + 1, ' ');
      str = str.padStart(str.length + 1, ' ');
    }
    arr.push(str);
    current += 2;
  }

  console.log(arr.join('\n'));
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function solidPyramidPrintTest(height) {
  console.log('');
  console.log(`Printing a SOLID PYRAMID of height ${height}:`);

  printSolidPyramid(height);
}

if (require.main === module) {
  solidPyramidPrintTest(1);
  solidPyramidPrintTest(2);
  solidPyramidPrintTest(3);
  solidPyramidPrintTest(6);
  solidPyramidPrintTest(10);
}

module.exports = printSolidPyramid;
