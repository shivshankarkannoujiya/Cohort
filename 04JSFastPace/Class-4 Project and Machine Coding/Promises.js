console.log(`Starting of Program`);

// const result = sum(2 ,5);
// console.log(`Result is: ${result}`);

// sum(2, 5, (result) => {
//     console.log(`Result is: ${result}`);
// } )

// TODO: Promisified
function sumWithPromise(a, b) {
    return new Promise((resolve) => {
        sum(a, b, function (result) {
            resolve(result)
        })
    })
}

sumWithPromise(3, 4)
    .then((result) => {
        console.log(`Promise result is: ${result}`)
    })
    .catch((err) => {
        console.log(`Error is: `, err)
    })



function sum(a, b, callback) {

    setTimeout(() => {
        callback(a + b)
    }, 5 * 1000);
}

console.log(`End of Program`);

