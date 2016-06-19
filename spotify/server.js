//Client ID
//cac8ea9aeae94a16b2a9766d4f847a5f
//Client Secret
//8903e59de2144f1abf7a259d477eb054
'use strict';
const express = require('express');
const app = express();
//spotify:user:jimgartner7:playlist:7iOTEpBRdcW9w9bhor8vef


app.use((req, res)=> {
  res.status(404).json({message: 'not found'});
});
app.listen(3000, () => console.log('server is up on 3000'));
