// Sorting & Searching
// TODO:  Sort an array of numbers

const numbers = [25, 2, 119, 1, 15, 26, 213];
// const ans = numbers.sort((a ,b) => a - b )
// console.log(ans);

// console.log(numbers.sort());

// const arr = ["Apple", "app", "Ban"];
// console.log(arr.sort());


const sortedNumsInAscendingOrder = numbers.sort((a, b) => a - b);
const sortedNumsIndescendingOrder = numbers.sort((a, b) => b - a);
// console.log(sortedNumsIndescendingOrder);

// TODO: do not modify the original Array
// console.log(numbers.toSorted())
// console.log(numbers);

const sortedArray = numbers.toSorted((a, b) => a - b);
console.log(sortedArray);
