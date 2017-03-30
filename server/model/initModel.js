"use strict";
var ORM = require("Sequelize");
function initUserModel(sequelize) {
    return sequelize.define("users", {
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