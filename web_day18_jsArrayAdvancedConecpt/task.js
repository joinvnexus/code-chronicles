const colors = ['red', 'blue',  'green', 'yellow', 'orange'];

const revers =[];

 for(let i = 0; i < colors.length; i++){
     // console.log(colors[i]);
    //    revers.push(colors[i])
       revers.unshift(colors[i])
 }

console.log(colors);
console.log(revers);