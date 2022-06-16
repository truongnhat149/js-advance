// 'use strict'
function testFunc() {
    console.log(this);
}

testFunc();
// ===================
const Person = {
    fullName: 'LPNT',
    age : 18,
    eatRice() {
        console.log(this);
    }
}

// console.log(Person.eatRice())
console.log(Person)

function Car(name, color) {
    this.name = name;
    this.color = color;
}

Car.prototype.run = function () {
    // Context
    function test() {
        console.log(this);
    }
    test()
}

const porsche = new Car('Porsche', 'black');
const mercedesS450 = new Car('Mercedes S450', 'white');

console.log(porsche.run());
console.log(mercedesS450.run());