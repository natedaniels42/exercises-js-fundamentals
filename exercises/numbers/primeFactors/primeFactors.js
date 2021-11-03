/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */
const primeFactors = (num) => {
  //sieve of eratosthenes
  const bools = [false, false];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    bools.push(true);
  }

  for (let i = 0; i < bools.length; i++) {
    if (bools[i]) {
      for (let j = i * 2; j < bools.length; j += i) {
        bools[j] = false;
      }
    }
  }

  for (let i = 0; i < bools.length; i++) {
    if (bools[i]) {
      primes.push(i);
    }
  }

  return primes;
}

if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = primeFactors;
