
const eater = ['saymol', 'babul', 'sourove', 'projoy', 'projoy', 'saju', 'saju']

const num = [1, 3, 5, 4, 5, 6, 7, 7, 8, 8]

function noDuplicate(array) {
    // console.log(array)
    const uniqeName = []; //This will store the unique elements
    for (const element of array) { //Loop through each value in the array
        // Check if the element is already inside uniqeName
        if (uniqeName.includes(element) === false) {
            uniqeName.push(element); // If not already there, add it
        }
    }
    return uniqeName;
}

const uniqearray = noDuplicate(eater)
console.log(uniqearray)