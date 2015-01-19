var filter = require('./filter');
var dir = process.argv[2];
var filterStr = process.argv[3];

filter(dir, filterStr, function(err, content) {
  if (err)
    return console.log('There was an error with the operation: ' + err);

  else
    content.forEach(function(file) {
      console.log(file);
    });
});
