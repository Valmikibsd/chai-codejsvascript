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


const students = [
  { name: "Amit", subjects: ["Math", "Science"],marks: ["20", "30"] },
  { name: "Vamiki", subjects: ["English", "History"],marks: ["40", "30"] }
];

const studentSubjects=students.map(s=>
    s.subjects.map(sub=>`${s.name} - ${sub}`,
    s.marks.map(m=>`${s.name} - ${m}`)));
console.log(studentSubjects);


const items = students.map(s=>({
  sname:s.name,
  results:s.subjects.map((sub,i)=>({
    subject:sub,
    mark:Number(s.marks[i])
  }))
  
}));  





console.log(items);

const dailysala=2000;


const userss = [
  { name: "Amit", days: 24 },
  { name: "Vamiki", days: 25 }
];

const ussal=userss.map(s=>({
  name:s.name,
  salary:s.days*dailysala
}));

const getmsal=userss.map(u=>({
  username:u.name,
  monthlysalary:u.days*dailysala
}))

console.log(getmsal);