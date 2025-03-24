// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// exports.add = add
// exports.sub = sub
// exports.abhi = `I am attached on exports object`


// exports.add = function(a, b){
//     return a + b;
// }
// exports.sub = function(a, b){
//     return a - b;
// }

module.exports = function () {
    console.log(`This is from default export`);
}

const add = function (a, b) {
    return a + b;
}