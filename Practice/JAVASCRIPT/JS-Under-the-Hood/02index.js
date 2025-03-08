const obj = {
    personName: `Abhi`,
    greet: function () {
        console.log(`Hello, ${this.personName}`)
    }
}


console.log(`HII`)
setTimeout(obj.greet, 5 * 1000)
console.log(`BYE`)
