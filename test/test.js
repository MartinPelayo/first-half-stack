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
});


describe('doggos REST API!', () => {
  const DB_URI = 'mongodb://localhost:27017/dogs';

  before(() => connection.connect(DB_URI));
  before(() => connection.db.dropDatabase());
  after(() => connection.close());

  function saveDog(dog) {
    return request
      .post('/dogs')
      .send(dog);
  }

  const dawg = {
    name: 'dawg',
    type: 'dog'
  };
  
  it('saves a doggo', () => {
    return saveDog(dawg)
    .then(res => res.body)
    .then(savedDawg => {
      assert.isOk(savedDawg._id);
      dawg._id = savedDawg._id;
      assert.deepEqual(savedDawg, dawg);
    });
  });

  it ('GETs doggo is if it exists', () => {
    return request
      .get(`/dogs/${dawg._id}`)
      .then(res => res.body)
      .then(dog => assert.deepEqual(dog, dawg));
  });

  it('We get 404 if there is no doggo', () => {
    return request
    .get('/dogs/doesnotexist')
    .then(
      () => {
        throw new Error('successful status code not expected');
      },
      res => {
        assert.equal(res.status, 404);
        assert.isOk(res.response.body.error);
      }
    );
  });

});




