import * as calevent from "./controllers/calevent.controller.js";
import { Router } from "express";

export const app = (app) => {
  var router = new Router();

  // Create a new calevent
  router.post("/", calevent.create);

  // Retrieve all calevent
  router.get("/", calevent.findAll);

  // Retrieve all published calevent
  //   router.get("/published", calevent.findAllPublished);

  // Retrieve a single calevent with id
  router.get("/:id", calevent.findOne);

  // Update a calevent with id
  // router.put("/:id", calevent.update);

  // Delete a calevent with id
  router.delete("/:id", calevent.deleteOne);

  // Delete all calevent
  // router.delete("/", calevent.deleteAll);

  app.use("/api/calevent", router);
};
