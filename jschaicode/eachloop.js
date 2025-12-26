const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(item){
    console.log(`I love ${item}`);
})

coding.forEach((i)=>{
    console.log(`I love arrow ${i}`);
});


coding.forEach((item,indet,arr)=>{
    console.log(`Index: ${indet}, Item: ${item}, Array: ${arr}`);
});


//filter
const numbers=[10,23,45,60,77,88,90,100,150];

const even=numbers.filter((num)=>num%2==0);

console.log("Even numbers:",even);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const booksf=books.filter((b)=>b.genre==='Science' && b.publish>2000);

  console.log("Books:",books);
