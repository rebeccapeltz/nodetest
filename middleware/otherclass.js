const express = require('express');
const fs = require('fs');
const app = express();

var routerOne = express.Router();
var fileRouter = express.Router();

routerOne.use((req, res, next) => {
  var incJson = '';
  req.on('data', (data) => {
    incJson += data.toString();
  });
  req.on('end', () => {
    incJson = incJson || '{}';
    try {
      var parsed = JSON.parse(incJson);
      req.body = parsed;
    } catch(e) {
      console.log(e);
      e.message = 'invalid json';
      e.statusCode = 422;
      return next(e);
    }
    next();
  });
});

routerOne.get('/nojson', (req, res) => {
  res.send({msg: 'no json'});
});

routerOne.post('/validatejson', (req, res) => {
  res.json({msg: 'valid json!'});
});

fileRouter.get('/files/:filename', (req, res, next) => {
  var filePath = __dirname + '/public/' + req.params.filename;
  fs.stat(filePath, (err, stats) => {
    if (err) {
      err.statusCode = 500;
      return next(err);
    }

    fs.createReadStream(filePath).pipe(res);
  });
});

fileRouter.post('/files/:filename', (req, res, next) => {
  req.pipe(fs.createWriteStream(__dirname + '/public/' + req.params.filename));
  next();
}, (req, res) => {
  res.json({msg: 'successfully stored'});
});

app.use('/api', fileRouter);
app.use('/api', routerOne);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({msg: err.message});
});


app.use((req, res) => {
  res.status(404).json({msg: 'page not found'});
});
app.listen(3000, () => console.log('server up'));
