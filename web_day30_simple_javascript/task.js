//1️⃣ একটি users array থেকে ১৮ বছরের বেশি বয়সের ইউজারদের filter করো।


const users = [
    { name: "Rafi", age: 17 },
  { name: "Projoy", age: 21 },
  { name: "Nadia", age: 25 },
  { name: "Ayesha", age: 10 },

]

const adults = users.filter(user =>{
    return user.age >= 18;

})
console.log(adults);


//2️⃣ reduce() ব্যবহার করে array-এর সব সংখ্যা যোগ করো।

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reduced =num.reduce(( sum,current) =>{
    return sum + current
})
console.log(reduced);

//3️⃣ একটি function লেখো যেখানে rest operator ব্যবহার করে সব নাম console এ দেখাবে।

function printName(...names){
    console.log(names);
}
printName("Rafi", "Projoy", "Nadia", "Ayesha");


