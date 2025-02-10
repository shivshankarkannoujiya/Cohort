const arr = [1, 2, 3, 4, 5];
// Error: .forEach function does not exist on arr variable

// To write Polyfills
// TODO: Understand Real Signature
//      What does it takes input
//      What is returns or NOT

/*
Signature
    NO returns
    Take Inputs: Function as parameter
    Funtion parameters: value, index
    Call function for every value
 */

const result = arr.forEach(function (value, index) {
    // console.log(`Value at index: ${index} is ${value}`)
})
// console.log(result);



// TODO: forEach polyfill
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        const originalArr = this
        for (let i = 0; i < originalArr.length; i++){
            userFn(originalArr[i], i); 
        }
    }
}

const myArr = [2, 3, 4, 5, 6];
myArr.myForEach(function (value, index) {
    console.log(`Value at index ${index} is ${value}`)
})