/**
 * 
 * upto 100 -->100
 * more then 101-200 ---> 90
 * more than 200 --> 70
 */

function disPrice (quanity){
    if(quanity <=100){
        const total = quanity *100;
        return total; 
    }else if(quanity <=200){
        const total = quanity *90;
        return total
    } else{
        const total = quanity *70
        return total;
    }
}
const total = disPrice(201)
console.log(total)