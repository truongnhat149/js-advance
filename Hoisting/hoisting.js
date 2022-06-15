// ## Hoisting 'var' , 'function declarations'

// var age;
console.log(age);
var age = 18;

console.log(sum(6, 9));

function sum(a, b) {
    return a + b;
}

// ## Hoisting 'let', 'const'
{
    console.log(fullName);
    let fullName = 'Le Phung Nhat Truong';
}

// Bonus

const counter1 = makeCounter();

console.log(counter1());

function makeCounter() {
    let counter = 0;

    return increase;

    function increase() {
        return ++counter;
    }
}