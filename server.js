var express = require('express');
var app = express();
var server = require('http').Server(app);

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/build'));
app.set('views', __dirname + '/build');
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('build/index.html');
});

server.listen(3000, function () {
  console.log('Server is listening at port 3000');
});