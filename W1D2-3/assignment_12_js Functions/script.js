const pizzaProduction = function (tomatoes, cheese, vegetables) {
  const pizza = `Pizza with ${tomatoes} tomatoes, ${cheese} gram cheese and ${vegetables} pieces of vegetables`;
  return pizza;
};
const pizzaMaking = pizzaProduction(3, 50, 2);
console.log(pizzaMaking);

console.log(pizzaProduction(6, 40, 5));
console.log(pizzaProduction(4, 30, 2));
console.log(pizzaProduction(5, 100, 8));

//Sushi

const sushiProduction = function (rice, vegetables, fish) {
  const sushi = `Sushi with ${rice} gram rice, ${vegetables} pieces of vegetables and ${fish} pieces of fish`;
  return sushi;
};
console.log(sushiProduction(50, 3, 2));

//
const sushiProduction2 = function (rice, vegetables, fish) {
  const amountOrder = 3;
  const sushi = `Sushi with ${rice * amountOrder} gram rice, ${
    vegetables * amountOrder
  } pieces of vegetables and ${fish * amountOrder} pieces of fish`;
  return sushi;
};

console.log(sushiProduction2(50, 3, 2));

const pizzaProduction2 = function (tomatoes, cheese, vegetables) {
  const amountOrder = 2;
  const pizza = `Pizza with ${tomatoes * amountOrder} tomatoes, ${
    cheese * amountOrder
  } gram cheese and ${vegetables * amountOrder} pieces of vegetables`;
  return pizza;
};

console.log(pizzaProduction2(6, 40, 5));
