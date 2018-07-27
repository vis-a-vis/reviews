const mysql = require('mysql');
const fs = require('fs');
const faker = require('faker');

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
  const query = [review.userName, review.img, review.addedAt, review.review];
  connection.query(
    'INSERT INTO reviews (userName, img, addedAt, review) VALUES (?,?,?,?)',
    query,
    (err, data) => {
      if (err) {
        console.log('Error adding reviews to the database', err);
        return;
      }
      console.log('Succesfully added to the database');
    },
  );
};

function csv(arr) {
  const keys = Object.keys(arr[0]);
  let result = `${keys.join('\t')}\n`;

  arr.forEach((obj) => {
    keys.forEach((k, ix) => {
      if (ix) result += '\t';
      result += obj[k];
    });
    result += '\n';
  });

  fs.writeFile('fakeData.js', result, (err) => {
    if (err) {
      console.log('Error writing data', err);
    } else {
      console.log('Saved!');
    }
  });
}

const generateFakeData = () => {
  const arr = [];
  for (let i = 0; i <= 10; i += 1) {
    const review = {
      userName: faker.name.findName(),
      img: faker.image.avatar(),
      addedAt: faker.date.recent(),
      review: faker.lorem.paragraph(),
    };
    arr.push(review);
    console.log(arr);
  }
  csv(arr);
};

generateFakeData();

module.exports = {
  connection,
  generateFakeData,
  csv,
};
