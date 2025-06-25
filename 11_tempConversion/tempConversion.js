const convertToCelsius = function(temp) {
  raw = ((temp - 32) * 5/9);
  return parseFloat(raw.toFixed(1));
  // return Math.floor(raw)
  // return raw.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  raw = ((temp * 9 / 5) + 32)
  return parseFloat(raw.toFixed(1));
  // return raw.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
