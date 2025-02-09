
const student = {

    firstname: "Abhishek",
    lastname: "Kannoujiya",
    hobbies: ["Coding", "Sleeping"],
    isLoggedIn: true,
    getFullName: function () {
        return `${this.firstname} ${this.lastname}`
    },
    address: {
        homeNo: 1,
        street: 1,
        state: "UP",
        countryCode: "IN"
    }
}


const remote = {

    color: "Black",
    brand: "xyz",
    dimension: {
        height: 1,
        width: 1
    },

    turnOff: function () {
        console.log(`Press to turn off`)
    },

    volumeUp: function () {
        console.log(`Press to increase the volume`)
    }

}