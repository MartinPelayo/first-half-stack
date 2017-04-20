const connect = require('./lib/connect');
const ObjectId = require('mongodb').ObjectId;

function puppies(req,res) {
  const poms = connect.db.collection('poms');

  if(req.params.id) {
    poms.fineOne({_id: ObjectId(req.params)})
    .then(pom => {
      if(!pom) {
        notFound(req, res);
      }
      const serialPom = JSON.stringify(pom);
      res.end(serialPom);
    })
    .catch(notFound(req, res));
  }
  poms.find()
    .toArray()
    .then(poms => {
      const serialPoms = JSON.stringify(poms);
      res.end(serialPoms);
    });

}