/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */

function triangleType(a, b, c) {
  // This is your job. :)
  let arr = [a, b, c];
  arr.sort((a,b)=> a-b);

  a = arr[0];
  b = arr[1];
  c = arr[2];

  if (c > b+a)
  {
    return "invalid";
  }
  else if (c*c < a*a + b*b)
  {
    return "acute";
  }
  else if (c*c > a*a + b*b)
  {
    return "obtuse";
  }
  else
  {
    return "right";
  }


}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

 console.log(triangleType(3, 4, 5)); // => 'right'
 console.log(triangleType(4, 3, 5)); // => 'right' (the order of arguments shouldn't matter)
 console.log(triangleType(1, 1, 1)); // => 'acute'
 console.log(triangleType(12, 15, 8)); // => 'obtuse'
 console.log(triangleType(1, 1, 3));
}

module.exports = triangleType;
