// singleton: When we create Object using Constructor <apne tarah ka ek hi object hai>
// Object.create
// literals ki tarah declare krenge then `singleton` nhi banega

// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Abhishek",
    "fullName": "Abhishek Kannoujiya",
    [mySym]: "mySym1",
    age: 23,
    email: "abhi@google.com",
    location: "Gorakhpur",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}


// TODO: Access Values
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);


// TODO: Chnage the user email
JsUser.email = "newemail@google.com";


// TODO: Make the JsUser unchangable: freez
// Object.freeze(JsUser);


// TODO: Add a function to JsUser
JsUser.greeting = function () {
    console.log(`Hello Js User, ${this.name}`);
}

