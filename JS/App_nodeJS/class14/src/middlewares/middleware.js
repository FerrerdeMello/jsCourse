exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.otherMiddleware = (req, res, next) => {
    console.log('I am your other middleware');
    next();
};
