/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
const shortest = (array) => {
  const lengths = array.map(item => item.length);

  const index = lengths.findIndex(num => num === Math.min(...lengths));

  return array[index];
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortest;
