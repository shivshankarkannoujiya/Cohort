const myArr = [1, 2, 3, 4, 5];

// myArr.unshift(10); // Add Element in start
// myArr.shift(); // Remove one element from the start

// const isPresent = myArr.includes(5); // Return Boolean Value
// const index = myArr.indexOf(5); // Return the index of existed element
                                    // if not Exist: return -> -1
                                    

// Adds all the elements of an array into a string, separated by the specified separator string.
// const newArr = myArr.join();
// console.log(typeof newArr);


// TODO: RECAP
// join()
// slice(): do not manipulate original Array
// splice(): Manipulate original Array


console.log("A: ", myArr);
const myn1 = myArr.slice(1, 3);
console.log("slice result: ", myn1);
console.log("B: ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("slice result: ", myn2);
console.log("B: ", myArr);



