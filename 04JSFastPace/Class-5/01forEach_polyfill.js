if (!Array.prototype.myforEach) {
    Array.prototype.myforEach = function (callback) {
        for (let i = 0; i < this.length; i++){
            callback(this[i], i, this)
        }
    }
}

const arr = [1, 2, 3, 4, 5]
arr.myforEach((value, index) => {
    console.log(`Value at index: ${index} => ${value}`)
})
