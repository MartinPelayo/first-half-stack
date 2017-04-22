const connect = require('./connect');
const notFound = require('./notFound');
const bodyParser = require('./bodyParser');
const ObjectId = require('mongodb').ObjectId;

function doggos(req,res) {
  const doggos = connect.db.collection('doggos');
  console.log(doggos);
  if(req.params.id) {
    doggos.fineOne({_id: ObjectId(req.params)})
    .then(pupp => {
      const serialpupp = JSON.stringify(pupp);
      res.end(serialpupp);
    })
    .catch(notFound(req, res));
  }
  doggos.find()
    .toArray()
    .then(doggos => {
      const serialdoggos = JSON.stringify(doggos);
      res.end(serialdoggos);
    });
}

module.exports = doggos;
