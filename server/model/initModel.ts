
import * as ORM from "Sequelize";
import {Sequelize} from "Sequelize";


export function initUserModel(sequelize: Sequelize) {
    return sequelize.define("user", {
        email:  ORM.STRING,
        password: ORM.TEXT
    });
}

export function initPostModel(sequelize: Sequelize) {
  return sequelize.define("post", {
     userId: ORM.INTEGER,
    description: ORM.TEXT
  });
}

