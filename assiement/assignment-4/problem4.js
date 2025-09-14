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
