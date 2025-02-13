// Challenge - 1
const book = {
    title: "Javascript Mastery",
    author: "John Doe",
    year: 2023,
    getSummary: function () {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
};

// TODO: Modify and delete properties dynamically.
book["year"] = 2024  // or
book.year = 2025
delete book.getSummary


// Challnege - 2
const Users = [
    {name: "Alice", age: 22},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 27},
]

// TODO: Filter users older than 25
const filteredUser1 = Users.filter(user => user.age > 25);


// TODO: Try using .map(), .reduce(), and .find().
// const filteredUser2 = Users
//     .map(function (user) {
//         return user.age > 25 ? user : null
//     })
//     .filter(function (user) {
//         return user !== null
//     })

const filteredUser2 = Users
    .map(user => user.age > 25 ? user : null)
    .filter(user => user !== null)


const filteredUser3 = Users.reduce((acc, user) => {
    if (user.age > 25) {
        acc.push(user)
    }
    return acc;
}, [])


// Returns the first element that satisfy the condition
const filteredUser4 = Users.find((user) => user.age > 25);
// console.log(filteredUser4);


// TODO: write polyfill of .find()
if (!Array.prototype.myFind) {
    Array.prototype.myFind = function (userFn) {
        for (let i = 0; i < this.length; i++){
            if (userFn(this[i], i, this)) {
                return this[i]
            }
        }
        return undefined;
    }
}

// const filterUser = Users.myFind((user) => user.age > 25);
// console.log(filterUser);


const arr2 = ["A", "B", "C"];
const ans = arr2.entries();
console.log(ans.next().value);


// Using .entries() and for ...of
if (!Array.prototype.myFind2) {
    Array.prototype.myFind2 = function (callbackFn) {
        for (const [index, value] of this.entries()) {
            if (callbackFn(value, index, this)) {
                return value
            }
        }
        return undefined;
    }
}

// const ans1 = Users.myFind2((user) => user.age > 25);
// console.log(ans1);
