// Primitive
const score = 12 // Number
const text = "Hello" // String
const isTrue = true // Boolean
const nothing = null // object/Null
const undefinedVar = undefined // undefined
const symbolVar = Symbol() // Symbol


// Non-primitive/Object
let person = {
    name: "John",
    age: 19,
    isDtudent: true
}

// TODO: Conversion
/*

    1.TODO: Recommended => Number(num)
    const num = "42";
    const convertedNum = Number(num)
        Case-1: 
            num = "42" => type: number
        Case-2: 
            num = "42a" =>  type: NaN  
    2.
    const convertedNum = +num;
        Case-1: 
            num = "42" => type: number
        Case-2: 
            num = "42a" =>  type: NaN 
    3.
    const convertedNum = parseInt(num);
        Case-1: 
            num = "42" => type: number
        Case-2: 
            num = "42a" =>  type: number
        Case-3:
            num = "a42a" =>  type: NaN
*/


const num = "a42";
// const convertedNum = Number(num) //TODO: Recommended Approach
// const convertedNum = +num;
// const convertedNum = parseInt(num);

const str = 123
const convertedString = String(str)

//TODO: Operations
const a = 10
const b = 3

// Arithmatic
const sum = a + b
const difference = a - b
const product = a * b
const quotient = a / b
const remainder = a % b
const power = a ** b

const x = 10
const y = 5;

// Comparision
// console.log(x === y) // data + data types: strict comparision
// console.log(x == y)  // only data: Equal to
// console.log(x != y)  // Not Equal to
// console.log(x > y)
// console.log(x < y)
// console.log(x <= y)


// console.log(Math.max(10, 4))
// console.log(Math.min(10, 4))

// console.log((Math.random() * 10) + 1);

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + 1) + minCeiled
}

// TODO: String

const firstName = "Raj"
const lastName = "Singh"
const fullName = firstName + " " + lastName

const message = "Hello World"
console.log(message.length)
console.log(message.toUpperCase())
console.log(message.toLowerCase())
console.log(message.indexOf('W'))
console.log(message.slice(0, 5))

const myName = "Abhi"
const greeting = `Hello ${myName} from Chaicode`