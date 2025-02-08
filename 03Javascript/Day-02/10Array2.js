// TODO: some() : return => true/false

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = myNums.some((val) => val % 2 === 0);

// TODO: sort(): sort in-place
const arr1 = [6, 5, 4, 3, 2, 1];
arr1.sort();


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);
// console.log(items);


// TODO: every()
const arr2 = [1, 30, 39, 29, 10, 13];
const result = arr2.every((currValue) => currValue < 40);


const arrOne = [1, 2, 3, 4, 5, 6, 7];
const arrTow = [5, 7, 6];

const isSubset = arrTow.every((val) => arrOne.includes(val));
console.log(isSubset);







