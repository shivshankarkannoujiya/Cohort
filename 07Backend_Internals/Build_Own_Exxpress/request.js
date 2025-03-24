const { URL } = require(`url`);

function getParams(req) {
    const protocol = req.connection.encrypted ? `https` : `http`;
    const parsedUrl = new URL(req.url, `${protocol}://${req.headers.host}`);
    return Object.fromEntries(parsedUrl.searchParams);
}

module.exports = getParams;