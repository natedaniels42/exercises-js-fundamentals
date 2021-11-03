/**
 * Given an input string and positive integer N, returns a ROT-N
 * copy of the string.
 *
 * ROT-N is just like ROT-13 except that we specify the number
 * instead of only using 13.
 *
 * Play with https://rot13.com/, you can change the N.
 *
 * @example
 * rotN('Hello, world!', 13); // => 'Uryyb, jbeyq!'
 * rotN('Hello, world!', 9); // => 'Qnuux, fxaum!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function isLetter(c)
{
  return c.toUpperCase() != c.toLowerCase();
}

function rotN(string, N) {
  // This is your job. :)

  let encryptedString = "";

  for (let i = 0; i < string.length; i++) {
    char = string[i];

    if (isLetter(char))
    {
      let code = char.charCodeAt(0);
      let shiftedChar = String.fromCharCode(code + N);
      encryptedString += (shiftedChar.charCodeAt(0) < (code > 96 ? 123 : 91) ? shiftedChar : String.fromCharCode( shiftedChar.charCodeAt() - 26 ));
    }
    else
    {
      encryptedString += string[i];
    }
  }

  return encryptedString;
}

if (require.main === module) {
  console.log('Running sanity checks for rotN:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(rotN('Running sanity checks for rot13:', 13));
  console.log(rotN('Hello, world!', 13));
  console.log(rotN('Hello, world!', 9));
}

module.exports = rotN;
