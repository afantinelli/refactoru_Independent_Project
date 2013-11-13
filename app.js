
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
//var mongoose = require('mongoose');

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

//mongoose.connect('mongodb://localhost/phish');

//app.get('/', routes.index);
//app.get('/users', user.list);

app.get('/', function(req, res){
  res.render('index.jade', { title: 'Phish 2013 Fall Tour Travel' });
});

app.get('/layout', function(req, res){
  res.render('index.jade', { title: 'Phish 2013 Fall Tour Travel' });
});

app.get('/emergencyvegas', function(req, res){
  res.render('emergencyvegas.jade', { title: 'emergencyvegas' });
});

app.get('/emergencyutah', function(req, res){
  res.render('emergencyutah.jade', { title: 'emergencyutah' });
});

app.get('/transportationvegas', function(req, res){
  res.render('transportationvegas.jade', { title: 'transportationvegas' });
});

app.get('/band', function(req, res){
  res.render('band.jade', { title: 'band' });
});

app.get('/petsvegas', function(req, res){
  res.render('petsvegas.jade', { title: 'petsvegas' });
});

app.get('/petsutah', function(req, res){
  res.render('petsutah.jade', { title: 'petsutah' });
});

app.get('/vegas', function(req, res){
  res.render('vegas.jade', { title: 'vegas' });
});

app.get('/parkingvegas', function(req, res){
  res.render('parkingvegas.jade', { title: 'parkingvegas' });
});

app.get('/parkingutah', function(req, res){
  res.render('parkingutah.jade', { title: 'parkingutah' });
});

app.get('/seatingvegas', function(req, res){
  res.render('seatingvegas.jade', { title: 'seatingvegas' });
});

app.get('/seatingutah', function(req, res){
  res.render('seatingutah.jade', { title: 'seatingutah' });
});

app.get('/drivingvegas', function(req, res){
  res.render('drivingvegas.jade', { title: 'drivingvegas' });
});

app.get('/drivingutah', function(req, res){
  res.render('drivingutah.jade', { title: 'drivingutah' });
});

app.get('/gasvegas', function(req, res){
  res.render('gasvegas.jade', { title: 'gasvegas' });
});

app.get('/gasutah', function(req, res){
  res.render('gasutah.jade', { title: 'gasutah' });
});

app.get('/weathervegas', function(req, res){
  res.render('weathervegas.jade', { title: 'weathervegas' });
});

app.get('/weatherutah', function(req, res){
  res.render('weatherutah.jade', { title: 'weatherutah' });
});

app.get('/vetvegas', function(req, res){
  res.render('vetvegas.jade', { title: 'vetvegas' });
});

app.get('/vetutah', function(req, res){
  res.render('vetutah.jade', { title: 'vetutah' });
});

app.get('/petstorevegas', function(req, res){
  res.render('petstorevegas.jade', { title: 'petstorevegas' });
});

app.get('/petstoreutah', function(req, res){
  res.render('petstoreutah.jade', { title: 'petstoreutah' });
});

app.get('/petboardingvegas', function(req, res){
  res.render('petboardingvegas.jade', { title: 'petboardingvegas' });
});

app.get('/petboardingutah', function(req, res){
  res.render('petboardingutah.jade', { title: 'petboardingutah' });
});

app.get('/groceriesvegas', function(req, res){
  res.render('groceriesvegas.jade', { title: 'groceriesvegas' });
});

app.get('/groceriesutah', function(req, res){
  res.render('groceriesutah.jade', { title: 'groceriesutah' });
});

app.get('/hotelsvegas', function(req, res){
  res.render('hotelsvegas.jade', { title: 'hotelsvegas' });
});

app.get('/hotelsutah', function(req, res){
  res.render('hotelsutah.jade', { title: 'hotelsutah' });
});

app.get('/campingvegas', function(req, res){
  res.render('campingvegas.jade', { title: 'campingvegas' });
});

app.get('/campingutah', function(req, res){
  res.render('campingutah.jade', { title: 'campingutah' });
});

app.get('/restaurantsvegas', function(req, res){
  res.render('restaurantsvegas.jade', { title: 'restaurantsvegas' });
});

app.get('/restaurantsutah', function(req, res){
  res.render('restaurantsutah.jade', { title: 'restaurantsutah' });
});

app.get('/barsvegas', function(req, res){
  res.render('barsvegas.jade', { title: 'barsvegas' });
});

app.get('/barsutah', function(req, res){
  res.render('barsutah.jade', { title: 'barsutah' });
});

app.get('/taxivegas', function(req, res){
  res.render('taxivegas.jade', { title: 'taxivegas' });
});

app.get('/taxiutah', function(req, res){
  res.render('taxiutah.jade', { title: 'taxiutah' });
});

app.get('/policevegas', function(req, res){
  res.render('policevegas.jade', { title: 'policevegas' });
});

app.get('/policeutah', function(req, res){
  res.render('policeutah.jade', { title: 'policeutah' });
});

app.get('/hospitalsvegas', function(req, res){
  res.render('hospitalsvegas.jade', { title: 'hospitalsvegas' });
});

app.get('/hospitalsutah', function(req, res){
  res.render('hospitalsutah.jade', { title: 'hospitalsutah' });
});

app.get('/firevegas', function(req, res){
  res.render('firevegas.jade', { title: 'firevegas' });
});

app.get('/fireutah', function(req, res){
  res.render('fireutah.jade', { title: 'fireutah' });
});

app.get('/towingvegas', function(req, res){
  res.render('towingvegas.jade', { title: 'towingvegas' });
});

app.get('/towingutah', function(req, res){
  res.render('towingutah.jade', { title: 'towingutah' });
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
