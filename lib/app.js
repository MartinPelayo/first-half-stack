const parsePath = require('./parsePath');
const notFound = require('./notFound');
const doggos = require('./doggos');

const routes = {
  'doggos': doggos,
  '404': notFound
}


function app(req, res) {
  const url = parsePath(req.url) || notFound;
  req.query = url.query;
  req.params = url.params;

  res.setHeader('Content-Type', 'application/JSON');
  const route = route[url.route];
  route(req, res);
}

module.exports = app;











const url = require('url');

function parsePath(req, res) {
  const parsed = url.
  console.log('yo');
  res.end('BYE!');
}

module.exports = app;