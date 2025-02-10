// TODO: Create an object representing a type of tea with properties for name, type and caffeine content

const tea = {  
    name: "Lemon tea",
    type: "Green",
    caffeine: "Low"
}

// TODO: Access and print the name and type properties of the tea Object
console.log(`Tea name: ${tea.name} and tea type is: ${tea["type"]}`);


// TODO: Add a new property `origin` to the tea object
// Methods
// 1. using dot operator
// 2. square bracket
// 3. Object.defineProperty() // TODO: RECAP

tea.origin = "China";
tea["origin2"] = "India";
const res = Object.defineProperty(tea, "origin3", {
    value: "Bharat",
    writable: true
})

// console.log(tea);
// console.log(res);


// TODO: Change the caffeine level of tea object to `Medium`
tea.caffeine = "Medium";

// TODO: Remove the type property from the tea object
delete tea.type


// TODO: Check if the tea object has the property origin
// console.log(tea.hasOwnProperty("origin"));
// console.log("origin" in tea);


// TODO: Use a for...in loop to print all the properties of the tea object 
for (const key in tea) {
    // console.log(`${key}: ${tea[key]}`);
}


// TODO:  Create a nested object rpresenting different types of teas and their properties
const myTeas = {
    greenTea: {
        name: "Green Tea"
    },
    blackTea: {
        name: "Black Tea"
    }
}

// TODO: Create a copy of tea object
const copyTea = { ...tea };


// TODO: create a custom method `describe` to the tea object that return a description string 
tea.describe = function () {
    return `description of the string`
}

// TODO: Merge two objects 

