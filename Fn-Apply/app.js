// example 1
const teacher = {
    firstName: 'Minh',
    lastName: 'Hang',
}

function greeting(greeting, message) {
    return `${greeting} ${this.firstName}  ${this.lastName}. ${message}`
}

let result = greeting.apply(teacher, ['Hi Teacher' , 'what subject do you teach?'])

console.log(result);


// call() method
result = greeting.call(teacher, 'Hi teach', 'What subject do you teach?');

console.log(result)

// Example 2

const teacher2 = {
    firstName: 'Minh',
    lastName: 'Hang',
    isOnline: false,
    goOnline() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`);
    },
    goOffline() {
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} is Offline`);
    }
}
const me = {
    firstName: 'Nhat',
    lastName: 'Truong',
    isOnline: false
}

console.log('Teacher:' , teacher2.isOnline);
teacher2.goOnline();
console.log('Teacher:' , teacher2.isOnline);

console.log('-------------------------')

console.log('Me:' , me.isOnline);
// function borrowing
teacher2.goOnline.apply(me);
console.log('Me:' , me.isOnline);