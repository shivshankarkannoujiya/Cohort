
function routes() {

    let routes_table = {};

    const matchRoutes = function (req) {
        return routes_table[req.url]
    }

    function get(path, handler) {
        routes_table[path] = handler;
    }

    return { get, matchRoutes }
}


module.exports = routes;