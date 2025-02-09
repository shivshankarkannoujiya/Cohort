// let firstName = "Abhi"
// let firstName2 = firstName

// console.log(firstName); // Abhi
// firstName2 = "Shiv";
// console.log(firstName); // Abhi


const person1 = {
    firstname: "Abhi"
}

// Both variable will points same memory location
const person2 = person1;

console.log(person1.firstname);
console.log(person2.firstname);

person2.firstname = "Abhishek";

console.log(person1.firstname);
console.log(person2.firstname);





