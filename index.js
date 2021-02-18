var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hi there! I\'m being served again and again from ' + os.hostname());
  res.end();
}

http.createServer(handleRequest).listen(3000)
