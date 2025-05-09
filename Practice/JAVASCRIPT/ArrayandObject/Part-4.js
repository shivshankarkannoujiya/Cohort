/*
    indexOf(searchElement)
    indexOf(searchElement, fromIndex)
*/

const arr = [1, 2, 3, 4, 5, NaN];

// console.log(arr.indexOf(4));
// console.log(arr.indexOf(2, 3));
// console.log(arr.indexOf(NaN));


const arr2 = [1, 2, , 4];
// console.log(arr2.indexOf(undefined));


/*
    includes(searchElement)
    includes(searchElement, fromIndex)
*/

console.log(arr2.includes(undefined)); //true
console.log(arr.includes(NaN)); // true
console.log(arr.includes(10));
console.log(arr.includes(5, -3));

console.log(arr.includes(5, -1000)); // search reset to => 0 index

// Fails
// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Bob", age: 35 }
// ];
// console.log(people.indexOf({ name: "John", age: 30 }));





