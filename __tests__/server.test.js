const request = require('supertest');
const app = require('../server/server');

describe('API', () => {
  test('Should get a response the GET method', () => request(app)
    .get('/rooms/1')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    }));
});
