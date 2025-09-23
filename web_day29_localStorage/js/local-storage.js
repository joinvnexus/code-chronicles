const addNumToLs = () => {
    const number = Math.ceil(Math.random() * 100);
    // localStorage.setItem("number", number);
    localStorage.setItem("number", number)
    // return number;
    console.log(number);
}

const setObjectToLs = () => {
    const person = {
        name: "Milon",
        age: 23,
        address: "Dhaka"
    };

    const personJson = JSON.stringify(person);
    localStorage.setItem("person", personJson);

    //shortcut
    // localStorage.setItem("person", JSON.stringify(person));


    console.log(person, );

// JSON.stringify
}

const getObjectFromLs = () => {
    const personJson = localStorage.getItem("person");
    const personObj = JSON.parse(personJson);
    // shortcut
    // const personObj = JSON.parse(localStorage.getItem("person"));
    console.log(personObj.name);
}

const getNumFromLs = () => {
    const num = localStorage.getItem("number");
    console.log("form  saved local storage", num);
}



const setArrayToLs = () => {
    const fruits = ["apple", "banana", "mango", "orange"];

    localStorage.setItem("fruits", JSON.stringify(fruits));
    console.log("Array saved:", fruits);
};


const getArrayFromLs = () => {
    const fruitsJson = localStorage.getItem("fruits");
    const fruitsArr = JSON.parse(fruitsJson);

    console.log("Array retrieved:", fruitsArr);
    console.log("First fruit:", fruitsArr[0]);
};
