const pen = {
    color: 'black',
    price: 20,
    brand: 'gel'
}
const pencil = new Object();
console.log(pencil)
pencil.color = 'blue';
pencil.price = 10;
pencil.brand = 'gel';
console.log(pencil)

const rubber = Object.create(pen);

console.log(rubber)

const eraser = Object.create(pencil);
console.log(eraser)

