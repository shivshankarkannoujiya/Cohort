const heros = ["thor", "spiderman"];

const herosPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`Spiderman power: ${this.spiderman}`)
    }
} 

Object.prototype.abhi = function () {
    console.log(`Abhi is present in all objects`);
}

Array.prototype.heyAbhishek = function () {
    console.log(`Abhishek says hello`);
}

// herosPower.abhi();
// heros.abhi();

heros.heyAbhishek();
// herosPower.heyAbhishek(); //Not present


// TODO: Inheritance

const User = {
    username: "user",
    email: "user@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    createAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
    // `TASupport` can access all properties of `TeachingSupport`
}

// `Teacher` can access all properties of `User` 
Teacher.__proto__ = User


// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


const username = "abhi     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

username.trueLength();
"abhishek".trueLength();