// Task-1: Access the golden rod color value in output.
// task1.js

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// Access and log the value of "golden rod"
console.log(colors["golden rod"]);


// Task-2: Add a property named passenger capacity with value 5 to the car object.
// task2.js
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Add a new property 'passenger capacity' to the car object
car["passenger capacity"] = 5;

console.log(car);


// Task-3: Display the physics marks as output.
// task3.js


const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// Display the physics marks
console.log(student.physics.marks);
