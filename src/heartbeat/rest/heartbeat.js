'use strict';

module.exports = function (req, res, next) {

    res.setHeader('Location', 'http://localhost:3000/api/heartbeat/');
    res.send(200, '{status:"OK"}');

    return next();
};
