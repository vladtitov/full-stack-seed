"use strict";
var model_1 = require("../model/model");
function deleteLesson(id) {
    return model_1.LessonModel.destroy({
        where: { id: id }
    });
}
exports.deleteLesson = deleteLesson;
//# sourceMappingURL=deleteLesson.js.map