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



const tinderUser={
    name:"aj k",
    age:29,
    isLoggedIn:true,
    fullname:{
        name:"aj",
        lastname:"k"
    }
    
};

console.log("NAme:",tinderUser.fullname.name);


const obj1={name:"aj k", age:29};
const obj2={class:"raj", roll:230};

//const objnew3=Object.assign({},obj1,obj2);

const objnew3={...obj1,...obj2};
console.log("obj:",objnew3);

const keys=Object.keys(objnew3);
const values=Object.values(objnew3);
const entries=Object.entries(objnew3);

console.log("Keys:",keys);
console.log("Values:",values);
console.log("Entries:",entries);

const course={
    title:"js course",
    price:999,
    instructor:"aj k"
};

const {instructor:ins}=course;
console.log("Instructor:",ins);