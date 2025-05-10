<<<<<<< HEAD
import { dbConfig } from "../server/db.config.js";
import { Sequelize } from "sequelize";
import calevent from "./Calevent.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 3306,
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
=======
import { dbConfig } from "../server/db.config.js";
import { Sequelize } from "sequelize";
import calevent from "./Calevent.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 3306,
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
>>>>>>> e1fbb6a (changes to add .env)
