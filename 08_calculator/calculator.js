const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

const multiply = function (numbers) {
  let result = 1;
  for (let number of numbers) {
    result *= number;
  }
  return result;
};

const power = function (firstNumber, secondNumber) {
  return firstNumber ** secondNumber;
};

const factorial = function (firstNumber) {
  if (firstNumber === 0) {
    return 1;
  }
  let result = 1
  for (let i = firstNumber; i >= 1; i--) {
    result = result * i;
  }
  return result;

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
