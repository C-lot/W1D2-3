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
  driverStatus == "Bob" ? `You are allowed to drive` : `You should get a taxi`;

console.log(checkBob);
