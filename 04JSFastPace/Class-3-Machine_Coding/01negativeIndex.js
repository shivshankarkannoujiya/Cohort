// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr[-1]);
// TODO: Enable -ve Indexing
// CONCEPT => PROXY


const user = {
    name: "Raj",
    age: 40,
    password: "123abc"
}

const proxyUser = new Proxy(user, {
    get(target, prop) {
        // console.log("Target: ",target)
        // console.log("Prop: ",prop)
        // TODO: Stop to access the `password` property(prop)
        if (prop === "password") {
            throw new Error("Access Denied")
        }
        return target[prop]
    },

    set(target, prop, user) {
        
    }
})

// console.log(proxyUser.password);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function negativeIndex(arr) {

    
    return new Proxy(arr, {

        //Part-1: arr[-1] = output
        get(target, prop) {
            const index = Number(prop)
            if (index < 0) {
                return target[target.length + index] // index = -2: length = 4
            }                                        // length + (-2): 4 - 2 = 2                
            return target[index]
        },

        // Part-2: arr[-2] = 13 `set the value`
        set(target, prop, value) {
            const index = Number(prop)
            if (index < 0) {
                target[target.length + index] = value
            }
            target[index] = value
            return true // send confirmation that is value set or not
        }

    })
}

const proxyArray = negativeIndex(arr)
// Now we will get proxy array
console.log(arr[-1])
console.log(proxyArray[-1]);

// TODO: Check whether original array will change or not: YES(modify hoga)
proxyArray[-1] = 22
console.log(proxyArray);
console.log(arr);
