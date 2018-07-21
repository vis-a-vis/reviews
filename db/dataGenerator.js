const faker = require('faker');

const userData = [];

for (let i = 1; i <= 100; i + 1) {
  userData.push(faker.fake(`{ {{name.firstName}}, {{date.recent}}, {{lorem.text}}, {{image.avatar}} }`));
  // change the image avatar part
}
console.log(userData);