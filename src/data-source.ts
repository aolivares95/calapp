import "reflect-metadata";
import { DataSource } from "typeorm";
import { Calevent } from "./entity/Calevent";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
