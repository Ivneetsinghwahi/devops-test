var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hello hi  there! I\'m being served via round robin method test ' + os.hostname());
  res.end();
}

http.createServer(handleRequest).listen(3000)
