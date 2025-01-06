import "reflect-metadata";
import { EntitySchema } from "typeorm";

module.exports = new EntitySchema({
  name: "Calevent",
  target: Category,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    uuid: {
      type: "varchar",
    },
    title: {
      type: "varchar",
    },
    start: {
      type: "varchar",
    },
    end: {
      type: "varchar",
    },
    allday: {
      type: "bool",
    },
  },
});
