"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var _ = require("lodash");
var deleteLesson_1 = require("../queries/deleteLesson");
function apiDeleteLesson(req, res) {
    var lessonId = req.params.id;
    deleteLesson_1.deleteLesson(lessonId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Could not delete lesson " + lessonId));
}
exports.apiDeleteLesson = apiDeleteLesson;
//# sourceMappingURL=apiDeleteLesson.js.map