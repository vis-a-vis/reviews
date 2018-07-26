const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');
const db = require('../db/Review.js');

console.log(db);

const app = express();
const port = process.env.PORT || 3002;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  db.getReviews((err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
