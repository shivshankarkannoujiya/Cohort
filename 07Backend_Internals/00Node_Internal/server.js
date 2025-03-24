const http = require("http");


const handlerFunction = (req, res) => {

    console.log(`Incomming Request`);
    console.log(req.method);
    console.log(req.url);

    switch (req.method) {
        
        case `GET`: { 
            if (req.url === "/") return res.end("Homepage");
            if (req.url === "/contact") return res.end("Contact Us");
            if (req.url === "/about") return res.end("About Us");
        }
            break;
        case `POST`: { }
            break;
    }
    res.end(`Ye lo ji response`);
}

const server = http.createServer(handlerFunction);

server.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`)
});