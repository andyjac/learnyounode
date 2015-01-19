var args = process.argv
    , result = 0;

for (var i  = 2; i < args.length; i ++) {
  result += Number(args[i]);
}

console.log(result);
return result;
