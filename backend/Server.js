//simple express server
const express = require("express");
const app = express();
const mysql = require('mysql')
const cors = require('cors');

app.use(cors())

app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "survey_db"
});

app.post('/create', (req, res) => {
  const fullNames = req.body.fullNames;
  const email = req.body.email;
  const dob = req.body.dob;
  const ContactNumber = req.body.ContactNumber;

  db.query('INSERT INTO `survey` (`fullnames`, `email`, `Dob`, `contactNo`) VALUES(?,?,?,?)',
    [fullNames, email, dob, ContactNumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("port its running");
});

app.get('/', (req, res) => {
  return res.json('from the backside hello');
});

app.get('/users', (req, res) => {
  const sql = "SELECT * FROM survey";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})


