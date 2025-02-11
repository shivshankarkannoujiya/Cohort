// TODO: filter()
// Signature
/*
    Return: newArray
    Take IP: Callback
    if Callback return TRUE, Then include current value in newArray
*/

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = [];

        for (let i = 0; i < this.length; i++){
            if (userFn(this[i], i)) {
                result.push(this[i]);
            }
        }
        return result;
    }
}

const arr = [1, 2, 3, 4, 5, 6];
const even = arr.myFilter(val => val % 2 == 0);
console.log(even);
