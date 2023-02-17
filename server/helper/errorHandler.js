const errorHandler = (err, res, next) => {
    const StatusCode = res.statusCode ? res.statusCode : 500
    res.status(StatusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
};

module.exports = errorHandler;