"use strict";
// import {apiGetAllCourses} from "./apiGetAllCourses";
// import {apiGetCourseDetail} from "./apiGetCourseDetail";
// import {apiCreateLesson} from "./apiCreateLesson";
// import {apiPatchLesson} from "./apiPatchLesson";
// import {apiDeleteLesson} from "./apiDeleteLesson";
var apTest_1 = require("./apTest");
function initRestApi(app) {
    app.route("/api/test").get(apTest_1.apiTest);
    // app.route("/api/courses").get(apiGetAllCourses);
    //  app.route("/api/courses/:id").get(apiGetCourseDetail);
    //
    // app.route("/api/lesson").post(apiCreateLesson);
    // app.route("/api/lesson/:id").patch(apiPatchLesson);
    // app.route("lesson/:id").delete(apiDeleteLesson);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map