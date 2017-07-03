"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function findAllPosts() {
    return model_1.PostModel.findAll({})
        .then(function (res) { return res.map(function (item) {
        return { id: item.id, description: item.description };
    }); });
}
exports.findAllPosts = findAllPosts;
//# sourceMappingURL=findAllPosts.js.map