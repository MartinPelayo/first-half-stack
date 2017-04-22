function notFound(req, res) {
  res.setHeader('Content-Type', 'test/html');
  res.statusCode = 404;
  res.statusMessage = `Aint gonna ${req.method} at ${req.url}`;
  res.end(res.statusMessage);

} 

module.exports = notFound;
