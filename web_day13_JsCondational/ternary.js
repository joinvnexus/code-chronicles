/**
 * TARNARY --- THREE PARTS
 *
 * ? :
 * condation  ? do something true : do something when false
 *
 */
// normal condation
const age = 102;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

// simple tarnary condation

//age >= 18 ? console.log('vote dite jaw') : console.log("tui vote dite parbe na ")

let price = 500;
const isleader = false;

if (isleader === true) {
  price = 0;
} else {
  price = price + 100;
}
// console.log(price)

price = isleader === ture ? 0 : price + 100;

// optional : semi advanced ternary

price = isleader === true ? 0 : price + 100;

if (isleader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 100;
}

// fell free to undustand

price = isleader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
price = isleader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
