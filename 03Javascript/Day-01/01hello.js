function printChai() {
    console.log('Hello Chai');
}

function bringBrush(numberOfBrush) {
    console.log(`Hanji, Carried ${ numberOfBrush } Brush`)
}

function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

printChai();
bringBrush(4);

const result = addTwoNumbers(2, 1);
console.log(`RESULT: ${ result }`);