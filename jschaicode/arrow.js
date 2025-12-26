const arrowFunction = (param) => {
    return `You passed: ${param}`;
};

module.exports = arrowFunction;
// This is a simple arrow function that takes a parameter and returns a string.
// It is exported as a module for use in other files.
// Example usage:
// const arrowFunction = require('./arrow');
// console.log(arrowFunction('test')); // Output: You passed: test

console.log(arrowFunction('Hello World'));

const addttwo=(a,b)=>{
    return a+b;
}

const add1=(a,b)=>a+b;

console.log("Add1:",add1(3,7));

console.log("Add:",addttwo(5,10));

const add2=()=>(2+2);

const add3=()=>({"Name":4});

console.log("Add2:",add2());
console.log("Add3:",add3());
//console.log("Instructor:",ins);

const addTwo1 = (num1, num2) => ( num1 + num2 );

const multiply = (x, y) => { x * y};// Missing return statement

const multiply1 = (x, y) => {return x * y};
const addd=addTwo1(10,15);

console.log("AddTwo1:",addTwo1(10,15));
console.log("Addd:",addd);
console.log("Multiply:",multiply(3,4)); //undefined



// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')