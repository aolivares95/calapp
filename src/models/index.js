import { dbConfig } from "../server/db.config.js";
import { Sequelize } from "sequelize";
import calevent from "./calevent.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

export const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.calevent = calevent(sequelize, Sequelize);

//module.exports = db;
