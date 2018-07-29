const connection = require('./index');

const getReviews = (callback) => {
  connection.query('SELECT * FROM reviews', callback);
};

module.exports = {
  getReviews,
};
