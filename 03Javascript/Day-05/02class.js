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

console.log(p1.getFullName());
console.log(p2.getFullName());
