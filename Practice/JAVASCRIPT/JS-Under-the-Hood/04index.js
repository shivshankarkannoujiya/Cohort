// Starvation

setTimeout(function timerFunction() {
    console.log(`Execute after 0 Seconds`)
}, 0)

Promise.resolve()
    .then(function p1()  {
        console.log(`1: Promise Resolved`)
    
        Promise.resolve()
            .then(function p2()  {
                console.log(`2: Promise Resolved`)

                Promise.resolve()
                    .then(function p3()  {
                        console.log(`3: Promise Resolved`)

                        Promise.resolve()
                            .then(function p4()  {
                                console.log(`4: Promise Resolved`)
                            })
                    })
            })
    })