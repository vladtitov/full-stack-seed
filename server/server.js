"use strict";
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./api/apiErrorHandler");
var bodyParser = require("body-parser");
var apiLogin_1 = require('./api/apiLogin');
var com_1 = require("./api/com");
var app = express();
var cors = require('cors');
app.use(bodyParser.json());
app.use('/node_modules', express.static('./client/node_modules'));
app.use(cors({ credentials: true }));
app.use('/api', function (req, res, next) {
    // console.log(req.path);
    var method = req.method && req.method.toUpperCase && req.method.toUpperCase();
    if (req.path === '/login')
        apiLogin_1.apiLogin(req, res);
    else if (req.path === '/test')
        com_1.onSuccess(res, { message: "Test from server" });
    else
        apiLogin_1.verifyLogin(req, res, next);
});
app.use('/', express.static('./client/src'));
api_1.initRestApi(app);
app.use(apiErrorHandler_1.apiErrorHandler);
var port = 8090;
app.listen(port, function () {
    console.log("Server is now running on port " + port);
});
//# sourceMappingURL=server.js.map