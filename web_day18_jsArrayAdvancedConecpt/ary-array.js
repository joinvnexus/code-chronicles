// Array of numbers from 1 to 10 (not used in this example)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Empty tournament scores for future use (not used here)
const tournamentScores = [[], [], []];

// Marks of students from 4 different classes
const examMarks = [
  [95, 88, 76, 89, 91],  // Class 1
  [65, 70, 80, 75, 68],  // Class 2
  [85, 90, 78, 92, 88],  // Class 3
  [55, 60, 67, 73, 69]   // Class 4
];

// Store marks of Class 1
const firstClassMarks = examMarks[0];

// Print the 4th mark from Class 1 (index 3 = 89)
console.log("4th student mark in Class 1:", firstClassMarks[3]);

// Print the 5th mark directly using indexing (index 4 = 91)
console.log("5th student mark in Class 1:", examMarks[0][4]);
console.log("5th student mark in Class 1:", examMarks[2].pop());
console.log("5th student mark in Class 1:", examMarks[2].shift());

// Print the total number of classes
console.log("Total number of classes:", examMarks.length);
console.log(examMarks)