const mysql = require('mysql');
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

connection.query('INSERT INTO users')


connection.query(`CREATE TABLE IF NOT EXISTS reviews (
  id int NOT NULL AUTO_INCREMENT,
  addedAt DATETIME,
  review varchar(1000),
  user_id int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
  );`, (error) => {
  if (error) {
    console.log('There was an error creating the reviews table', error);
  }
});

const generateFakeData = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const stars = faker.random.number({
      min: 1,
      max: 5,
    });

    const review = {
      name: faker.name.findName(),
      img: faker.image.avatar(),
      addedAt: faker.date.month(),
      review: faker.lorem.paragraph(),
      rating: stars,
    };

    arr.push(review);
  }



// Should match up foreign key but hard coding item ids to match
// Add generated data to the database
for (let item = 1; item < 100; item += 1) {
  connection.query('INSERT INTO items (id, name) VALUES (item, ?)', [faker.lorem.words()]);
  generateReviews(item);
}
const reviewData = [];
const reviewsGenerator = () => {
  for (let i = 1; i <= 100; i + 1) {
    reviewData.push(faker.fake('{ {{lorem.text}}, {{date.recent}} }'));
    connection.query('INSERT INTO reviews VALUES ?', [reviewData], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
};

reviewsGenerator();
console.log(reviewData);

// const userInfo = {id: 1, name: }
// const generator = function(callback) {
//   connection.query('INSERT INTO users VALUES ?', [userInfo], function(err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       callback(null, data);
//     }
//   });
// };

generator();

module.exports = {
  connection,
};



// const userData = [];
// const usersGenerator = () => {
//   for (let i = 1; i <= 100; i + 1) {
//     userData.push(faker.fake('{ {{name.firstName}}, {{image.avatar}} }'));
//     connection.query('INSERT INTO users VALUES ?', [userData], (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// };
// usersGenerator();
// console.log(userData);

const generateReviews = (reviewsId) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(100));
  for (let i = 0; i < randomNumber; i += 1) {
    const name = fake.name.findName();
    const addedAt = faker.date.past();
    const review = faker.lorem.paragraphs();
    const userId = userId;
    const query = 'INSERT INTO reviews (id, name, addedAt, review, item_id) VALUES (null, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [ addedAt, review, userId], (err, results) => {
      if (err) {
        console.log('error adding values in table: ', err);
      } else {
        console.log('results are: ', results);
      }
    });
  }
};