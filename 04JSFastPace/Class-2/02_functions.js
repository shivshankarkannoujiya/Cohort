function greet(name) {
    console.log(`Hello ${name}`)
}

// greet("Abhi")
// greet("Abhishek")


let globalVar = "I am global Varibale"

function modifyGlobal() {
    globalVar = "I am modified"
    let blockScopedVar = "I am blocked-scoped"
    console.log(blockScopedVar)
}



// IIFE: Immediately Invoked function Expression
const config = function () {
    const settings = {
        theme: "Dark"
    }
    return settings
}()
// (() => {})()


// TODO: call & bind: `REVISE`
const person1 = {
    name: "Abhi",
    greet: function () {
        console.log(`Hello ${this.name}`)
    }
}

const person2 = {
    name: "Abhishek"
}

/*
    Problem Statement
        > Is there any way that `call: greet() of person1` 
        > Context de du person2 ka
    - Person1 ka function call ho
    - Properties person2 ki aye

    call: directly call
    bind: returns new function
*/

person1.greet.call(person2)
// person1.greet.bind(person2)() or
const bindGreet = person1.greet.bind(person2)
// console.log(bindGreet);
// bindGreet()

