"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("Sequelize");
function initUserModel(sequelize) {
    return sequelize.define("user", {
        email: ORM.STRING,
        password: ORM.TEXT
    });
}
exports.initUserModel = initUserModel;
function initPostModel(sequelize) {
    return sequelize.define("post", {
        userId: ORM.INTEGER,
        description: ORM.TEXT
    });
}
exports.initPostModel = initPostModel;
//# sourceMappingURL=initModel.js.map