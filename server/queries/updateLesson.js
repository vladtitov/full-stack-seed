"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var hri = require('human-readable-ids').hri;
function updateLesson(id, props) {
    return model_1.LessonModel.update(props, {
        where: { id: id }
    });
}
exports.updateLesson = updateLesson;
//# sourceMappingURL=updateLesson.js.map