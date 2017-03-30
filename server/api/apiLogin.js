"use strict";
var _ = require("lodash");
var model_1 = require('../model/model');
var com_1 = require('./com');
/**
 * Created by Vlad on 3/29/2017.
 */
function apiLogin(req, res) {
    var email = 'uplight.ca@gmail.com', password = '$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem';
    model_1.UserModel.findOne({
        where: {
            email: email,
            password: password
        }
    })
        .then(function (item) {
        return { id: item.id, at: item.createdAt };
    }).then(function (res) {
        console.log(res);
        return res;
    })
        .then(_.partial(com_1.onSuccess, res))
        .catch(_.partial(com_1.onError, res, "Login Failed"));
}
exports.apiLogin = apiLogin;
//# sourceMappingURL=apiLogin.js.map