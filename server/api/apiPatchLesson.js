"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var updateLesson_1 = require("../queries/updateLesson");
var com_1 = require("./com");
var com_2 = require("./com");
var com_3 = require("./com");
function apiPatchLesson(req, res) {
    var lessonId = req.params.id;
    updateLesson_1.updateLesson(lessonId, req.body)
        .then(_.partial(com_1.onSuccess, res))
        .catch(_.partial(com_3.databaseErrorHandler, res))
        .catch(_.partial(com_2.onError, res, "Could not update lesson"));
}
exports.apiPatchLesson = apiPatchLesson;
//# sourceMappingURL=apiPatchLesson.js.map