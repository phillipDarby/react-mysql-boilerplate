const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const keys = require('./config');
const PORT = process.env.PORT || 5000;

const app = express();

//STATIC FOLDER
app.use(express.static(path.join(__dirname, '../client/build')));

// Body Parser Middleware
app.use(bodyParser.json());

//CREATE CONNECTION
const db = mysql.createConnection({
  host: keys.DB_HOST,
  user: keys.DB_USER,
  password: keys.DB_PASSWORD,
  database: keys.DB_DATABASE
});

//CONNECT
db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/api/test', (req, res) => {
  db.query('SELECT * FROM `test`', function(error, results, fields) {
    // error will be an Error if one occurred during the query
    res.json({ data: results });
    // fields will contain information about the returned results fields (if any)
  });
});
