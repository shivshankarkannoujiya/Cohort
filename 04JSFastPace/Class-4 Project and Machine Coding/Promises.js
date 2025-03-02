console.log(`Starting of Program`);

// const result = sum(2 ,5);
// console.log(`Result is: ${result}`);

sum(2, 5, (result) => {
    console.log(`Result is: ${result}`);
} )


function sum(a, b, callback) {

    setTimeout(() => {
        callback(a + b)
    }, 5 * 1000);
    
}

console.log(`End of Program`);

