const http = require("http");

class MiniExpress {

    constructor() {
        this.routes = {
            GET: {},
            POST: {}
        }
    }

    get(path, handler) {
        this.routes.GET[path] = handler
    }

    post(path, handler) {
        this.routes.POST[path] = handler
    }

    handleRequest(req, res) {
        
        res.statusCode = 200

        res.status = function (statusCode){
            res.statusCode = statusCode
            return res
        }

        res.send = function (data) {
            const contentType =
                typeof data === "object" ? "application/json" : "text/plain";
            res.setHeader("Content-Type", contentType);
            res.end(typeof data === "object" ? JSON.stringify(data) : data);
        }

        res.json = function (data) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
        }

        // Parse json body for post requests
        if (req.method === "POST") {

            let body = ""
            req.on("data", (chunk) => {
                body += chunk;
            })

            req.on("end", () => {
                req.body = body ? JSON.parse(body) : {};
                this.processRoute(req, res)
            })
        } else {
            this.processRoute(req, res)
        }
    }

    processRoute(req, res) {

        const method = req.method;
        const url = req.url;
        const routeHandler = this.routes[method][url];

        if (routeHandler) {
            routeHandler(req, res);
        } else {
            res.status(404).send("404 Not found")
        }
    }

    listen(port, callback) {
        const server = http.createServer((req, res) => this.handleRequest(req, res));
        server.listen(port, callback)
    }
}

module.exports = MiniExpress