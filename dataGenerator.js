const fs = require('fs');
const faker = require('faker');

const reviews = (numOfReview) => {
  let csv = 'id, roomId, userName, img, date, review, accuracy, communication, cleanliness, location, checkin, value';

  for (let i = 0; i < numOfReview; i++) {
    const roomId = Math.floor(Math.random() * 100) + 1;
    const userName = faker.name.firstName();
    const img = faker.image.avatar();
    const date = faker.date.recent();
    const review = faker.lorem.paragraph();
    const accuracy = Math.floor(Math.random() * 5) + 1;
    const communication = Math.floor(Math.random() * 5) + 1;
    const cleanliness = Math.floor(Math.random() * 5) + 1;
    const location = Math.floor(Math.random() * 5) + 1;
    const checkin = Math.floor(Math.random() * 5) + 1;
    const value = Math.floor(Math.random() * 5) + 1;
    const average = Math.round(
      (accuracy + communication + cleanliness + location + checkin + value) / 6,
    );
    csv += `\n ${i
      + 1}, ${roomId}, ${userName}, ${img}, ${date}, '${review}', ${accuracy}, ${communication}, ${cleanliness}, ${location}, ${checkin}, ${value}, ${average}`;
  }
  return csv;
};

fs.writeFile('reviews.csv', reviews(500), (err) => {
  if (err) {
    console.log('Error writing data', err);
  } else {
    console.log('Saved!');
  }
});

module.export = {
  reviews,
};
