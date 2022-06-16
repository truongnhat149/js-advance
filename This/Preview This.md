# This keyword
- The this 'keyword' in javascript referenced to the object it belongs to.
## Characteristic
1. In a method, this refers to the object that accesses the method (the object before the '.');
2. Outside of the method, this refers to the global object

## Note
- This in the constructor represents the object to be created
- this is a function is undefined when 'strict mode'
- Methods bind(), call(), apply() can refer this to another object 