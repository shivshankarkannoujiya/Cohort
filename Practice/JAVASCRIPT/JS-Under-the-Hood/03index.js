setTimeout(() =>
    console.log(`1: Hello After 2 Seconds`),
2 * 1000)

Promise.resolve()
    .then(() => console.log(`Promise Resolved !!`))

setTimeout(() =>
    console.log(`2: Hello After 2 Seconds`),
2 * 1000)