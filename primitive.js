// // data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// primitive and non-primitive data
// 8. object

//primitive 
let a = 'number1'
let b = a;
console.log(a, b);

a = 'number2';
console.log(a,b); // a value changed 


let x = {name: 'developer'};
let y = x;
console.log(x, y);

y.name = 'programmer';
console.log(x, y); // both output change because it catch the referance 