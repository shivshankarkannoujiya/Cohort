class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}



const p1 = new Person("Raj", "Singh");
const p2 = new Person("Anirudh", "Jwala");

// console.log(p1.getFullName());
// console.log(p2.getFullName());

// console.log(Person.prototype);
// console.log(p1.__proto__);


// TODO: Under the hood
// Working like Object literal
// Code is clean: Syntatic Suger

// p1.__proto__ = Person.prototype