const students = [
  {
    Id: 1,
    name: "Sophia",
    age: 19,
    grade: "A+",
    address: "45 Green Valley Rd",
    email: "sophia123@email.com",
    phone: "555-9876",
    favoriteSubject: {
      name: "Computer Science",
      teacher: "Dr. Anderson",
      grade: "A+",
    },
    hobbies: ["Coding", "Reading", "Basketball"],
    achievements: {
      awards: ["Math Olympiad Winner", "Science Fair Champion"],
      volunteerHours: 120,
    },
    guardian: {
      name: "Michael Johnson",
      relation: "Father",
      contact: "555-6543",
      occupation: "Software Engineer",
    },
  },
  {
    Id: 2,
    name: "Liam",
    age: 20,
    grade: "A",
    address: "22 Hill Street",
    email: "liam22@email.com",
    phone: "555-1234",
    favoriteSubject: {
      name: "Mathematics",
      teacher: "Mrs. Brown",
      grade: "A",
    },
    hobbies: ["Football", "Gaming", "Music"],
    achievements: {
      awards: ["Best Debater", "Regional Football Champion"],
      volunteerHours: 80,
    },
    guardian: {
      name: "Sarah Williams",
      relation: "Mother",
      contact: "555-5678",
      occupation: "Teacher",
    },
  },
  {
    Id: 3,
    name: "Olivia",
    age: 21,
    grade: "B",
  },
  {
    Id: 4,
    name: "Noah",
    age: 22,
    grade: "B+",
  },

];
// console.log(students);

const maping = students.map(student => student.grade);
console.log(maping);

const filtering =students.filter( index => index.age >= 20);
console.log(filtering);
const finding =students.find( index => index.age >= 20);
console.log('---------------------------')
console.log(finding);