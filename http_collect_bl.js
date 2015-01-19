var http = require('http')
    , bl = require('bl')
    , url = process.argv[2];

http.get(url, function(res) {
  res.on('error', function(err) {
    console.error('There was a problem processing your request: ' + err);
  });

  res.pipe(bl(function(err, data) {
    if (err){
      console.error('There was a problem processing the data: ' + err);
    }

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
