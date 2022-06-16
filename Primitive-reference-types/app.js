// Primitive data types
// value types
let a = 1;
const b = a;

a = 2;

console.log(b);

// Non-primitive data types
let student = {
    fullName: 'Lpnt',
    age: 18
}

let coach = student;

coach.age = 19;

console.log(student);