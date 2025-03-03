if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback) {
        let acc = this[0]
        for (let i = 1; i < this.length; i++){
            acc = callback(acc, this[i])
        }
        return acc
    }
}

const arr = [1, 2, 3, 4, 5]
const total = arr.myReduce((acc, currVal) => acc + currVal)
console.log(total);
