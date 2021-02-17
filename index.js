var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hi there! I\'m being served again from ' + os.hostname())
  res.write('Doing changes in the file to test the webhook with codepipeline and time taken to redeploy to ec2 and load balancer')
  res.end()
}

http.createServer(handleRequest).listen(3000)
