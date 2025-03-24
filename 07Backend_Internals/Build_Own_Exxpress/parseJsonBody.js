function parseJsonBody(req, callback) {

    let body = ``;
    req.on(`data`, (chunk) => {
        body += chunk.toString();
    })

    req.on(`end`, () => {
        try {
            req.body = JSON.parse(body);
            callback(null, req.body);
        } catch (error) {
            callback(error);
        }
    })
}

module.exports = parseJsonBody;