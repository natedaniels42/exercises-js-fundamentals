/**
 * Determine whether the given integer is a perfect square.
 *
 * An integer `n` is a perfect square if there is some other integer `k`
 * such that `k * k === n`. That is, if the square root of `n` is also an
 * integer.
 *
 * Warning: If you use Math.sqrt, you will get incorrect answers. Try to
 * find another way.
 *
 * @example
 * isPerfectSquare(-1); // => false (no integer squared can be negative)
 * isPerfectSquare(0); // => true
 * isPerfectSquare(1); // => true
 * isPerfectSquare(2); // => false
 * isPerfectSquare(9); // => true (since 3*3 is 9)
 *
 * @param {number} num - An integer
 * @returns {boolean} True if `num` is a perfect square and false otherwise.
 */

const isPerfectSquare = (num) => {
  if (num < 0) {
    return false;
  }

  return (num ** (1 / 2)) % 1 === 0; 
}

if (require.main === module) {
  console.log('Running sanity checks for isPerfectSquare:');

  // Your sanity checks go here
}

module.exports = isPerfectSquare;
