var http = require('http')
    , url = process.argv[2];

http.get(url, function(res) {
  res.on('data', function(data) {
    data = data.toString();
    console.log(data);
  });
  return res;

});
