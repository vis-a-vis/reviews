const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const getReviews = require('../db/Review');

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('http://localhost:3002/rooms/:roomId/reviews', (req, res) => {
  getReviews(req.params.id, (err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
});
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.export = app;
