function x() {
    console.log(`Hii`)
}

function y(some_fn) { 
    return some_fn
}

// y(x) : passing the function < reference of the function >
// y(x()) : passing the return value of the function

// TODO: Passing Anonymous function
// const ans = y(function () {
//     console.log(`Hello !!`)
// })
// console.log(ans());

// ------------------------------------------------------------------

// Object
const user = {
    name: `Jayant`,
    age: 26
}

// user.name
// user["name"]

// TODO: Create a function that create user object
function userCreator(name, age) {
    return {
        name: name,
        age: age
    }
}

const createdUser = userCreator("jayant", 30);
createdUser.gender = "Male"
createdUser["city"] = "Varansi"

createdUser.isSenior = function () {
    return this.age > 60;
}

// console.log(createdUser);
// console.log(createdUser.age);
// console.log(createdUser["age"]);
// console.log(createdUser.isSenior());




