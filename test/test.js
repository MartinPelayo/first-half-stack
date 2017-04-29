const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');
const connection = require('../lib/connect');

const request = chai.request(app);

describe('Get / ', () => {
  it('says... WHAT UP WORLD!', () => {
    return request
      .get('/')
      .then(res => res.text)
      .then(text => assert.equal(text, 'What up world!'));
  });


















  // function savedDoggo(dog) {
  //   return request.post('/dogs')
  //   .send(dog);
  // }

  const dawg = {
    name: 'dawg',
    type: 'dog'
  };

  // it('saves a doggo', () => {
  //   return savedDoggo(dawg)
  //   .then(res => res.body)
  //   .then(savedDawg => {
  //     assert.isOk(savedDawg._id);
  //     dawg._id = savedDawg._id;
  //     assert.deepEqual(savedDawg, dawg);
  //   });
  // });




it ('GETs doggo is if exists', () => {
  return request
    .get(`/dogs/${dawg._id}`)
    .then(res => res.body)
    .then(dog => assert.deepEqual(dog, dawg));
});





});
