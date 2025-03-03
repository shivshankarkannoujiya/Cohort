
// TODO: Debouncing
function ptaNhi(fn, delay) {
    // console.log(arguments)

    let myId
    return function (...args) {
        clearTimeout(myId)
        myId = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

function greet(name) {
    console.log(`Hello ${name}`)
}

const sachmeNhiPta = ptaNhi(() => greet("Abhi"), 3000)
sachmeNhiPta()
sachmeNhiPta()
sachmeNhiPta()


