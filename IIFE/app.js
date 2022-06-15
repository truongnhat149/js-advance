//1. Shape IIFE
(function() {

})();

(()=> {

})();

// ========================

//2. Use ';' before IIFE
// references WEBPACK
;(function() {})()

// 3. IIFE is a function "private"
let i = 0;
(function myFunc(){
   // can only be used recursively to cess
    i++;
    console.log(i);

    if (i < 10)
        myFunc()
})();

// 4. When to use IIFE
(function() {
    let fullName = 'Nhat Truong';
    console.log(fullName);
    // variable and constructor do not affect the global scope
})();

// 5. two ways

// - one
(function() {})(

);

// -two
// before the function has '+ / - / !'
!function() {

}

// Example

const app = (function() {
    // Private
    const cars = [];

    return {
        get(index) {
            return cars[index];   
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})()