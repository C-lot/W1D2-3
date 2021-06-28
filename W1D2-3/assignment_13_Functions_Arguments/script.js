//No arguments

const paintWall = function () {
  console.log(`The wall has been painted red`);
};

paintWall();

//Single argument
const paintWall2 = function (color) {
  console.log(`The wall has been painted ${color}`);
};

paintWall2("green");
paintWall2("pink");

//Multiple arguments

const paintWalls = function (colorNorth, colorSoutheast) {
  console.log(
    `The Noth wall has been painted ${colorNorth} and the south-east wall has been painted ${colorSoutheast}`
  );
};

paintWalls("orange", "grey");
paintWalls("blue", "purple");
paintWalls("black", "violet");
