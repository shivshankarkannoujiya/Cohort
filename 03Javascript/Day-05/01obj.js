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
    getFullName: function () {
        return `${this.firstname} ${this.lastname}`
    }
}

// VOILET Coding Principle
// DRY: Do not repeat yourself

console.log(obj1.getFullName());
console.log(obj2.getFullName()); 