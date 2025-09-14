const  text = 'i am a learning web devlopment';

// const reverse = text.split('mango').reverse().join('___');
// console.log(reverse);

let reverse = '';

for ( const letter of text){
    // console.log(letter);
    reverse = letter + reverse;

}
// console.log(reverse);

let rev = '';
for ( i = 0; i < text.length; i++){
    // console.log(i);
    // console.log(text[i]);
    const letter = text[i];
    rev = letter + rev;
    // console.log(letter);
}
// console.log(rev);


const reversed = text.split('').reverse().join('+');
console.log(reversed);