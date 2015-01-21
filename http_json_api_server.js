var http = require('http');
var url = require('url');

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixTime(time) {
  return { unixtime: time.getTime() };
}

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true)
      , time = new Date(parsedUrl.query.iso)
      , result;

  if (parsedUrl.pathname === '/api/parsetime') {
    result = parseTime(time);
  }

  if (parsedUrl.pathname === '/api/unixtime') {
    result = unixTime(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
