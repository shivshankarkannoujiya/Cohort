// TODO: Tell the behaviour of Code Snippets

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
// Why insider function is able to access the `count`
// Every properties of Parent is of Child
// Tiffin concept
// Jab ek function return hota hai then, tiffin lekar jata hai, tiffin me kya hota hai?
// Jo kucch bahar hota hai wo lekar jata hai

const counter = createCounter(); // return function: counter ==> function
console.log(counter()); // Execute: counter()


function onef() {
    const myName = `Abhishek`;
}

// console.log(myName);
// ERROR: myName is not defined
// myName: out of scope
// No Scope Out of the function

