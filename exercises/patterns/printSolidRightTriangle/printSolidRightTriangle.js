/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a solid right triangle `height` characters tall
 * consisting of `#` characters.
 *
 * Note, this PRINTS a triangle, it does not RETURN a triangle.
 *
 * @example
 * printSolidRightTriangle(3); // Prints the following:
 * #
 * ##
 * ###
 *
 * @example
 * printSolidRightTriangle(4); // Prints the following:
 * #
 * ##
 * ###
 * ####
 *
 * @param {number} height - The height of the triangle to print
 */
const printSolidRightTriangle = (height) => {
  const arr = [];

  for (let i = 1; i <= height; i++) {
    arr.push('#'.repeat(i).padEnd(height, ' '));

  }

  console.log(arr.join('\n'));
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function solidRightTrianglePrintTest(height) {
  console.log('');
  console.log(`Printing a SOLID RIGHT TRIANGLE of height ${height}:`);

  printSolidRightTriangle(height);
}

if (require.main === module) {
  /*
    Sanity checking console output is challenging. Think about how you might do it.

    For now, we simply print out a few example inputs and verify by sight that they're
    what we expect.
  */

  solidRightTrianglePrintTest(1);
  solidRightTrianglePrintTest(2);
  solidRightTrianglePrintTest(4);
  solidRightTrianglePrintTest(6);
  solidRightTrianglePrintTest(10);
}

module.exports = printSolidRightTriangle;
