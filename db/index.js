const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reviews',
});

connection.connect((err) => {
  if (err) {
    console.log('problem connecting to mysql', err);
    return;
  }
  console.log('connected to mysql, locked and loaded!');
});

const getReviews = (roomId, callback) => {
  connection.query('SELECT * FROM reviews where roomId = ?', [roomId], callback);
};

module.exports = {
  connection,
  getReviews,
};
