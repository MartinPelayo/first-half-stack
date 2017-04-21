const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/doggos';

const connect = {
  db: null
};

mongo.connect(url)
.then(db => {
  connect.db = db;
});

module.exports = connect;
