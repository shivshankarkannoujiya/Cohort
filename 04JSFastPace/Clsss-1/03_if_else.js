function prepareChai(type) {

    if (typeof type !== "string") return;
    type = type.toLowerCase()
    
    if (type === "masala chai") {
        console.log("Adding spices to the chai")
    } else {
        console.log("Preparing regular chai")
    }
}


function calculateTotalBill(amount) {
    // convert to number
    amount = Number(amount)
    // if (amount > 1000) {
    //     return amount * 0.9
    // } 
    // return amount
    
    amount > 1000 ? amount * 0.9 : amount
}
const finalBill = calculateTotalBill(1200)



function trafficLight(color) {
    if (typeof color !== "string") return;
    color = color.toLowerCase()
    
    switch (color) {
        case "red":
            console.log("Stop")
            break;
        case "yellow":
            console.log("Slow Down")
            break;
        case "green":
            console.log("Go")
            break;
        default:
            console.log("Invalid traffic color")
            break;
    }
}

function checkTruthyValue(value) {
    if (value) {
        console.log(`${value}: TRUTHY`)
    } else {
        console.log(`${value}: FLASY`)
    }
}

// checkTruthyValue(1) // truthy
// checkTruthyValue(0) // falsy
// checkTruthyValue("abc") // truthy
// checkTruthyValue("") // falsy
// checkTruthyValue([]) // truthy
// checkTruthyValue([1,2]) // truthy
// checkTruthyValue({}) // truthy
// checkTruthyValue({name: "xyz"}) // truthy
// checkTruthyValue(NaN) // falsy
// checkTruthyValue(null) // falsy
// checkTruthyValue(undefined) // falsy



function login(username, password, loginIp) {
    if (username === 'admin' && (password === "1234" || loginIp === "127.168.0.1")) {
        console.log("Login successfull !!")
    } else {
        console.log("Invalid credentials")
    }
}

