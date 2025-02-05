let arr = [1, 2, 3, 4, 5, 6];


function sumFactory(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

const sumOfNumbers = sumFactory(arr);
console.log(`Sum is: ${sumOfNumbers}`);
console.log(sumFactory([8,8,8,8,8]));
