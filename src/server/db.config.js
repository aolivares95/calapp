export const dbConfig = {
  HOST: "mysql",
  USER: "root",
  PASSWORD: "Weiser32",
  DB: "calevent_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
