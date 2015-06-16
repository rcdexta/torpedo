var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var debug = require('debug')('torpedo');
var util = require('util');
var Config = require('./config.js'),
    conf = new Config();

server.listen(8080);
debug("initialized: %s", conf.url);

app.use(bodyParser.json());

app.post('/notify', function (req, res) {
  debug('req body: %s', util.inspect(req.body));
  var event = req.body.event || 'NEW_NOTIF';
  if(req.body.namespace) {
      var namespace = '/' + req.body.namespace;
      io.of(namespace).emit(event, req.body.payload);
  }
  res.json({status: 'success'});
});
