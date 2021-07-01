//function declaration
function result(number1, number2) {
  const sumSquaredNumbers = number1 * number1 + number2 * number2;
  return sumSquaredNumbers * sumSquaredNumbers;
}

//function expression
const result2 = function (number1, number2) {
  const sumSquaredNumbers = number1 * number1 + number2 * number2;
  return sumSquaredNumbers * sumSquaredNumbers;
};

////function expression - Arrow function
const result3 = (number1, number2) => {
  const sumSquaredNumbers = number1 * number1 + number2 * number2;
  return sumSquaredNumbers * sumSquaredNumbers;
};

console.log(result(6, 7));
console.log(result2(6, 7));
console.log(result3(6, 7));
