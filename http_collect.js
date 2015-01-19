var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  var dataStream = [];

  res.on('error', function(error) {
    console.error('Something went wrong: ' + error);
  });

  res.on('data', function(data) {
     data = data.toString();
     dataStream.push(data);
  });

  res.on('end', function() {
    dataStream = dataStream.join('');
    console.log(dataStream.length);
    console.log(dataStream);
  });
  return dataStream;

});
