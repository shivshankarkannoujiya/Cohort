const arr = [1, 2, 3, 4, 5, 6];
const evenNum = arr.findIndex((val) => val % 2 == 0);


const peoples = [
    {name: "Jai", age: 23},
    {name: "Raj", age: 20},
    {name: "Bob", age: 25},
]
const value = peoples.findIndex((people) => people.age > 20) // 0
// console.log(peoples[value]); // peoples[0]


// TODO: Write polyfill
if (!Array.prototype.myfindIndex) {
    Array.prototype.myfindIndex = function (callbackFn) {
        for (let i = 0; i < this.length; i++){
            if (callbackFn(this[i], i, this)) {
                return i;
            }
        }
        return -1;
    }
}

const value2 = peoples.myfindIndex((people) => people.age > 20)
console.log(peoples[value2]);
