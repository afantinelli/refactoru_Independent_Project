
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

mongoose.connect('mongodb://localhost/phish');


//app.get('/', routes.index);
//app.get('/users', user.list);

app.get('/', function(req, res){
  res.render('index.jade', { title: 'Phish 2013 Fall Tour Travel' });
});

app.get('/layout', function(req, res){
  res.render('index.jade', { title: 'Phish 2013 Fall Tour Travel' });
});

app.get('/vegas', function(req, res){
  res.render('vegas.jade', { title: 'vegas' });
});

app.get('/utah', function(req, res){
  res.render('utah.jade', { title: 'utah' });
});

app.get('/denver1', function(req, res){
  res.render('denver1.jade', { title: 'denver1' });
});

app.get('/denver2', function(req, res){
  res.render('denver2.jade', { title: 'denver2' });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
