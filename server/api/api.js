"use strict";
var apiGetAllPosts_1 = require('./apiGetAllPosts');
function initRestApi(app) {
    app.route("/api/posts").get(apiGetAllPosts_1.apiGetAllPosts);
}
exports.initRestApi = initRestApi;
