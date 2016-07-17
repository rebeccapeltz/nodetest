#### Streams  
Abstract Interface  
What is the metaphor?  
Look for pipes to carry stream data


#### Streams are Event emitters  
See node: https://github.com/nodejs/node/blob/master/lib/stream.js  

``` JavaScript
function Stream() {
  EE.call(this);
}
```  
#### Objects in Streams
string
Buffer

####  4 types of Streams
* Readable  fs.createReadStream()
* Writeable fs.createWriteStream()
* Duplex net.Socket
* Transform  zlib.createDeflate())

`const stream = require('stream');`  
Only need to require if implementing a new Stream based on one of the types  


https://nodejs.org/api/stream.html


#### 'Classic' Streams look at the 'data' and 'done' events  
Using streams: `const fs = require('fs');`
How do stream read/write differ from file read/write?  
Streams 'chunk' the data?
Create an http server that reads in a local file and sends it to the Client  
bad file name: look for ENOENT

#### Using a pipe  
Pipe:  (readable).pipe(writable)    (src).pipe(dst)  
Request and Response are Streams so we can pipe from and to them
Good idea to use pipe on 'open' and check for 'error'  - log to server console with error  

#### Stretch example of streaming a video  
You want to use a stream because you don't have to fill your memory with an entire file before doing somethign with it.
