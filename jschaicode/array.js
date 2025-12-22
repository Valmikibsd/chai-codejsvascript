const myarray = [1, 2, 3, 4, 5];
console.log(myarray);

const sum = myarray.reduce((acc, val) => acc + val, 0);
console.log("Sum of array elements:", sum);

const myarray1=new Array(1,2,3,4,5,3,2,1);
console.log(myarray1);

const slicearray=myarray1.slice(0,5);
console.log(slicearray);

const splicearray=myarray1.splice(2,3);
console.log("After splice:",myarray1);
console.log("Spliced elements:",splicearray);

const num=1;
const isPresent=myarray1.includes(num);
if(isPresent){
    console.log(`${num} is present in the array`);
}else{
    console.log(`${num} is not present in the array`);
}

console.log("Original array:",myarray);
const shiftedElement=myarray.shift();

console.log("After shift:",myarray);
console.log("Shifted element:",shiftedElement);

const unshift=myarray.unshift(0);
console.log(unshift);
console.log("After unshift:",myarray);

const poppedElement=myarray.pop();
console.log("After pop:",myarray);
console.log("Popped element:",poppedElement);

const pushedLength=myarray.push(6);
console.log("After push:",myarray);
console.log("New length after push:",pushedLength);

const index=myarray.indexOf(3);
console.log(`Index of 3 in the array: ${index}`);


const marvelheros=["Ironman","Spiderman","Hulk","Thor","Captain America"];
const dcheros=["batman","superman","flas"];
const allheros=marvelheros.push(dcheros);
const allheroscon=marvelheros.concat(dcheros);
console.log("all Heros after push:",allheros);
console.log("all Heros after concat:",allheroscon);

const jaggedarray=[2,3,1,3,[3,2,4,[34,5,6]]];
const flatarray=jaggedarray.flat(Infinity)
console.log(jaggedarray);
console.log(flatarray);
console.log(jaggedarray[4][3][1]);

const all_new_heros = [...marvelheros, ...dcheros];
console.log("All new heros using spread operator:", all_new_heros);

console.log(Array.isArray(all_new_heros));

console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));