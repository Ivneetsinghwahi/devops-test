var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Demo to interviewer  there! I\'m being served at  ' + os.hostname());
  res.end();
}

http.createServer(handleRequest).listen(3000)
