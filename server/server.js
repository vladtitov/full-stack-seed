"use strict";
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./api/apiErrorHandler");
var bodyParser = require("body-parser");
var JWT = require("jsonwebtoken");
var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.log(req.path);
    if (req.path === '/api/login') {
        next();
        return;
    }
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        JWT.verify(token, 'my secrete 2', function (err, decoded) {
            console.log(err, decoded);
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});
api_1.initRestApi(app);
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(8090, function () {
    console.log("Server is now running on port 8090 ...");
});
//# sourceMappingURL=server.js.map