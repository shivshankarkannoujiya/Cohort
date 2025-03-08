/*
    In JavaScript, functions are treated as first-class citizens (or first-class functions). This means:
        1. Functions can be assigned to variables
        2. Functions can be passed as arguments to other functions
        3. Functions can be returned from other functions
        4. Functions can have properties and methods
*/

// TODO: Assigning Functions to Variables
/*
    Since JavaScript allows functions to be assigned to variables, they can be treated as values.
*/

function greet(name) {
    console.log(`Hello ${name}`)
}

// Assigning a function to a variable
const sayHello = greet
// sayHello("Abhi")


// 2️⃣ Passing Functions as Arguments (Callback Functions)
/*
    A function can be passed as an argument to another function. This is the foundation of callback functions.
*/

function callFunction(Fn) {
    Fn()
}
// callFunction(() => greet("Abhi"))



// 3️⃣ Returning Functions from Functions
/* Functions can return other functions, enabling the creation of dynamic functions.*/

function multiplier(factor) {
    return function (number) {
        return number * factor
    }
}

// const double = multiplier(2)
// console.log(double(5));

// 🔎 Real-world Example: Custom Greeting Function

function greetPerson(greeting) {
    return function (name) {
        return `${greeting} ${name}`
    }
}

// const sayHelloo = greetPerson("Helloo")
// console.log(sayHelloo("Abhi"));


function operate(a, b, operation) {
    return operation(a, b)
}

function add(x, y) {
    return x + y
}


console.log(operate(1, 2, add))
console.log(operate(2, 4, (x, y) => x * y))

