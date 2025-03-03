if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        let result = []
        for (let i = 0; i < this.length; i++){
            const cbResult = callback(this[i], i, this)
            result.push(cbResult)
        }
        return result
    }
}

const arr = [1, 2, 3]
const doubledArray = arr.myMap((e) => e * 2 )
console.log(doubledArray)

