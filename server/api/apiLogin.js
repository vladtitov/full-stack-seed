"use strict";
var _ = require("lodash");
var uuidV4 = require('uuid/v4');
var model_1 = require('../model/model');
var com_1 = require('./com');
var JWT = require("jsonwebtoken");
var EXPIRATION_TIME = 180;
/**
 * Created by Vlad on 3/29/2017.
 */
function apiLogin(req, respond) {
    // let  email:string = 'uplight.ca@gmail.com' , password:string = '$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem';
    console.log(req.body);
    var params = _.pick(req.body, 'username', 'password', 'deviceId');
    if (!params.username || !params.password || !params.deviceId) {
        respond.status(400).send({ error: 'username, password, and deviceId  are required parameters' });
        return;
    }
    var user = model_1.UserModel.findOne({ where: { email: params.username } })
        .then(function (userR) {
        if (_.isNull(userR)) {
            respond.status(404).send({ error: 'User does not exist' });
            return;
        }
        // console.log(userR);
        if (_.isMatch(userR, { password: params.password }))
            return userR;
        respond.status(200).send(userR);
        return;
        // userR.comparePassword(params.password);
    })
        .then(function (item) {
        var userKey = uuidV4();
        var issuedAt = new Date().getTime();
        var expiresAt = issuedAt + (EXPIRATION_TIME * 1000);
        var token = JWT.sign({ email: item.email, did: params.deviceId, iat: issuedAt, eat: expiresAt }, 'my secrete 2');
        return { id: item.id, at: item.createdAt, token: token };
    }).then(function (res) {
        console.log(res);
        return res;
    })
        .then(_.partial(com_1.onSuccess, respond))
        .catch(_.partial(com_1.onError, respond, "Login Failed"));
}
exports.apiLogin = apiLogin;
function generateToken(user) {
    return { id: 'jjjjjj', userId: user.id, ttl: 34455, created: "00000" };
}
exports.generateToken = generateToken;
//# sourceMappingURL=apiLogin.js.map