const fs = require('fs');
const faker = require('faker');

const reviews = (numOfReview) => {
  let csv = 'id, roomId, userName, img, date, review, overall, accuracy, communication, cleanliness, location, checkin, value';

  function randomDate(start, end) {
    const date = new Date(+start + Math.random() * (end - start));
    return date;
  }

  for (let i = 0; i < numOfReview; i += 1) {
    const roomId = Math.floor(Math.random() * 100) + 1;
    const userName = faker.name.firstName();
    const img = faker.image.avatar();
    const date = randomDate(new Date(2010, 0, 1), new Date());
    const review = faker.lorem.paragraph();
    const overall = Math.floor(Math.random() * 5) + 1;
    const accuracy = Math.floor(Math.random() * 5) + 1;
    const communication = Math.floor(Math.random() * 5) + 1;
    const cleanliness = Math.floor(Math.random() * 5) + 1;
    const location = Math.floor(Math.random() * 5) + 1;
    const checkin = Math.floor(Math.random() * 5) + 1;
    const value = Math.floor(Math.random() * 5) + 1;
    csv += `\n ${i
      + 1}, ${roomId}, ${userName}, ${img}, ${date}, '${review}', ${overall}, ${accuracy}, ${communication}, ${cleanliness}, ${location}, ${checkin}, ${value}`;
  }
  return csv;
};

fs.writeFile('reviews.csv', reviews(1500), (err) => {
  if (err) {
    console.log('Error writing data', err);
  } else {
    console.log('Saved!');
  }
});

module.export = {
  reviews,
};
