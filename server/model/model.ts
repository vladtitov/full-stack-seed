
/*import * as ORM from "sequelize";
import {Sequelize, LoggingOptions} from "sequelize";
import {initPostModel, initUserModel} from './initModel';


//const dbUrl: string = "postgres://postgres:postgres@localhost:5432/complete-typescript-course";

const options: any = {
  benchmark: true,
  logging:console.log,
  dialect: "sqlite",
  storage: "server/data/posts.sqlite"
};


//const sequelize: Sequelize = new ORM(dbUrl, options);
const sequelize: Sequelize = new ORM('','','',options);

export const UserModel =  initUserModel(sequelize);

export const PostModel =  initPostModel(sequelize);


//UserModel.hasMany(PostModel, {foreignKey: "userId"});

//PostModel.belongsTo(UserModel, {foreignKey: "userId"});*/