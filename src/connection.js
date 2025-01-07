import { DataSource } from "typeorm";
export const datasource = new DataSource({
  name: "first connection",
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "calevent_db",
});

datasource.initialize();
