const  number=10.4734;
const numobj=new Number(number);
// console.log(typeof number);
// console.log(typeof numobj);
// console.log(numobj.toFixed(2));

// console.log(numobj.toPrecision(4));

const randomNum=Math.random();
console.log(randomNum);
console.log(Math.random()*10000);
console.log(Math.floor(Math.random()*10000) + 1); // 1 to 10000

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)) + min); // 10 to 20

const bigNumber=1000000;
console.log(bigNumber.toLocaleString());
console.log(bigNumber.toLocaleString('en-IN'));