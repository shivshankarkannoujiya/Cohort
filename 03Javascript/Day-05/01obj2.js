const obj1 = {
    firstname: "Raj",
    lastname: "Singh",
    getFullName: function () {
        return `${this.firstname} ${this.lastname}`
    }
}

const obj2 = {
    firstname: "Anirudh",
    lastname: "Jwala",
}

obj2.__proto__ = obj1;
obj1.__proto__ = null;

console.log(obj1.getFullName());
console.log(obj2.getFullName());

// obj2.toString is not a function
console.log(obj2.toString());

