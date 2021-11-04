/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints an "inverted" solid right triangle `height`
 * characters tall consisting of `#` characters.
 *
 * Note, this PRINTS a triangle, it does not RETURN a triangle.
 *
 * @example
 * printInvertedSolidRightTriangle(3); // Prints the following:
 * ###
 * ##
 * #
 *
 * @example
 * printInvertedSolidRightTriangle(4); // Prints the following:
 * ####
 * ###
 * ##
 * #
 *
 * @param {number} height - The height of the triangle to print
 */
const printInvertedSolidRightTriangle = (height) => {
  let current = height;
  const arr = [];

  for (let i = 0; i < height; i++) {
    arr.push('#'.repeat(current).padEnd(height, ' '));
    current--;
  }

  console.log(arr.join('\n'));
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function invertedSolidRightTriangleTest(height) {
  console.log('');
  console.log(`Printing a INVERTED SOLID RIGHT TRIANGLE of height ${height}:`);

  printInvertedSolidRightTriangle(height);
}

if (require.main === module) {
  invertedSolidRightTriangleTest(1);
  invertedSolidRightTriangleTest(2);
  invertedSolidRightTriangleTest(4);
  invertedSolidRightTriangleTest(6);
  invertedSolidRightTriangleTest(10);
}

module.exports = printInvertedSolidRightTriangle;
