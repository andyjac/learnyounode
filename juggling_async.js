var http = require('http')
    , bl = require('bl')
    , content = []
    , count = 0
    , numberOfUrls = process.argv.length - 2;

function printContent() {
  for (var i = 0; i < content.length; i++) {
    console.log(content[i]);
  }
}

function httpGet(index) {
  var url = process.argv[2 + index];

  http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
      if (err) return console.error(err);

      content[index] = data.toString();
      count++;

      if (count === numberOfUrls) printContent();
    }));
  });
}

for (var i = 0; i < numberOfUrls; i++) {
  httpGet(i);
}
