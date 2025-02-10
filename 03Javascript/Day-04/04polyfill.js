// TODO: map()

// Signature
/*
    Return: New Array
    Iterate Over each elements of Array
    Take Input: function as parameter
    Funtion parameters: value, index
    Do not modify Original Array
*/

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = [];
        for (let i = 0; i < this.length; i++){
            const value = userFn(this[i], i);
            result.push(value);
        }
        return result;
    }
}

const arr = [1, 2, 3, 4, 5];
const newArray = arr.myMap(val => val * 2);
console.log(newArray);

