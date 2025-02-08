const myNums = [1, 2, 3];

// TODO: reduce()
const totalSum = myNums.reduce(function (accumulator, currentValue) {
    // console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)

// OR
// Using the Arrow Function
const myTotalSum = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(myTotalSum);


//TODO: shoppingCart challenge
const shoppingCart = [
    {
        itemName: "Javascript Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Generative AI Course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Course Price: ${totalPrice}`);


