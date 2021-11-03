/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
const longest = (array) => {
  const lengths = array.map(item => item.length);

  const index = lengths.findIndex(num => num === Math.max(...lengths));

  return array[index];
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
