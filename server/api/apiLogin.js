"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var uuidV4 = require('uuid/v4');
var model_1 = require("../model/model");
var com_1 = require("./com");
var JWT = require("jsonwebtoken");
var crypto = require("crypto");
var EXPIRATION_TIME = 180;
var MY_SECRET = 'my secrete 2';
/**
 * Created by Vlad on 3/29/2017.
 */
function apiLogin(req, respond) {
    // let  email:string = 'uplight.ca@gmail.com' , password:string = '$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem';
    // console.log(req.body)
    var params = _.pick(req.body, 'username', 'password', 'deviceId');
    if (!params.username || !params.password || !params.deviceId) {
        respond.status(400).send({ error: 'username, password, and deviceId  are required parameters' });
        return;
    }
    var password = crypto.createHash('md5').update(params.password).digest("hex");
    // console.log(password);
    var user = model_1.UserModel.findOne({ where: { email: params.username } })
        .then(_.partial(checkUser, password, respond))
        .then(_.partial(generateToken, respond))
        .then(_.partial(com_1.onSuccess, respond))
        .catch(_.partial(com_1.onError, respond, "Login Failed"));
}
exports.apiLogin = apiLogin;
function checkUser(password, respond, user) {
    if (_.isNull(user)) {
        respond.status(404).send({ error: 'User does not exist' });
        return null;
    }
    // console.log(user.password,password);
    if (_.isMatch(user, { password: password }))
        return user;
    respond.status(403).send({ err: 'password not match' });
    return null;
}
exports.checkUser = checkUser;
function generateToken(respond, user) {
    if (!user)
        return '';
    var token = {};
    token.userId = user.id;
    token.id = uuidV4();
    token.iat = Math.floor(new Date().getTime() / 1000);
    token.exp = token.iat + EXPIRATION_TIME;
    var t = JWT.sign(token, MY_SECRET);
    // respond.header('x-access-token', t);
    respond.cookie('token', t, { maxAge: 86400 });
    return t;
}
exports.generateToken = generateToken;
/*
export function readToken(token:string ):any{
  return JWT.verify(token, MY_SECRET,function (err, decoded) {
    console.log(err);
  });
}
*/
function verifyLogin(req, res, next) {
    var token = req.body.token || req.query.token || req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : ''; //req.headers['x-access-token'];
    // console.log('token '+ token);
    if (token) {
        JWT.verify(token, MY_SECRET, function (err, decoded) {
            console.log(new Date().toLocaleString());
            console.log(err, decoded);
            if (err) {
                res.json({ success: false, message: 'Failed to authenticate token.' });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}
exports.verifyLogin = verifyLogin;
//# sourceMappingURL=apiLogin.js.map