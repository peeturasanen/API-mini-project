const notFoundMiddleware = (request, response) => {
    response.status(404).send({error: "Not found"});
};

module.exports = notFoundMiddleware;