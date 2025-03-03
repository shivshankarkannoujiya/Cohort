if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback) {
        let acc = this[0]
        for (let i = 1; i < this.length; i++){
            acc = callback(acc, this[i])
        }
        return acc
    }
}

if (!Array.prototype.myReduceV2) {
    
    Array.prototype.myReduceV2 = function (callback, initialValue = undefined) {

        if (!initialValue) {
            let accumulator = this[0]
            for (let i = 1; i < this.length; i++){
                accumulator = callback(accumulator, this[i])
            }
            return accumulator
        }

        // if initialValue: given by user
        let accumulator = initialValue
        for (let i = 0; i < this.length; i++){
            accumulator = callback(accumulator, this[i])
        }
        return accumulator
    }
}

if (!Array.prototype.myReduceV3) {
    Array.prototype.myReduceV3 = function (callback, initialValue = undefined) {

        // let accumulator = initialValue ?? this[0]
        // let accumulator = initialValue ? initialValue : this[0]
        let accumulator = initialValue || this[0]
        let startIndex = initialValue ? 0 : 1

        for (let i = startIndex; i < this.length; i++){
            accumulator = callback(accumulator, this[i])
        }
        return accumulator
    }
}

const arr = [1, 2, 3, 4, 5]
const total = arr.myReduceV3((acc, currVal) => acc + currVal, 3)
console.log(total);
