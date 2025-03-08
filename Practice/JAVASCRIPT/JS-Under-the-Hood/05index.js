console.log(`Age is: ${age}`)

//TDZ: Temporal Dead Zone
// let age = 14

console.log(`Age is: ${age}`)

var test = function () {
    console.log(`Testing`)
}

console.log(`Age is: ${age}`)

