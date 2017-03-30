
import * as ORM from "Sequelize";
import {Sequelize} from "Sequelize";


export function initUserModel(sequelize: Sequelize): any {
    return sequelize.define("users", {
        email:  ORM.STRING,
        password: ORM.TEXT
    });
}

export function initPostModel(sequelize: Sequelize): any {
  return sequelize.define("post", {
     userId: ORM.INTEGER,
    description: ORM.TEXT
  });
}

