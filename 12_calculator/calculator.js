const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sub = a - b;
  return sub;
};

const sum = function(arr) {
	return arr.reduce((acc, num) => acc + num, 0)
};

const multiply = function(arr) {
 return arr.reduce((acc, num) => acc * num, 1)
};

const power = function(a, b) {
	return a ** b;
};

// const factorial = function(n) {
//   // run a loop to decrement the value until n === 1
//   let total = 1;
//   while (n > 0) {
//     console.log(n)
//     total *= n
//     n--
//   }
//   return total
// };
const factorial = function(n) {
  // run a loop to decrement the value until n === 1
  let total = 1;
  for (; n > 0; n--) {
    total = total * n;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
