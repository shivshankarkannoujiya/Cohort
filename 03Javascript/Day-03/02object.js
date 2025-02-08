// const tinderUser = new Object(); // singleton

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sam Altman";
tinderUser.isLoggedIn = true

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "abhi",
            lastname: "kannoujiya"
        }
    }
}


// TODO: Combines 2 Objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { ...obj1, ...obj2 };


// TODO: Combining using Object.assign()
const obj4 = Object.assign({}, obj1, obj2);

const users = [

    {
        id: 1,
        email: "a@gmail.com"
    },

    {
        id: 2,
        email: "b@gmail.com"
    },

    {
        id: 3,
        email: "c@gmail.com"
    },
]

// console.log(users[0].email);


// console.log(tinderUser);
// TODO: Print all the key of the `tinderUser`: [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.keys(tinderUser));


// TODO: Print all the values of the `tinderUser`: [ '123abc', 'Sam Altman', true ]
// console.log(Object.values(tinderUser));


// TODO: Convert the Object => Array && key,value => Array
/*
[
    [ 'id', '123abc' ],
    [ 'name', 'Sam Altman' ],
    [ 'isLoggedIn', true ]
]
*/
// console.log(Object.entries(tinderUser));


// TODO: Check the Property Exist or not: true/false
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// TODO: RECAP
// Object.keys
// Object.values
// Object.entries
// tinderUser.hasOwnProperty




