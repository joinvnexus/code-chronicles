const jim = 256;
const tim = 389;
const kim = 168;

if(jim > tim && jim > kim){
    console.log('jim is the ulatemate boss')
} else if(tim > jim && tim > kim){
    console.log('tim the ulatmate boss')
} else {
    console.log('kim is the boss')
}

function isboss(num1, num2, num3){
    if(num1 > num2 && num1 >num3){
        return num1;
    } else if(num2 > num1 && num2 >num3 ){
        return num2;
    } else{

        return num3;
    }
    
}

isboss();
const boss = isboss(12, 23, 45);
console.log(boss); // 45

const num1 = 12;
const num2 = 23;
const num3 = 45;

const bosss = isboss(num1, num2, num3);
console.log(bosss); // 45



const big = Math.max(12, 10, 56)
console.log('max isuing math .max', big)