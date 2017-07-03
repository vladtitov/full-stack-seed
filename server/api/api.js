"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiGetAllPosts_1 = require("./apiGetAllPosts");
var apiGetMenu_1 = require("./apiGetMenu");
function initRestApi(app) {
    app.route("/api/posts").get(apiGetAllPosts_1.apiGetAllPosts);
    app.route("/api/menu/:stamp").get(apiGetMenu_1.apiGetMenu);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map