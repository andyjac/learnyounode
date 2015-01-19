var fs = require('fs')
    , file = process.argv[2]
    , fileContentString = fs.readFileSync(file).toString()
    , numberOfLines = fileContentString.split('\n').length - 1;

console.log(numberOfLines);
return numberOfLines;

