import * as express from "express";
import * as mysql from "msql2";
import * as cors from "cors";
import * as bodyParser from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
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

app.post("/addResume", (req, res) => {
  const { title, uuid, start, end, allday } = req.body;

  let resRepository = getConnection("default").getRepository(Resume);

  resRepository.save({
    name: name,
    phoneNumber: phoneNumber,
    uuid: uuid,
  });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
