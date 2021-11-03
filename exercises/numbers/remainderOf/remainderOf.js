/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
const remainderOf = (n, d) => {
  return n % d;
}

if (require.main === module) {
  console.log('Running sanity checks for remainderOf');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = remainderOf;
