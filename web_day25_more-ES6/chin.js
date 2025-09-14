const student = {
    name : 'John',
    age : 30,
    grade : 'A',
    address : '123 Main St',
    favoriteSubject: {
        name: 'Math',
        teacher: 'Mr. Smith',
        grade: 'A',
        mother:{
            name: 'Jane',
            age: 50,
            grade: 'B',
            //address: '456 Elm St'

        }

    }
}
// console.log(student.favoriteSubject.mother?.address);

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);