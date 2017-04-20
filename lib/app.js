const parsePath = require('./lib/parsePath');
const notFound = require('./lib/notFound');
const puppies = require('./lib/puppies');

const routes = {
  'puppies': puppies,
  '404': notFound
}


function app(req, res) {
  const
}











const url = require('url');

function parsePath(req, res) {
  const parsed = url.
  console.log('yo');
  res.end('BYE!');
}

module.exports = app;