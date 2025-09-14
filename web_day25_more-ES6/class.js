// 1️⃣ Class = blueprint
class Player {
    constructor(name, age) {
        this.name = name;       // property
        this.age = age;         // property
        this.score = 0;         // property (initial score)
        this.level = 1;         // property (initial level)
    }

    // 2️⃣ Methods = behavior
    goal() {
        this.score += 10;       // score বাড়ানো
        console.log(`${this.name} scored a goal! ⚽ Current Score: ${this.score}`);
        this.checkLevel();      // check level after scoring
    }

    kick() {
        console.log(`${this.name} kicked the ball! 👟`);
    }

    checkLevel() {
        if(this.score >= 30) {
            this.level = 2;
            console.log(`${this.name} leveled up! 🎉 Current Level: ${this.level}`);
        }
    }

    status() {
        console.log(`Player: ${this.name}, Age: ${this.age}, Score: ${this.score}, Level: ${this.level}`);
    }
}

// 3️⃣ Objects = actual players
const player1 = new Player("Ali", 25);
const player2 = new Player("Sara", 22);

// 4️⃣ Using properties & methods
player1.status();  // initial status
player1.goal();    // score 10
player1.goal();    // score 20
player1.goal();    // score 30 → level up
player1.kick();    // kick ball
player1.status();  // final status

player2.goal();    // Sara scores
player2.status();  // Sara status


class Car {
    constructor(color, model, year){
        this.color = color;
        this.model = model;
        this.year = year;

    }
    drive(){
     console.log(`${this.model} is driving 🚗`);
    }
    stop(){
        console.log(`${this.model} has stopped ✋`);

    }
}

const myCar = new Car ("red", "bmw", 2023);
const dreamCar = new Car ("blue", "Tesla Model S", 2022);

console.log(myCar);
myCar.drive();
myCar.stop();

console.log(dreamCar);
dreamCar.drive();
dreamCar.stop();