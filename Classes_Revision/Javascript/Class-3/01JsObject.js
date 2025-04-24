// let p1 = {
//   fname: "Abhi",
// };

// let p2 = p1;
// p2.fname = "Rohan";

/**
 * @description
 * Changes will occure in both (p1 & p2)
 * Because both are pointing same memory location.
 */

/**
 * @description
 * Till now we are copying the Address(reference) of the memory location
 * TODO: we want to copy the Actual Object not the reference
 */

// let p1 = {
//   fname: "Rohan",
//   lanme: "Kumar",
// };

// let p2 = {
//   fname: p1.fname,
//   lanme: p1.lanme,
// };

/**
 * @description
 * if we will make change into  =>  p2
 * Chnages will not reflect into  => p1
 */
// p2.fname = "Raj";
// p2.lanme = "Singh";

// #PROBLEM
// if there is 100k {key: value} then it will take to much time to copy the values
// TODO: User ... operator (spread operator)

// let p2 = {
//     ...p1
// }

// let p1 = {
//   fname: "Ajay",
//   lname: "Rana",
//   address: {
//     h: 1,
//     s: 1,
//   },
// };

// let p2 = {
//     fname: p1.fname,
//     lname: p1.lname,
//     address: p1.address
// }

// let p2 = {
//     ...p1
// }

// Changes will not reflect into p1
// p2.fname = "Rohit"
// p2.lname = "Kumar"

// Chnages will reflect into p2
// p2.address.h = 10

// console.log(p2);

/**
 * @description
 * These concept known as SHALLOW COPY: UPAR - UPAR se COPY
 */

// TODO: DEEP COPY

// let p1 = {
//   fname: "Ajay",
//   lname: "Rana",
//   address: {
//     h: 1,
//     s: 1,
//   },
// };

// let p2 = {
//   ...p1,
//   address: {
//     ...p1.address,
//   },
// };

/**
 * @description
 * There will be problem if,
 * One more nested object present inside the: address
 */

/**
 * @description
 * TODO:
 * Convert the p1_object => String
 * Store into => p1_object_string
 * Again convert the `p1_object_string` into Object
 * Store into p2
 */

let p1 = {
  fname: "Ajay",
  lname: "Rana",
  address: {
    h: 1,
    s: 1,
  },
};

// const p1_object_string = JSON.stringify(p1);
// console.log(p1_object_string);

// const p2 = JSON.parse(p1_object_string);
// console.log(p2);

function createDeepCopyOfObject(obj) {
  const convert_obj_string = JSON.stringify(obj);
  const deepCopiedObject = JSON.parse(convert_obj_string);
  return deepCopiedObject;
}


// const p2 = createDeepCopyOfObject(p1)
// p2.address.h = 'HACKED'
// console.log(p1);
// console.log(p2);


