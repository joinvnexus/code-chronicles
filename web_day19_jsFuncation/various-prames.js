/**
 * for a given string tell me whether it has a even number of characters or not
 * 
 * 
 * 
 */

function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even');
        return true;
    }else{
        console.log('odd');
        return false;
    }
}

// evenSizeString('hello')
// evenSizeString('hello babu')

function doubleOrTriple(number , doDouble){
    if(doDouble){
        const result = number * 2;
        return result;
    }else{
        const result = number * 3;
        return result;
    }
}

///console.log(doubleOrTriple(5, true)); // 15
///console.log(doubleOrTriple(5, false)); // 10

function numberOfElements(arr){
    const size = arr.length;
    return size;
}
// console.log(size);
numberOfElements([1,2,3,4,5])

function getAge (person){
    const age = person.age;
    return age;
}
 console.log(getAge({name: 'babu', age: 23}));
