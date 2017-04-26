const app = require('./lib/app');
const http = require('http');
const DB_URI = 'mongodb://localhost:27017/doggos';

// const connection = require('./lib/connect');
// connection.connect(DB_URI);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Listening on', server.address());
  
});
