const http = require(`http`);
const createRoutes = require(`./routes`);
const response = require(`./response`);
const getParams = require(`./request`);
const parseJsonBody = require(`./parseJsonBody`);


function myExpress() {
    
    const routes = createRoutes();

    const server = http.createServer(function (req, res) {
        
        response(res);
        req.params = getParams(req);

        const handler = routes.matchRoutes(req);

        if (handler) {

            if (req.method === `POST` && req.headers[`content-type`] === `application/json`) {

                // Parse JSON before calling the route handler
                parseJsonBody(req, (err, body) => {
                    
                    if (err) {
                        return res.statusCode(400).json({
                            error: `Invalid JSON`
                        })
                    }
                    // Attach parsed body to request object
                    req.body = body
                    handler(req, res);
                })
            } else {
                handler(req, res);
            }
            
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

