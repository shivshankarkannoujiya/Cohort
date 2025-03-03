
class CustomPromise {

    constructor(executorFn) {

        this._state = `pending`
        this._successCallbacks = []
        this._errorCallbacks = []
        this._finallyCallbacks = []
        this.value = undefined

        executorFn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        )
    }

    then(callback) {
        if (this._state === `fulfilled`) {
            callback(this.value)
            return this
        }
        this._successCallbacks.push(callback)
        return this
    }

    catch(callback) {
        if (this._state === `rejected`) {
            callback()
            return this
        }
        this._errorCallbacks.push(callback)
        return this
    }

    finally(callback) {
        if (this._state !== `pending`) {
            callback()
            return this
        }
        this._finallyCallbacks.push(callback)
        return this
    }

    resolverFunction(value) {
        this._state = `fulfilled`
        this.value = value
        this._successCallbacks.forEach(cb => cb(value))
        this._finallyCallbacks.forEach(cb => cb())
    }

    rejectorFunction(err) {
        this._state = `rejected`
        this._errorCallbacks.forEach(cb => cb(err))
        this._finallyCallbacks.forEach(cb => cb())
    }
}



function wait(seconds) {
    return new CustomPromise((resolve, reject) => {
        setTimeout(() => resolve("Comming from Resolve"), seconds * 1000)
    })
}

const p = wait(5)

p
    .then((value) => console.log(` v1: Promise resolved after 5 sec: `, value))
    .catch((err) => console.log(` v1: Promise rejected after 5 sec: `, err))
    .finally(() => console.log(`   v1: I use to run always`))

p
    .then((value) => console.log(` v2: Promise resolved after 5 sec: `, value))
    .catch((err) => console.log(` v2: Promise rejected after 5 sec: `, err))
    .finally(() => console.log(`   v2: I use to run always`))