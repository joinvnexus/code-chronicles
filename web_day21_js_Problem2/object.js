const student = {
    name: "Shahin",
    id: 121,
    age: 20,
    address: "Dhaka",
    isMarried: false,
    friends: ["Shihab", "Shikot", "Shohel", "Shakil"],
    act:function(){
        console.log("Acting is my hobby");
    },
    favmovies: [
        {
            name: "Leader: Ami Bangladesh",
            actor: "Shakib Khan",
            actress: "Bubly"
        },
        {
            name: "Priyo Tumi",
            actor: "Shakib Khan",
            actress: "Apu Biswas"
        },
        {
            name: "Bossgiri",
            actor: "Shakib Khan",
            actress: "Shabnom Bubly"
        }
    ],
    bestFriend: {
        name: "Shihab",
        id: 122,
        address: "Dhaka",
        details: {
            age: 22,
            address: "Dhaka",
            isMarried: false,
            hobby: "Playing Football"
        }
    }
};
console.log( student.act());
console.log(student);
console.log("Friends:", student.friends);
console.log("Best Friend:", student.bestFriend);
// console.log("Favorite Movies:", student.movies.map(m => m.name));
// console.log("Favorite Movies Actor:", student.movies.map(m => m.actor));
// console.log("Favorite Movies Actress:", student.movies.map(m => m.actress));