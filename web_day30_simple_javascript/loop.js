//for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//while loop
let i = 1;
while (i <= 5) {
  console.log("Hello:", i);
  i++;
}

// do-while loop
let j = 1;
do{
    console.log("Do While:", j);
    j++;
} while (j <= 5);

//for of loop with number
const array = [1,2,3,4,5]

for (const item of array){
    console.log(item)
}

//for of loop with array
const fruits =["apple", "banana", "orange"]

for(const fruit of fruits){
    console.log(fruit)

}

let person = { name: "Projoy", age: 20, country: "BD" };

for(const key in person ){
  console.log(key, ":", person[key]);
  console.log(person.name)
}