const coding = ["js", "ruby", "java", "python", "cpp"]

for(let i=0; i<coding.length; i++){
    console.log(`I love ${coding[i]}`);
}

const Objects = {
    name: "jschaicode",
    age: 29,
    skills: ["js", "react", "nodejs"]
};

for(let i=0; i<Object.keys(Objects).length; i++){
    const key = Object.keys(Objects)[i];
    console.log(`Key: ${key}, Value: ${Objects[key]}`);
}

//array of objects
const users = [
    {name: "aj k", age: 29},
    {name: "rahul", age: 25},
    {name: "sneha", age: 24}
];

for(let i=0; i<users.length; i++){
    console.log(`Name: ${users[i].name}, Age: ${users[i].age}`);
}


// break and continue
for(let i=0; i<10; i++){
    if(i===5){
        console.log("Breaking the loop at i =", i);
        break;
    }
    console.log(i);
}

for(let i=0; i<10; i++){
    if(i%2===0){
        continue; // skip even numbers
    }
    console.log("Odd number:", i);
}

// for...in loop
const person = {
    name: "aj k",
    age: 29,
    city: "New York"
};


// while loop
let count = 0;
while(count < 5){
    console.log("Count is:", count);
    count++;
}

// do...while loop
let num = 0;
do{
    console.log("Number is:", num);
    num++;
}while(num < 5);

// for...of loop
const languages = ["js", "python", "ruby", "java"];

for(const lang of languages){
    console.log("Language:", lang);
}

const str = "Hello";

for(const char of str){
    console.log("Character:", char);
}

// Nested loops
for(let i=1; i<=3; i++){
    for(let j=1; j<=2; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Looping through a string
const message = "Iteration";

for(let i=0; i<message.length; i++){
    console.log(`Character at index ${i}: ${message[i]}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}


// for in with arrays
const arr = ['a', 'b', 'c', 'd'];

for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}