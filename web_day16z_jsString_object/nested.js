const school = {
    collage: 'VIT',
    branch: 'CSE',
    year: 2023,
    class:['10th', '11th', '12th'],
    events: ['coding', 'cricket', 'football'],
    unique:{
        name: 'abdul kader',
        age: 21,
         result: {
            physics: 80,
            chemistry: 90
        }
    },
    student: {
        name: 'abdul kader',
        age: 21
       
    }
}
console.log(school.unique.result.physics ="90vnknn");
console.log(school.unique.result.chemistry);
//  console.log(school.unique.name);
 console.log(school['unique'].name);
// console.log(school.events[2] = 'basketball');
delete school.events[2];
console.log(school.events[0]);