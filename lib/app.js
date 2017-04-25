const express = require('express');
const app = express();
const morgan = require('morgan');
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const connection = require('./connect');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('What up world!');
});

app.get('/dogs/:id', (req, res) => {
  const _id = new ObjectId(req.params.id);
  connection.db.collection('dogs')
    .findOne({_id})
    .then(dog => {
      if(!dog) {
        res.status(404).send({error: 'RESOURCE NOT FOUND!'});
      } else {
        res.send(dog);
      }
    });
});

app.get('/dogs', (req, res) => {
  connection.db.collection('dogs')
    .find()
    .toArray()
    .then(dog => {
      if(!dog) {
        res.status(404).send({error: 'RESOURCE NOT FOUND!'});
      } else {
        res.send(dog);
      }
    });
});

app.post('/dogs', (req, res) => {
  connection.db.collection('dogs')
    .insert(req.body)
    .then(response => {
      return response.ops[0];
    })
    .then (savedDoggo => res.send(savedDoggo))
    .catch(err => console.log(err));
});

module.exports = app;