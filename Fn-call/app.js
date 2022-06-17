function logger() {
    const arr = Array.prototype.slice.call(arguments);

    arr.forEach(item => console.log(item));

}

logger(1, 2, 3, 4, 5) 

//////////===================
function logger2() {
    const arr = [...arguments];
    console.log(arr);
}

logger2(1, 2, 3, 4, 5);

//= =====================
function logger3() {
    const arr = Array.from(arguments);
    console.log(arr);
}
logger3(1, 2, 3, 4, 5);