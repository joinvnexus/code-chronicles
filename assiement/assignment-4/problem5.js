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
