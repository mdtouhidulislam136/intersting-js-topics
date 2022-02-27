/*
1. If we don’t assign the value of a variable it will show undefined.
2. If we not return the function it will show undefined.
3. Just wrote return but didn’t return anything it will show undefined.
4. Parameter isn’t passed will show undefined.
5. Property that doesn’t exist in an object will show undefined.
6. Accessing array elements out of range.
7. Accessing deleted array elements.
8. Explicitly set value to undefined.
9. Null means there is no value.

*/

let first ;
//console.log(first);

function second (x, y){
    const sum = x + y;
}

const result = second(45, 39);
console.log(result);


function add (x, y){
    if(x > y ){
        const sum = x -y;
        return ;
    }

    else{
        return x;
    }
}

const result2 = add (30, 30);


function add (x, y){
    if(x > y ){
        const sum = x -y;
        return sum ;
    }

    else{
        return x;
    }
}

const result3 = add (30);


const fifth = {
    name: 'islam', age: 34, location: 'island'
};

//console.log(fifth.phone);


const sixth = [45, 33, 23, 43];
//console.log(sixth[5]);

delete sixth[2];
console.log(sixth[2]);


const seventh = undefined;
console.log(seventh);

const myObject = { name: 'samad', profession: null};
console.log(myObject);
