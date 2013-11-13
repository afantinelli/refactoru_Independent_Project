
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

app.get('/emergency', function(req, res){
  res.render('emergency.jade', { title: 'emergency' });
});

app.get('/transportation', function(req, res){
  res.render('transportation.jade', { title: 'transportation' });
});

app.get('/band', function(req, res){
  res.render('band.jade', { title: 'band' });
});

app.get('/pets', function(req, res){
  res.render('pets.jade', { title: 'pets' });
});

app.get('/vegas', function(req, res){
  res.render('vegas.jade', { title: 'vegas' });
});

app.get('/parkingvegas', function(req, res){
  res.render('parkingvegas.jade', { title: 'parkingvegas' });
});

app.get('/seatingvegas', function(req, res){
  res.render('seatingvegas.jade', { title: 'seatingvegas' });
});

app.get('/drivingvegas', function(req, res){
  res.render('drivingvegas.jade', { title: 'drivingvegas' });
});

app.get('/gasvegas', function(req, res){
  res.render('gasvegas.jade', { title: 'gasvegas' });
});

app.get('/weathervegas', function(req, res){
  res.render('weathervegas.jade', { title: 'weathervegas' });
});

app.get('/vetvegas', function(req, res){
  res.render('vetvegas.jade', { title: 'vetvegas' });
});

app.get('/petstorevegas', function(req, res){
  res.render('petstorevegas.jade', { title: 'petstorevegas' });
});

app.get('/petboardingvegas', function(req, res){
  res.render('petboardingvegas.jade', { title: 'petboardingvegas' });
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
