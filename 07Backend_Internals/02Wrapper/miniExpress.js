const http = require("http");

function cohortJS() {

    const routes = {
        GET: {},
        POST: {}
    }

    function get(path, handler) {
        routes.GET[path] = handler
    }

    function post(path, handler) {
        routes.POST[path] = handler
    }

    function handleRequest(req, res) {

        res.statusCode = 200

        res.status = function (statusCode) {
            res.statusCode = statusCode
            return res
        }

        res.send = function (data) {
            const contentType = typeof data === "object" ? "application/json" : "text/plain" 
            res.setHeader("Content-Type", contentType);
            res.end(typeof data === "object" ? JSON.stringify(data) : data);
        }

        res.json = function (data) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data))
        }

        // Parse JSON body for POST requests
        if (req.method === "POST") {

            let body = "";
            req.on("data", (chunjk) => {
                body+=chunk
            })

            req.on("end", () => {
                req.body = body ? JSON.parse(body) : {};
                processRoute(req, res)
            })
        } else {
            processRoute(req, res);
        }

    }

    function processRoute(req, res) {
        const method = req.method;
        const url = req.url;
        const routeHandler = routes[method][url];

        if (routeHandler) {
            routeHandler(req, res);
        } else {
            res.status(404).send("404 Not Found")
        }
    }

    function sunoJI(port, callback) {
        const server = http.createServer(handleRequest);
        server.listen(port, callback)
    }

    return {
        get,
        post,
        sunoJI
    }
}

module.exports = cohortJS