const echoserver = require('../lib/http-file-server');

echoserver.listen(3000, ()=>{console.log('echo server on 3000');});
