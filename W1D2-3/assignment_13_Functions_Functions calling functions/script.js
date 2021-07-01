//Hey Kiddo

const checkAdult = (age) => age >= 18;

const greet = (age) => {
  if (checkAdult(age)) {
    return console.log(`Hello there`);
  } else {
    return console.log("Hey Kiddo");
  }
};

greet(18);
greet(16);
greet(28);

//VAT calculations

const vatAmount = (baseprice) => {
  const vat = baseprice * 0.21;
  return vat;
};
const calcPrice = (baseprice) => {
  const totalPrice = vatAmount(baseprice) + baseprice;
  return totalPrice;
};

console.log(calcPrice(64));
console.log(calcPrice(164));
console.log(calcPrice(640));
console.log(calcPrice(1000));

//VAT 2
const calcBasePrice = (totalprice, vat) => {
  const basePrice = totalprice / vat;
  return basePrice;
};

const priceAndVat = (totalprice, vat) => {
  const basePrice2 = calcBasePrice(totalprice, vat);
  const vatAmount2 = vatAmount(basePrice2);
  return [basePrice2, vatAmount2];
};

console.log(priceAndVat(64, 1.21));
console.log(priceAndVat(164, 1.21));
console.log(priceAndVat(640, 1.21));
console.log(priceAndVat(1210, 1.21));
