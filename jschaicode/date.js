const mydate = new Date();
console.log("Current date and time:", mydate.toString());
const month=mydate.getMonth()+1;
const date=mydate.getDate();
const year=mydate.getFullYear();
console.log(`Current Date: ${date}-${month}-${year}`);

const hours=mydate.getHours();
const minutes=mydate.getMinutes();
const seconds=mydate.getSeconds();
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
const indiaDate=mydate.toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
console.log("India Date and Time:",indiaDate);

const ind=new Date(indiaDate);
console.log(ind.getHours());

const utctime=mydate.getHours();
if(utctime<12 && utctime>=5){
    console.log("Good Morning");
}else if(utctime>=12 && utctime<17){
    console.log("Good Afternoon");
}else if(utctime>=17 && utctime<21){
    console.log("Good Evening");
}else{
    console.log("Good Night");
}