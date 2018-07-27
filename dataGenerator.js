const fs = require('fs');
const faker = require('faker');
const connection = require('./db/index');

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
  for (let i = 1; i <= 10; i += 1) {
    const review = {
      userName: faker.name.findName(),
      img: faker.image.avatar(),
      addedAt: faker.date.recent(),
      review: faker.lorem.paragraph(),
    };
    arr.push(review);
  }
  csv(arr);
};

generateFakeData();

// connection.end();
module.export = {
  generateFakeData,
  csv,
};
