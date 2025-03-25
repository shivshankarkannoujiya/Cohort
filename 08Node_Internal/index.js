const fs = require(`fs`);
const crytp = require(`crypto`);

setTimeout(() => console.log(`set Timeout`), 0);
setImmediate(() => console.log(`set Immediate`));

fs.readFile(`sample.txt`, function (err, data) {
    setTimeout(() => console.log(`set Timeout inside FS`), 0);
    setImmediate(() => console.log(`set Immediate inside FS-1`));

    process.env.UV_THREADPOOL_SIZE = 1

    const start = Date.now();

    crytp.pbkdf2(`password`, `salt1`, 100000, 1024, `sha512`, (err, data) => {
        console.log(`[${Date.now() - start}ms]: Password 1 Hashed`);
    })

    crytp.pbkdf2(`password`, `salt1`, 100000, 1024, `sha512`, (err, data) => {
        console.log(`[${Date.now() - start}ms]: Password 2 Hashed`);
    })

    crytp.pbkdf2(`password`, `salt1`, 100000, 1024, `sha512`, (err, data) => {
        console.log(`[${Date.now() - start}ms]: Password 3 Hashed`);
    })

    crytp.pbkdf2(`password`, `salt1`, 100000, 1024, `sha512`, (err, data) => {
        console.log(`[${Date.now() - start}ms]: Password 4 Hashed`);
    })

    // TODO: Increate one more and see: it will take double time => 4 workers are busy
    crytp.pbkdf2(`password`, `salt1`, 100000, 1024, `sha512`, (err, data) => {
        console.log(`[${Date.now() - start}ms]: Password 4 Hashed`);
    })
})

console.log(`Hello`);

