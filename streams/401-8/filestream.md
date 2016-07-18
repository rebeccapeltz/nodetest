##### Piping Streams

##### Classic

look at 'data', 'end' events
good practive to look at 'error'


##### Pipe piper.js
``` JavaScript
'use strict';
//node piper /public/index.html /public/something.html
//piping in bash ps aux |grep becky| grep Finder
//we use the file system module to create streams
const fs = require('fs');

var piper = module.exports = exports = () => {

  var readFileName = process.argv.length > 2 ? process.argv[2] : __dirname +'/public/index.html';
  var writeFileName = process.argv.length > 3 ?  process.argv[3] : __dirname +'/public/copy.html';
  var reader = fs.createReadStream(readFileName);
  var writer = fs.createWriteStream(writeFileName);

  // pattern is the pipe from readable to writeable
  reader.pipe(writer);
  reader.pipe(process.stdout);
};

piper();
```
#### Error handling piperwitherrors.js
look at 'open' event

pipe readable to writeable

good practice to pipe on open event and check error event for errors
``` JavaScript
'use strict';
const fs = require('fs');
var piper = module.exports = exports = () => {
  var readFileName = process.argv.length > 2 ? process.argv[2] : '/public/index.html';
  var writeFileName = process.argv.length > 3 ? process.argv[3] : '/public/copy.html';
  var reader = fs.createReadStream(__dirname + readFileName);

  reader.on('open', () => {
    var writer = fs.createWriteStream(__dirname + writeFileName);
    reader.pipe(writer);
    reader.pipe(process.stdout);
  });
  reader.on('error', (err) => {
    console.log ('error', err);
  });

};
piper();
```

##### Compare pipe and write with large files  
space is the problem, not time

writetofile uses fs.readFile and fs.writeFile and runs out of buffer space
pipetofile uses fs.createReadStream and fs.createWriteStream and runs 3.5 GB in 31 seconds


##### Look at packaging up this functionality in a bash script

bashpipe
