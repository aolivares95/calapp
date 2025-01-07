import * as express from "express";
import * as mysql from "msql2";
import * as cors from "cors";
import * as bodyParser from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  name: "default",
  host: "localhost",
  user: "root",
  password: "password",
  database: "calevent_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/calevents", (req, res) => {
  connection.query("SELECT * FROM calevent", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Error fetching users" });
      return;
    }
    res.send(results);
  });
});

app.post("/addCalevent", (req, res) => {
  const { title, uuid, start, end, allday } = req.body;
  // finish logic using this https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/
  //   let calRepository = getConnection("default").getRepository(Calevent);

  //   calRepository.save({
  //     title: title,
  //     start: start,
  //     uuid: uuid,
  //     end: end,
  //     allday: allday
  //   });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
