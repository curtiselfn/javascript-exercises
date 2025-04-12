const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const multiply = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber
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
