const checkNumber = function (number) {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNumber(8));
console.log(checkNumber(111));
console.log(checkNumber(100));
console.log(checkNumber(89));
console.log(checkNumber(123));

//Bouncer at a club

const bouncerBrenda = function (max, cur, age) {
  if (cur < max && age > 18) {
    return console.log(`Come in`);
  } else if (cur > max && age > 18) {
    return console.log(`It's too busy now, come back later`);
  } else if (age < 18) {
    return console.log(`This club is for adults`);
  }
};

bouncerBrenda(800, 500, 20);
bouncerBrenda(800, 900, 45);
bouncerBrenda(800, 400, 17);
bouncerBrenda(800, 300, 56);

//calculating the average

const calcAverage = function (numbers) {
  const average = numbers.reduce((total, n) => total + n) / numbers.length;
  return average;
};

console.log(calcAverage([3, 6, 8, 9, 11]));

console.log(calcAverage([4, 61, 8, 93, 11]));

console.log(calcAverage([23, 65, 38, 49, 11]));

console.log(calcAverage([30, 56, 8, 89, 111]));

console.log(calcAverage([36, 64, 8, 29, 101]));
