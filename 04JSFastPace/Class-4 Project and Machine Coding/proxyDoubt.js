// TODO: Why changes Occuring in original Array

const arr = [1, 2, 3, 4, 5]

function enableNegativeIndexing(targetArr) {
    return new Proxy(targetArr, {
        set(target, prop, value) {
            target[prop] = `${value}🔥`
        },
        get(target, prop) {
            return target[prop]
        }
    })
}

const ProxiedArray = enableNegativeIndexing(arr);

console.log('Original Array: ', arr)
console.log('Proxied Array: ', ProxiedArray)

ProxiedArray[1] = 102

console.log('Original Array: ', arr)
console.log('Proxied Array: ', ProxiedArray)

/*
    Changes Occured in Both Array
    1. Array stored in `HEAP Memory`
    2. targetArr: arr ka `Address pass hoga` When we will run `enableNegativeIndexing(arr)`
    3. jab hum `targetArr` ko proxy ko denge then
    4. set,get => ke andar `target` hai wo: `Address of: Original Arr`
    5. SO we are also playing with `Original Array`
    6. That is the reason `Changes Occured in Original Array`
*/