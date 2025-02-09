const person1 = {
    firstname: "Abhi",
    lastname: "Kannoujiya",
    address: {
        state: "UP",
        country: "INDIA"
    }
}

// const person2 = {
//     firstname: person1.firstname,
//     lastname: person1.lastname
// }
// Problem: if having 1000 properties its to bad copy one by one


// TODO: solution `...` spread operator: shallow copy
// const person2 = {
//     ...person1,
//     address: person1.address // copy the reference
// }

/*
Problem
        If the object contains nested objects (references), those references are copied, not the actual nested objects
*/

// Solution:
// Deep Copy

// Convert Object to String
const person1String = JSON.stringify(person1);

// Convert String to Object
const person2 = JSON.parse(person1String);




