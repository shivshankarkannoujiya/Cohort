function response(res) { 


    res.statusCode = 200
    res.status = function (statusCode) {
        res.statusCode = statusCode
        return res
    }

    res.send = function (data) {
        const contentType =
            typeof data === `object` ? `application/json` : `text/plain`;
        const content = typeof data === `object` ? JSON.stringify(data) : data;

        res.setHeader(`Content-Type`, contentType);
        res.setHeader(`Content-Length`, Buffer.byteLength(content));
        res.end(content);
        return res; // Allowing method chaining
    }

    res.json = function (data) {
        const jsonData = JSON.stringify(data);
        res.setHeader(`Content-Type`, `application/json`);
        res.setHeader(`Content-Length`, Buffer.byteLength(jsonData));
        res.end(jsonData);
        return res;
    }

    return res;
}


module.exports = response;