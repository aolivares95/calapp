import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "../models/index.js";
import { app } from "../calevent.routes.js";
let corsOptions = {
  origin: "http://localhost:8081",
};
let app2 = express();
app2.use(cors(corsOptions));
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

app(app2);
app2.listen(5000, () => {
  console.log("Server listening on port 5000");
});
