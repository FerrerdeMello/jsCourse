exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
};

exports.otherMiddleware = (req, res, next) => {
    console.log('I am your other middleware');
    next();
};
