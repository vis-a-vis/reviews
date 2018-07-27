const connection = require('./index');

const getReviews = (callback) => {
  connection.query('SELECT * FROM reviews', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getReviews,
};
