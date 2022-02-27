// global scope variable

const name = "man";



function add(first, second){
    // local scope variable
    const result = first + second;
    return result;



}

const sum = add (12, 21);
console.log(sum);