Function.prototype.describe = function () {
    console.log(`Function name is: ${this.name}`);
}

function greet(name) {
    console.log(`My name is: ${name}`);
}


// Function name is: greet
// greet.describe();


//TODO: Tell the Technical Name

// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const substract = function (a, b) {
    return a - b;
}

// Arrow function
const multiply = (a, b) => a * b;


// TODO: Tell the Behaviour

// First Class Function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const result = applyOperation(4, 2, (x, y) => x / y);
console.log(result);
