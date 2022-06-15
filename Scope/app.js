// - Scope types

// + Global 
var age = 18;
let age = 18;
const age = 18;

console.log(age);

function logger() {
    console.log(age);
}

{
    console.log(age);
}


// + code block
// if / else / for / do while/ while v.v
{
 // code block
 // let, const
 // var => jumps to the nearest range outside of it
}

{
    var age = 19;
}

console.log(age);

// + Local scope - function: var, function

function logger() {
    var age = 18;
    function loggerAge() {
        var fullName = 'A';
        console.log(fullName);
    }
    loggerAge();
    console.log(age);
    fullName = 'B';
} 

logger();
 
// - When calling a function a new scope is always created
function logger() {

}

logger() // => new scope in logger will be created
logger() // => again new scope is created 