//Deel 1

const age = 34;

const calcEntrance = function (age) {
  if (age > 18) {
    console.log("You are allowed to go in");
  } else {
    console.log("You are not allowed to go in");
  }
};

calcEntrance(age);
calcEntrance(22);
calcEntrance(44);
calcEntrance(16);
calcEntrance(40);

//Deel 2
const isFemale = true;

const genderCheck = isFemale ? `You are a lady` : `You are a man`;

console.log(genderCheck);

//Deel 3
const driverStatus = "Bob";

const checkBob =
  driverStatus === "Bob" ? `You are allowed to drive` : `You should get a taxi`;

console.log(checkBob);

/*Opdracht: Comparison && Logical Operators

Deel1:*/

const checkAge = function (age) {
  if (age >= 18 && age <= 25) console.log("You get 50% discount!");
  else {
    console.log("No discount for you");
  }
};

checkAge(34);
checkAge(22);
checkAge(31);
checkAge(25);
checkAge(18);

//Deel2:

const firstName = "Janneke";

const checkFreedrink = function (name) {
  if (name === "Bram" || name === "Sarah") console.log("You get a free drink");
  else {
    console.log("Change your name ;)");
  }
};

checkFreedrink(firstName);

//Deel 3:

const totalAmount = 38;

const checkFree50 = function (amount) {
  if (amount >= 25 && amount < 50) {
    console.log("You get Bitterballen for free!");
  } else if (amount >= 50 && amount < 100) {
    console.log("You get Nachos for free!");
  } else if (amount >= 100) {
    console.log("You get free Champagne!");
  }
};

checkFree50(55);
checkFree50(8);
checkFree50(35);
checkFree50(45);
checkFree50(240);
checkFree50(totalAmount);
