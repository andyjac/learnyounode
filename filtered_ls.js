var fs = require('fs')
    , path = require('path')
    , dir = process.argv[2]
    , filterStr = process.argv[3];

fs.readdir(dir, function(err, list) {
  if (err) {
    console.log('There was a problem processing the data: ' + err);
  }

  list.forEach(function(file) {
    if (!filterStr) console.log(file);

    if (path.extname(file) === '.' + filterStr) {
      console.log(file);
    }
  });
  return list;

});
