// 12 inch = 1 foot
// 1 foot = 12 inch
// 1 foot = 30.48 cm
// 1 inch = 2.54 cm

const inToCm = (inches) => {
    return inches * 2.54;
}

const cmToIn = (cm) => {
    return cm / 2.54;
}

const inToFeet = (inches) => {
    return inches / 12;
}

const feetToIn = (feet) => {
    return feet * 12;
}

module.exports = {
    inToCm,
    cmToIn,
    inToFeet,
    feetToIn
}

// Now you can use them:
console.log(inToCm(10));   // 25.4
console.log(cmToIn(25.4)); // 10
console.log(inToFeet(24)); // 2
console.log(feetToIn(3));  // 36