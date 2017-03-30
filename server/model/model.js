"use strict";
var ORM = require("Sequelize");
var initModel_1 = require('./initModel');
var dbUrl = "postgres://postgres:postgres@localhost:5432/complete-typescript-course";
var options = {
    //benchmark: true,
    //logging:console.log,
    dialect: "sqlite",
    storage: "server/data/posts.sqlite"
};
//const sequelize: Sequelize = new ORM(dbUrl, options);
var sequelize = new ORM('', '', '', options);
exports.UserModel = initModel_1.initUserModel(sequelize);
exports.PostModel = initModel_1.initPostModel(sequelize);
//UserModel.hasMany(PostModel, {foreignKey: "userId"});
//PostModel.belongsTo(UserModel, {foreignKey: "userId"}); 
//# sourceMappingURL=model.js.map