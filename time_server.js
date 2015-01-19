var net = require('net')
    , port = process.argv[2];

function zeroPad(i) {
  return (i < 10 ? '0' : '') + i;
}

function now() {
  var date = new Date();

  return date.getFullYear() + '-'
    + zeroPad(date.getMonth() + 1) + '-'
    + zeroPad(date.getDate()) + ' '
    + zeroPad(date.getHours()) + ':'
    + zeroPad(date.getMinutes());
}

var server = net.createServer(function(socket) {
  socket.end(now() + '\n');
});

server.listen(port);
