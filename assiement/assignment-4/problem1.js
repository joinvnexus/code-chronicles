function totalFine(fare) {
    // check if fare is a number and positive
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    // calculate fine
    let fine = fare + (fare * 0.2) + 30;

    return fine; // return result
}

console.log(totalFine(200));   // 270
console.log(totalFine(0));     // "Invalid"
console.log(totalFine(50));    // 90
console.log(totalFine(552));   // 692.4
console.log(totalFine(-35));   // "Invalid"
console.log(totalFine("65"));  // "Invalid"
console.log(totalFine("Gorib tai ticket katinai")); // "Invalid"
