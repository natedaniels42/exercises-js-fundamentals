/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)

  return string.split(" ").reduce((a,b)=> a.length > b.length ? a : b, "");
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(longestWord('Running sanity checks for longestWord:'));
}

module.exports = longestWord;
