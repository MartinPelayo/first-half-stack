const mongo = require('mongodb').MongoClient;

const connect = {
  //ask what on earth is happening from line 3 down
  db: null,

  connect(dbUri) {
    if (this.db) return Promise.reject('Already connect to db?');
    return mongo.connect(dbUri).then(db => this.db = db);
  },

  close() {
    if (!this.db) return Promise.resolve();
    return this.db.close().then(result => {
      this.db = null;
      return result;
    });
  }
};

module.exports = connect;
