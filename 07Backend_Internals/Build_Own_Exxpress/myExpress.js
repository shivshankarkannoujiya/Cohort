const http = require(`http`);
const createRoutes = require(`./routes`);
const response = require(`./response`);

function myExpress() {
    
    const routes = createRoutes();

    const server = http.createServer(function (req, res) {
        
        response(res);
        const handler = routes.matchRoutes(req);
        if (handler) {
            handler(req, res)
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Route not found");
        }
    })

    function listen(port, callback) {
        server.listen(port, callback);
    }

    return { listen: listen, get: routes.get };
}

module.exports = myExpress;

