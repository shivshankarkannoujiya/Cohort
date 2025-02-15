function checkNumberType(num) {
    if (num > 0) {
        return `Positive`;
    } else if (num < 0) {
        return `Negative`;
    } else {
        return `Zero`;
    }
}

console.log(checkNumberType(1));
console.log(checkNumberType(-3));
console.log(checkNumberType(0));
