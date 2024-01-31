const errorHandler = (error, request, response, next) => {
    console.error(error.message);
    response.status(500).send("Internal server error")
};

module.exports = errorHandler;