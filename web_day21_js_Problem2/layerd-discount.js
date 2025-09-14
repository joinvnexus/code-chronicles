
/**
 * frist 100 =====> 100,
 * 101to 200 =====> 90,
 * above200 =====> 70
 */

function layerDisPrice(quanity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quanity <=100){
        const total = quanity * first100Price;
        return total;
    }
    else if(quanity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quanity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        return first100Total + remainingTotal;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quanity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        return first100Total + second100Total + remainingTotal;
    }
}

// Example usage
console.log(layerDisPrice(50));    // 5000
console.log(layerDisPrice(150));   // 100*100 + 50*90 = 10000 + 4500 = 14500
console.log(layerDisPrice(250));   // 100*100 + 100*90 + 50*70 = 10000 + 9000 + 3500 = 22500