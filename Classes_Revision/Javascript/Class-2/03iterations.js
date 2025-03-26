const teas = ["masala", "ginger", "oolong", "orange", "lemon"];

function printArray(tea) {
    for (let i = 0; i < tea.length; i++){
        console.log(`Tea at index ${i}: ${tea[i]}`);
    }
}

// printArray(teas);

const myArray = [1, 2, 3, 4, 5];

function sumfac(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

const result = sumfac(myArray);
console.log(`Total sum: ${result}`);
