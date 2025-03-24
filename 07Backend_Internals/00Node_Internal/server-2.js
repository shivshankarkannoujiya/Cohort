// const http = require("http");
const express = require("express");

const handlerFunctionV2 = express();


handlerFunctionV2.get("/", (req, res) => res.end("Homepage"))
handlerFunctionV2.get("/about", (req, res) => res.end("About Us"))
handlerFunctionV2.get("/contact", (req, res) => res.end("contact Us"))


// const server = http.createServer(handlerFunctionV2)
// server.listen(3000, () => {
//     console.log(`Server started at http://localhost:3000`)
// });


handlerFunctionV2.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`)
});