import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "../models/index.js";
import { app as registerCaleventRoutes } from "../calevent.routes.js";
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app2 = express();

app2.use(cors({ origin: "https://192.168.1.251" }));
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

const options = {
  key: fs.readFileSync("src/server/server.key"),
  cert: fs.readFileSync("src/server/server.crt")
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app2.get("/swagger/swagger-output.json", (req, res) => {
  res.sendFile(path.join(__dirname, "swagger", "swagger-output.json"));
});

// ✅ Register API routes
registerCaleventRoutes(app2);

// ✅ Start server
https.createServer(options, app2).listen(5000, "0.0.0.0", () => {
  console.log("Server running on HTTPS at https://192.168.1.251:5000");
});
