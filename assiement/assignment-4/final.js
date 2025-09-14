// problem 1

function totalFine(fare) {
    // check if fare is a number and positive
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    // calculate fine
    let fine = fare + (fare * 0.2) + 30;

    return fine; // return result
}


//problem 2
function onlyCharacter(str) {
    // check if input is a string
    if (typeof str !== "string") {
        return "Invalid";
    }

    // remove spaces and convert to uppercase
    let cleaned = str.replace(/\s+/g, "").toUpperCase();

    return cleaned;
}

// problem 3

function bestTeam(player1, player2) {
    // Step 1: Check if both inputs are objects
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }

    // Step 2: Get values from player1
    const foul1 = player1.foul;
    const cardY1 = player1.cardY;
    const cardR1 = player1.cardR;

    // Step 3: Get values from player2
    const foul2 = player2.foul;
    const cardY2 = player2.cardY;
    const cardR2 = player2.cardR;

    // Step 4: Calculate total penalties for each team
    const total1 = foul1 + cardY1 + cardR1;
    const total2 = foul2 + cardY2 + cardR2;

    // Step 5: Compare totals and decide the winner
    if (total1 < total2) {
        return player1.name;
    } else if (total2 < total1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

//problem 4

function isSame(arr1, arr2) {
    // Step 1: Check if both inputs are arrays
    var isArr1 = false;
    var isArr2 = false;

    // Check arr1
    if (arr1 instanceof Array) {
        isArr1 = true;
    }
    // Check arr2
    if (arr2 instanceof Array) {
        isArr2 = true;
    }

    // If any input is not an array, return "Invalid"
    if (isArr1 === false || isArr2 === false) {
        return "Invalid";
    }

    // Step 2: Check if both arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Step 3: Compare each element one by one
    // Use a normal for loop so it's easy to understand
    for (var i = 0; i < arr1.length; i = i + 1) {
        if (arr1[i] !== arr2[i]) {
            // If any element is not equal, return false immediately
            return false;
        }
    }

    // Step 4: If we finish the loop and found no differences, return true
    return true;
}


// problem 5 


function resultReport(marks) {
    // Step 1: Check if input is an array
    if (!(marks instanceof Array)) {
        return "Invalid";
    }

    // Step 2: Initialize variables
    let total = 0;
    let passCount = 0;
    let failCount = 0;

    // Step 3: Loop through marks
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];

        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    // Step 4: Calculate average (finalScore)
    let avg = 0;
    if (marks.length > 0) {
        avg = total / marks.length;
    }
    const finalScore = Math.round(avg);

    // Step 5: Return result as object
    return {
        finalScore: finalScore,
        pass: passCount,
        fail: failCount
    };
}
