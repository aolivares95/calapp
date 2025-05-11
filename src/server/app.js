import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "../models/index.js";
import { app } from "../calevent.routes.js";
import https from "https";
import fs from "fs";

let corsOptions = {
	origin: "https://192.168.1.236",
};
let app2 = express();
app2.use(cors(corsOptions));
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

const options = {
  key: fs.readFileSync('src/server/server.key'),
  cert: fs.readFileSync('src/server/server.crt')
};

app(app2)
https.createServer(options, app2).listen(5000, "0.0.0.0", () => {
  console.log("Server running on HTTPS at https://192.168.1.236:5000");
});

