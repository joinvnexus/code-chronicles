/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed ---> 50 cft
 */ 

function woodQuanity(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const totalChairWood = chair * perChair;
    console.log("Chair wood:", totalChairWood);

    const totalTableWood = table * perTable;
    console.log("Table wood:", totalTableWood);

    const totalBedWood = bed * perBed;
    console.log("Bed wood:", totalBedWood);

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

const wood = woodQuanity(1, 1, 4);
console.log("Wood need:", wood);
