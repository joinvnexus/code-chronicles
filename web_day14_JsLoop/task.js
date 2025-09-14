/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

const text = " I will invest at least 6 hrs every single day for next 60 days!";

for (let i = 0; i < 60; i++){
    // console.log(text);
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
// Subtask-1
for (let i = 61; i <= 100; i++){
    if (i % 2 !== 0){
        // console.log(i);
    }
}
// Subtask-2
for (let i = 78; i <= 98; i++){
    if (i % 2 === 0){
        // console.log(i);
    }
}

//**
let num = 61;
while (num % 2 == 0){
    console.log(num);
    num = num + 1;
}