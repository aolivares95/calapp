import express from "express";
// import mysql from "mysql2";
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
// MySQL Connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "calevent_db",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err);
//     return;
//   }
//   console.log("Connected to MySQL database");
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the calendar app" });
// });

// app.get("/calevents", (req, res) => {
//   connection.query("SELECT * FROM calevent", (err, results) => {
//     if (err) {
//       console.error("Error executing query:", err);
//       res.status(500).json({ error: "Error fetching users" });
//       return;
//     }
//     res.send(results);
//   });
// });
db.sequelize.sync();

// app.post("/addCalevent", (req, res) => {
//   const { title, uuid, start, end, allday } = req.body;
//   // finish logic using this https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/
//   //   let calRepository = getConnection("default").getRepository(Calevent);

//   //   calRepository.save({
//   //     title: title,
//   //     start: start,
//   //     uuid: uuid,
//   //     end: end,
//   //     allday: allday
//   //   });
// });

app(app2);
app2.listen(5000, () => {
  console.log("Server listening on port 5000");
});
