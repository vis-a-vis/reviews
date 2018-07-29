const connection = require('./index');

const getReviews = (id, callback) => {
  connection.query('SELECT * FROM reviews where id = ?', [id], callback);
};

module.exports = {
  getReviews,
};
