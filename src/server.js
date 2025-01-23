const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "yourDatabaseName",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.status(200).send({ message: "Login successful", user: results[0] });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
