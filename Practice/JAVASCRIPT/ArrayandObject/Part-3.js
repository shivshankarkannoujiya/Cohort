const arr = [1, 2, 3, 4, 5];
// const reversedArr = arr.reverse();
// console.log(reversedArr);
// console.log(arr);
// reversedArr[0] = 10
// console.log(reversedArr);
// console.log(arr);


// console.log([1,2,,4].reverse());


// TODO: Reverse Array without mutating Original Array
// Method - 1
const revArr = [...arr].reverse();
// console.log(revArr);
// console.log(arr);

// revArr[0] = 30;

// console.log(revArr);
// console.log(arr);

// Method - 2
const reversedArray = Array.from(arr).reverse();
// reversedArray[0] = 10;
// console.log(reversedArray);
// console.log(arr);


