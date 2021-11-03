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
 * printHollowPyramid(2); // Prints the following:
 *  #
 * ###
 *
 * @example
 * printHollowPyramid(5); // Prints the following:
 *     #
 *    # #
 *   #   #
 *  #     #
 * #########
 *
 * @param {number} height - The height of the pyramid to print
 */
const printHollowPyramid = (height) => {
  let length = height * 2 - 1;
  const arr = ['#'.repeat(length)];
  for (let i = 1; i < height; i++) {
    let left = 0;
    let right = length - 0 - 1;
    let str1 = '';
    let str2 = '';
    while (left <= right) {
      if (left === right && left === i) {
        str1 += '#';
      } else if (left === right) {
        str1 += ' ';
      } else if (left === i) {
        str1 += '#';
        str2 = `#${str2}`;
      } else {
        str1 += ' ';
        str2 = ` ${str2}`;
        
      }
      left++;
      right--;
    }
    arr.unshift(str1 + str2);
  }
  console.log(arr.join('\n'));
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowPyramidPrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW PYRAMID of height ${height}:`);

  printHollowPyramid(height);
}

if (require.main === module) {
  hollowPyramidPrintTest(1);
  hollowPyramidPrintTest(2);
  hollowPyramidPrintTest(3);
  hollowPyramidPrintTest(6);
  hollowPyramidPrintTest(8);
}



module.exports = printHollowPyramid;
