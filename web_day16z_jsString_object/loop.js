const mobile = {
    brand: 'samsung',
    color: 'black',
    price: 20000,
    ram: 4,
    rom: 64,
    battery: 4000,
    isnew: true
}

// for of : array
// for in : object
for(const prop in mobile){
    // console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);

// console.log(keys);

for(const key of keys){
    console.log(key ,':', mobile[key]);
}
