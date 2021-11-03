/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
const celsiusToFahrenheit = (temp) => {
  return (temp * 9 / 5) + 32;
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');


}

module.exports = celsiusToFahrenheit;
