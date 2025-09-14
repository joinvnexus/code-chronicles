function add (a, b){
    console.log("value of parameters ", a, b)
    console.log(arguments)
    const params = [...arguments]
    console.log("value of params ", params)
}

add(10, 20, 30, 40 ,50)

const x = 10;

function changeValue(a) {
  a = 20;
  console.log("Inside function:", a); // 20
}

changeValue(x);
console.log("Outside function:", x);  // 10 (original stays the same)


let person = { name: "Alice" };

function changeName(obj) {
  obj.name = "Bob";
  console.log("Inside function:", obj.name); // Bob
}

changeName(person);
console.log("Outside function:", person.name);  // Bob (original changed)


let arr = [1, 2, 3];

function changeArray(a) {
  a = [4, 5, 6]; // new array assigned to local variable
  console.log(a); // [4,5,6]
}

changeArray(arr);
console.log(arr);  // [1,2,3] (original array is unchanged)
