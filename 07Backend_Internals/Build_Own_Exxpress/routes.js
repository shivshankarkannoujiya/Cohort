const { URL } = require(`url`);


function routes() {

    let routes_table = {};

    const matchRoutes = function (req) {
        const protocol = req.connection.encrypted ? `https` : `http`;
        const parsedUrl = new URL(req.url, `${protocol}://${req.headers.host}`);
        return routes_table[parsedUrl.pathname];
    }

    function get(path, handler) {
        routes_table[path] = handler;
    }

    function post(path, handler) {
        routes_table[path] = handler;
    }

    return { get, post, matchRoutes }
}


module.exports = routes;