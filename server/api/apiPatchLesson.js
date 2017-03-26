"use strict";
var _ = require('lodash');
var updateLesson_1 = require("../queries/updateLesson");
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
function apiPatchLesson(req, res) {
    var lessonId = req.params.id;
    updateLesson_1.updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.databaseErrorHandler, res))
        .catch(_.partial(onError_1.onError, res, "Could not update lesson"));
}
exports.apiPatchLesson = apiPatchLesson;
//# sourceMappingURL=apiPatchLesson.js.map