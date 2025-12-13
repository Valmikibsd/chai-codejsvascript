const numbers = [1, 2, 3, 4];
const aquare=numbers.map(n=>n*n);
console.log(aquare);
const fnumbers=numbers.filter(n=>n*n>10);
console.log(fnumbers);
console.log(numbers);

//numbers.forEach(n=>console.log(n);
const users = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Vamiki" }
];

const names=users.map(u=> u.name.toUpperCase());
console.log(names);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
];

const updatedProducts=products.map((p,index)=>({
    ...p,
    gstprice:p.price*2,
    id:index+1
}));

console.log(updatedProducts);

const days = ["Mon", "Tue", "Wed"];

days.map((day,index)=>{
    console.log(`${index+1} - ${day}`);
});


const employees = [
  { id: 1, name: "Amittt", salary: 30000 },
  { id: 2, name: "Vamiki", salary: 40000 }
];

const uname=employees.map(u=>u.name);

console.log(uname);

const employeessal = [
  { name: "Amit", salary: 30000 },
  { name: "Vamiki", salary: 40000 }
];

const yempsal=employeessal.map((e,i)=>({
    ...e,
    ctc:e.salary*12

}));

console.log(yempsal);


const apiData = [
  { id: 1, first_name: "Vamiki", last_name: "Yadav" },
  { id: 2, first_name: "Amit", last_name: "Sharma" }
];

const fullnames=apiData.map(u=>({
    ...u,
    fullname:`${u.first_name} ${u.last_name}`
}));
console.log(fullnames);


const fruits = ["Apple", "Banana", "Mango"];


const fruitwithindex=fruits.map((e,i)=>({
    index:i+1,
    fruit:e
}));

console.log(fruitwithindex);


const marks = [35, 78, 90, 42];

const rs=marks.map(e=>e>=40 ? "Pass" : "Fail");

const res=marks.map((e,i)=>({
    index:i+1,
    mark:e,
    result:e>=40 ? "Pass" : "Fail"
}))

console.log(rs);
console.log(res);