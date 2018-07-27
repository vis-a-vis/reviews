const mysql = require('mysql');
const faker = require('faker');
// const dataGenerator = require('./../dataGenerator');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reviews_list',
});

connection.connect((err) => {
  if (err) {
    console.log('problem connecting to mysql', err);
    return;
  }
  console.log('connected to mysql, locked and loaded!');
});

const seedData = (review) => {
  for (let i = 1; i <= 100; i += 1) {
    review = {
      userName: faker.name.findName(),
      img: faker.image.avatar(),
      addedAt: faker.date.recent(),
      review: faker.lorem.paragraph(),
    };
    const query = [review.userName, review.img, review.addedAt, review.review];
    connection.query(
      'INSERT INTO reviews (userName, img, addedAt, review) VALUES (?,?,?,?)',
      query,
      (err, data) => {
        if (err) {
          console.log('Error adding reviews to the database', err);
          return;
        }
        console.log('Succesfully added to the database', data);
      },
    );
  }
};
seedData();

module.exports = {
  connection,
  seedData,
};
