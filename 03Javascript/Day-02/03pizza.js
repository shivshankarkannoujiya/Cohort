let numberOfGuests = 4;
let pizzaSize;

if (numberOfGuests <= 2) {
    pizzaSize = "small"
} else if (numberOfGuests <= 5) {
    pizzaSize = "medium"
} else {
    pizzaSize = "large"
}

console.log(`pizzaSize: ${pizzaSize}`);


// Internally if-else works on `GREEDY ALGORITHM`