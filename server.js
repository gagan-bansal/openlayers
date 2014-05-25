
var express = require('express');
var tileserver = require('./examples/tileserver.js');
var app = express();
app.get('/tileserver/:z/:x/:y', function(req,res) {
  res.json(tileserver.getTileFeatures(req.params.z,req.params.x,req.params.y));
});
app.use(express.static(__dirname +'/'));
app.listen(3001);
console.log("server listening at: 300l");
