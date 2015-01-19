var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  var dataStream = [];

  res.on('error', function(err) {
    console.error('There was a problem processing your request: ' + err);
  });

  res.on('data', function(data) {
     dataStream.push(data.toString());
  });

  res.on('end', function() {
    dataStream = dataStream.join('');
    console.log(dataStream.length);
    console.log(dataStream);
  });

  return dataStream;
});
