const http = require("http");

const hostname = `127.0.0.1`;
const port = 3000

const server = http.createServer((req, res) => {

    if (req.method === "GET") {

        if (req.url === "/") {
    
            res.statusCode = 200
            res.setHeader(`Content-Type`, `text/plain`)
            res.end("Hello ice tea")
    
        } else if (req.url === "/ice-tea") {
            
            res.statusCode = 200
            res.setHeader(`Content-Type`, `text/plain`)
            res.end("Thanks for ordering ice-tea, it's really host !!")
    
        } else {
            
            res.statusCode = 404
            res.setHeader(`Content-Type`, `text/plain`)
            res.end("404 not found")
        }

    }else if (req.method === "POST") {
        if (req.url === "/tea") {

            res.statusCode = 200
            res.setHeader(`Content-Type`, `text/plain`)
            res.end("lemon tea")
        }

    } else {
        res.statusCode = 405
        res.end("Method not allowed")
    }
})


server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`)
})