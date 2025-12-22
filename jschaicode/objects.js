const sym=Symbol("id");

const myuse={
    name:"jschaicode",
    age:29,
    email:"v@.com",
    [sym]:12345,
    "full name":"aj k"
};

console.log(myuse);
console.log("Name:",myuse.name);
console.log("Age:",myuse["age"]);
console.log("Full Name:",myuse["full name"]);
console.log("Symbol value:",myuse[sym]);

myuse.getDetails=function(){
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
}
console.log(myuse.getDetails());


