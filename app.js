var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//displays summary
app.get('/articles', function(req, res){
  res.send('Summary');
});

app.listen(3000)