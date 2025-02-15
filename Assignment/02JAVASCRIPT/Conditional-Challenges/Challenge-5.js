function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `Leap Year`;
    }
    return `Not a Leap Year`
}

console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
