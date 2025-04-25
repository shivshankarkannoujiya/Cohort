/**
 * @description
 * Create an object representing a type of tea with properties for name, type, and caffeine content
 */

const teas = {
  name: "Lemon",
  type: "Green",
  caffeine: "low",
};

/**
 * @description
 * Access and print the name and type properties of the tea object
 */

console.log(teas["name"]);
console.log(teas.type);

/**
 * @description
 * Add a new property `origin` to the teas object
 */

teas.origin = "Assam";
// teas["origin"] = "Assam"

/**
 * @description
 * Change the caffeine level of the object to `Medium`
 */

teas.caffeine = "Medium";

/**
 * @description
 * Remove the `type` property from the object
 */
delete teas.type;

/**
 * @description
 * Check if the tea object has a property `origin`
 */
console.log("origin" in teas);
console.log(teas.hasOwnProperty("origin"));

/**
 * @description
 * Use a for...in loop to print all `properties` of the teas object
 */

for (let key in teas) {
  console.log(`${key}: ${teas[key]} `);
}

/**
 * @description
 * Create a nested object representing different types of teas and their properties
 */

const myTeas = {
  greenTeas: {
    name: "Green Tea",
  },
  blackTeas: {
    name: "Black Tea",
  },
};

/**
 * @description
 * Create a copy of teas object
 */

// Not a copy: Passing reference (Both are pointing same Memory location)
const anotherCopy = teas;

const shallowCopy = { ...teas };

const teas_string = JSON.stringify(teas);
const deepCopy = JSON.parse(teas_string);

/**
 * @description
 * Add a custom tea method `describe` to the tea object that returns description string
 */

teas.describe = function () {
  return `This is ${this.name} tea`;
};

/**
 * @description
 * Merge Two objects representing different teas into one
 */

const teaOne = {
  name: "Green Tea",
};

const teaTwo = {
  name: "Black Tea",
};

const allTeas = { ...teaOne, ...teaTwo };
