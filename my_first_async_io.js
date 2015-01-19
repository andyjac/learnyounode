var fs = require('fs')
    , file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
  var numberOflines = data.split('\n').length - 1;

  if (err) {
    console.log('There was a problem processing the data: ' + err);
  } else {
    console.log(numberOflines);
  }
  return numberOflines;

});

