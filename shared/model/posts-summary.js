"use strict";
function createPostSummary(_a) {
    var id = _a.id, userId = _a.userId, description = _a.description;
    return { id: id, description: description };
}
exports.createPostSummary = createPostSummary;
function createPostsSummaries(data) {
    return data.map(createPostSummary);
}
exports.createPostsSummaries = createPostsSummaries;
//# sourceMappingURL=posts-summary.js.map