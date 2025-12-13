const name="jschaicode";
let age=5;
age += 1;
console.log(`Age is now: ${age}`);
//name="newname"; // This will cause an error because 'name' is a constant
console.log(`Hello, ${name}!`);

function greet() {
    const greeting = "Welcome to jschaicode!";
    var vargreeting = "This will cause an error"; // Redeclaring 'greeting' with 'var' in the same scope
    console.log(greeting);
}
greet();
//console.log(vargreeting);