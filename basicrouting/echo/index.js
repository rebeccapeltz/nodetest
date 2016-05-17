const echoserver = require('../lib/echo-server');
//curl -d 'xxxx'  localhost:3000/echo
echoserver.listen(3000, ()=>{console.log('echo server on 3000');});
