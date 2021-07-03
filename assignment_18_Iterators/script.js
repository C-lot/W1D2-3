//Oude stijl: loops

const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//Nieuwe stijl: array methods
colors.forEach((color) => console.log(color));

/* 1. while loop: 5 regels, for loop 3 regels
2.forEach 1 regel
3. makkelijker leesbaar (geeft al aan wat het doet), minder gevoelig voor fouten( geen infinite loop) 
4.*/

const dogs = {
  dog1: "Richy",
  dog2: "Waldo",
  dog3: "Pica",
  dog4: "Elora",
  dog5: "Lio",
};

for (x in dogs) {
  console.log(dogs[x]);
}

//ja
