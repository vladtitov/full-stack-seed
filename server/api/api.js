"use strict";
// import {apiGetAllCourses} from "./apiGetAllCourses";
// import {apiGetCourseDetail} from "./apiGetCourseDetail";
// import {apiCreateLesson} from "./apiCreateLesson";
// import {apiPatchLesson} from "./apiPatchLesson";
// import {apiDeleteLesson} from "./apiDeleteLesson";
var apTest_1 = require("./apTest");
var apiGetAllPosts_1 = require('./apiGetAllPosts');
var apiLogin_1 = require('./apiLogin');
function initRestApi(app) {
    app.route("/api/test").get(apTest_1.apiTest);
    app.route("/api/posts").get(apiGetAllPosts_1.apiGetAllPosts);
    app.route("/api/login").post(apiLogin_1.apiLogin);
    //  app.route("/api/courses/:id").get(apiGetCourseDetail);
    //
    // app.route("/api/lesson").post(apiCreateLesson);
    // app.route("/api/lesson/:id").patch(apiPatchLesson);
    // app.route("lesson/:id").delete(apiDeleteLesson);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map