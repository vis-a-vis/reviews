const faker = require('faker');

const userData = [];
const reviewData = [];

for (let i = 1; i <= 100; i + 1) {
  userData.push(faker.fake('{ {{name.firstName}}, {{image.avatar}} }'));
  // change the image avatar part
}

for (let i = 1; i <= 100; i + 1) {
  reviewData.push(faker.fake('{ {{lorem.text}}, {{date.recent}} }'));
}

console.log(userData);
console.log(reviewData);

// module.export = {
//   usersGenerator,
//   reviewsGenerator,
// };
