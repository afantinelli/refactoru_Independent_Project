
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
  res.render('index.jade', { title: 'Phish 2014 Summer Tour Travel' });
});

app.get('/layout', function(req, res){
  res.render('index.jade', { title: 'Phish 2014 Summer Tour Travel' });
});

app.get('/band', function(req, res){
  res.render('band.jade', { title: 'band' });
});

app.get('/neworleans', function(req, res){
  res.render('neworleans.jade', { title: 'neworleans' });
});

app.get('/mansfield', function(req, res){
  res.render('mansfield.jade', { title: 'mansfield' });
});

app.get('/spac1', function(req, res){
  res.render('spac1.jade', { title: 'spac1' });
});

app.get('/spac2', function(req, res){
  res.render('spac2.jade', { title: 'spac2' });
});

app.get('/spac3', function(req, res){
  res.render('spac3.jade', { title: 'spac3' });
});

app.get('/philly1', function(req, res){
  res.render('philly1.jade', { title: 'philly1' });
});

app.get('/philly2', function(req, res){
  res.render('philly2.jade', { title: 'philly2' });
});

app.get('/newyork1', function(req, res){
  res.render('newyork1.jade', { title: 'newyork1' });
});

app.get('/newyork2', function(req, res){
  res.render('newyork2.jade', { title: 'newyork2' });
});

app.get('/newyork3', function(req, res){
  res.render('newyork3.jade', { title: 'newyork3' });
});

app.get('/canandaigua', function(req, res){
  res.render('canandaigua.jade', { title: 'canandaigua' });
});

app.get('/detroit', function(req, res){
  res.render('detroit.jade', { title: 'detroit' });
});

app.get('/chicago1', function(req, res){
  res.render('chicago1.jade', { title: 'chicago1' });
});

app.get('/chicago2', function(req, res){
  res.render('chicago2.jade', { title: 'chicago2' });
});

app.get('/chicago3', function(req, res){
  res.render('chicago3.jade', { title: 'chicago3' });
});

app.get('/charlotte', function(req, res){
  res.render('charlotte.jade', { title: 'charlotte' });
});

app.get('/columbia1', function(req, res){
  res.render('columbia1.jade', { title: 'columbia1' });
});

app.get('/columbia2', function(req, res){
  res.render('columbia2.jade', { title: 'columbia2' });
});

app.get('/portsmouth1', function(req, res){
  res.render('portsmouth1.jade', { title: 'portsmouth1' });
});

app.get('/portsmouth2', function(req, res){
  res.render('portsmouth2.jade', { title: 'portsmouth2' });
});

app.get('/orangebeach', function(req, res){
  res.render('orangebeach.jade', { title: 'orangebeach' });
});

app.get('/pelham', function(req, res){
  res.render('pelham.jade', { title: 'pelham' });
});

app.get('/alpharetta', function(req, res){
  res.render('alpharetta.jade', { title: 'alpharetta' });
});

app.get('/denver1', function(req, res){
  res.render('denver1.jade', { title: 'denver1' });
});

app.get('/denver2', function(req, res){
  res.render('denver2.jade', { title: 'denver2' });
});

app.get('/denver3', function(req, res){
  res.render('denver3.jade', { title: 'denver3' });
});

app.get('/barsvegas', function(req, res){
  res.render('barsvegas.jade', { title: 'barsvegas' });
});

app.get('/barsutah', function(req, res){
  res.render('barsutah.jade', { title: 'barsutah' });
});

app.get('/barsdenver1', function(req, res){
  res.render('barsdenver1.jade', { title: 'barsdenver1' });
});

app.get('/barsdenver2', function(req, res){
  res.render('barsdenver2.jade', { title: 'barsdenver2' });
});

app.get('/barschampaign', function(req, res){
  res.render('barschampaign.jade', { title: 'barschampaign' });
});

app.get('/campingvegas', function(req, res){
  res.render('campingvegas.jade', { title: 'campingvegas' });
});

app.get('/campingutah', function(req, res){
  res.render('campingutah.jade', { title: 'campingutah' });
});

app.get('/campingdenver1', function(req, res){
  res.render('campingdenver1.jade', { title: 'campingdenver1' });
});

app.get('/campingdenver2', function(req, res){
  res.render('campingdenver2.jade', { title: 'campingdenver2' });
});

app.get('/campingchampaign', function(req, res){
  res.render('campingchampaign.jade', { title: 'campingchampaign' });
});

app.get('/campinghampton1', function(req, res){
  res.render('campinghampton1.jade', { title: 'campinghampton1' });
});

app.get('/campinghampton2', function(req, res){
  res.render('campinghampton2.jade', { title: 'campinghampton2' });
});

app.get('/drivingvegas', function(req, res){
  res.render('drivingvegas.jade', { title: 'drivingvegas' });
});

app.get('/drivingutah', function(req, res){
  res.render('drivingutah.jade', { title: 'drivingutah' });
});

app.get('/drivingdenver1', function(req, res){
  res.render('drivingdenver1.jade', { title: 'drivingdenver1' });
});

app.get('/drivingdenver2', function(req, res){
  res.render('drivingdenver2.jade', { title: 'drivingdenver2' });
});

app.get('/drivingchampaign', function(req, res){
  res.render('drivingchampaign.jade', { title: 'drivingchampaign' });
});

app.get('/drivinghampton1', function(req, res){
  res.render('drivinghampton1.jade', { title: 'drivinghampton1' });
});

app.get('/drivinghampton2', function(req, res){
  res.render('drivinghampton2.jade', { title: 'drivinghampton2' });
});

app.get('/emergencyvegas', function(req, res){
  res.render('emergencyvegas.jade', { title: 'emergencyvegas' });
});

app.get('/emergencyutah', function(req, res){
  res.render('emergencyutah.jade', { title: 'emergencyutah' });
});

app.get('/emergencydenver1', function(req, res){
  res.render('emergencydenver1.jade', { title: 'emergencydenver1' });
});

app.get('/emergencydenver2', function(req, res){
  res.render('emergencydenver2.jade', { title: 'emergencydenver2' });
});

app.get('/emergencychampaign', function(req, res){
  res.render('emergencychampaign.jade', { title: 'emergencychampaign' });
});

app.get('/firevegas', function(req, res){
  res.render('firevegas.jade', { title: 'firevegas' });
});

app.get('/fireutah', function(req, res){
  res.render('fireutah.jade', { title: 'fireutah' });
});

app.get('/firedenver1', function(req, res){
  res.render('firedenver1.jade', { title: 'firedenver1' });
});

app.get('/firedenver2', function(req, res){
  res.render('firedenver2.jade', { title: 'firedenver2' });
});

app.get('/firechampaign', function(req, res){
  res.render('firechampaign.jade', { title: 'firechampaign' });
});

app.get('/gasvegas', function(req, res){
  res.render('gasvegas.jade', { title: 'gasvegas' });
});

app.get('/gasutah', function(req, res){
  res.render('gasutah.jade', { title: 'gasutah' });
});

app.get('/gasdenver1', function(req, res){
  res.render('gasdenver1.jade', { title: 'gasdenver1' });
});

app.get('/gasdenver2', function(req, res){
  res.render('gasdenver2.jade', { title: 'gasdenver2' });
});

app.get('/gaschampaign', function(req, res){
  res.render('gaschampaign.jade', { title: 'gaschampaign' });
});

app.get('/gashampton1', function(req, res){
  res.render('gashampton1.jade', { title: 'gashampton1' });
});

app.get('/gashampton2', function(req, res){
  res.render('gashampton2.jade', { title: 'gashampton2' });
});

app.get('/groceriesvegas', function(req, res){
  res.render('groceriesvegas.jade', { title: 'groceriesvegas' });
});

app.get('/groceriesutah', function(req, res){
  res.render('groceriesutah.jade', { title: 'groceriesutah' });
});

app.get('/groceriesdenver1', function(req, res){
  res.render('groceriesdenver1.jade', { title: 'groceriesdenver1' });
});

app.get('/groceriesdenver2', function(req, res){
  res.render('groceriesdenver2.jade', { title: 'groceriesdenver2' });
});

app.get('/grocerieschampaign', function(req, res){
  res.render('grocerieschampaign.jade', { title: 'grocerieschampaign' });
});

app.get('/grocerieshampton1', function(req, res){
  res.render('grocerieshampton1.jade', { title: 'grocerieshampton1' });
});

app.get('/grocerieshampton2', function(req, res){
  res.render('grocerieshampton2.jade', { title: 'grocerieshampton2' });
});

app.get('/hospitalsvegas', function(req, res){
  res.render('hospitalsvegas.jade', { title: 'hospitalsvegas' });
});

app.get('/hospitalsutah', function(req, res){
  res.render('hospitalsutah.jade', { title: 'hospitalsutah' });
});

app.get('/hospitalsdenver1', function(req, res){
  res.render('hospitalsdenver1.jade', { title: 'hospitalsdenver1' });
});

app.get('/hospitalsdenver2', function(req, res){
  res.render('hospitalsdenver2.jade', { title: 'hospitalsdenver2' });
});

app.get('/hospitalschampaign', function(req, res){
  res.render('hospitalschampaign.jade', { title: 'hospitalschampaign' });
});

app.get('/hotelsvegas', function(req, res){
  res.render('hotelsvegas.jade', { title: 'hotelsvegas' });
});

app.get('/hotelsutah', function(req, res){
  res.render('hotelsutah.jade', { title: 'hotelsutah' });
});

app.get('/hotelsdenver1', function(req, res){
  res.render('hotelsdenver1.jade', { title: 'hotelsdenver1' });
});

app.get('/hotelsdenver2', function(req, res){
  res.render('hotelsdenver2.jade', { title: 'hotelsdenver2' });
});

app.get('/hotelschampaign', function(req, res){
  res.render('hotelschampaign.jade', { title: 'hotelschampaign' });
});

app.get('/hotelshampton1', function(req, res){
  res.render('hotelshampton1.jade', { title: 'hotelshampton1' });
});

app.get('/hotelshampton2', function(req, res){
  res.render('hotelshampton2.jade', { title: 'hotelshampton2' });
});

app.get('/parkingvegas', function(req, res){
  res.render('parkingvegas.jade', { title: 'parkingvegas' });
});

app.get('/parkingutah', function(req, res){
  res.render('parkingutah.jade', { title: 'parkingutah' });
});

app.get('/parkingdenver1', function(req, res){
  res.render('parkingdenver1.jade', { title: 'parkingdenver1' });
});

app.get('/parkingdenver2', function(req, res){
  res.render('parkingdenver2.jade', { title: 'parkingdenver2' });
});

app.get('/parkingchampaign', function(req, res){
  res.render('parkingchampaign.jade', { title: 'parkingchampaign' });
});

app.get('/parkinghampton1', function(req, res){
  res.render('parkinghampton1.jade', { title: 'parkinghampton1' });
});

app.get('/parkinghampton2', function(req, res){
  res.render('parkinghampton2.jade', { title: 'parkinghampton2' });
});

app.get('/petsvegas', function(req, res){
  res.render('petsvegas.jade', { title: 'petsvegas' });
});

app.get('/petsutah', function(req, res){
  res.render('petsutah.jade', { title: 'petsutah' });
});

app.get('/petsdenver1', function(req, res){
  res.render('petsdenver1.jade', { title: 'petsdenver1' });
});

app.get('/petsdenver2', function(req, res){
  res.render('petsdenver2.jade', { title: 'petsdenver2' });
});

app.get('/petschampaign', function(req, res){
  res.render('petschampaign.jade', { title: 'petschampaign' });
});

app.get('/petboardingvegas', function(req, res){
  res.render('petboardingvegas.jade', { title: 'petboardingvegas' });
});

app.get('/petboardingutah', function(req, res){
  res.render('petboardingutah.jade', { title: 'petboardingutah' });
});

app.get('/petboardingdenver1', function(req, res){
  res.render('petboardingdenver1.jade', { title: 'petboardingdenver1' });
});

app.get('/petboardingdenver2', function(req, res){
  res.render('petboardingdenver2.jade', { title: 'petboardingdenver2' });
});

app.get('/petboardingchampaign', function(req, res){
  res.render('petboardingchampaign.jade', { title: 'petboardingchampaign' });
});

app.get('/petstorevegas', function(req, res){
  res.render('petstorevegas.jade', { title: 'petstorevegas' });
});

app.get('/petstoreutah', function(req, res){
  res.render('petstoreutah.jade', { title: 'petstoreutah' });
});

app.get('/petstoredenver1', function(req, res){
  res.render('petstoredenver1.jade', { title: 'petstoredenver1' });
});

app.get('/petstoredenver2', function(req, res){
  res.render('petstoredenver2.jade', { title: 'petstoredenver2' });
});

app.get('/petstorechampaign', function(req, res){
  res.render('petstorechampaign.jade', { title: 'petstorechampaign' });
});

app.get('/policevegas', function(req, res){
  res.render('policevegas.jade', { title: 'policevegas' });
});

app.get('/policeutah', function(req, res){
  res.render('policeutah.jade', { title: 'policeutah' });
});

app.get('/policedenver1', function(req, res){
  res.render('policedenver1.jade', { title: 'policedenver1' });
});

app.get('/policedenver2', function(req, res){
  res.render('policedenver2.jade', { title: 'policedenver2' });
});

app.get('/policechampaign', function(req, res){
  res.render('policechampaign.jade', { title: 'policechampaign' });
});

app.get('/restaurantsvegas', function(req, res){
  res.render('restaurantsvegas.jade', { title: 'restaurantsvegas' });
});

app.get('/restaurantsutah', function(req, res){
  res.render('restaurantsutah.jade', { title: 'restaurantsutah' });
});

app.get('/restaurantsdenver1', function(req, res){
  res.render('restaurantsdenver1.jade', { title: 'restaurantsdenver1' });
});

app.get('/restaurantsdenver2', function(req, res){
  res.render('restaurantsdenver2.jade', { title: 'restaurantsdenver2' });
});

app.get('/restaurantschampaign', function(req, res){
  res.render('restaurantschampaign.jade', { title: 'restaurantschampaign' });
});

app.get('/restaurantshampton1', function(req, res){
  res.render('restaurantshampton1.jade', { title: 'restaurantshampton1' });
});

app.get('/restaurantshampton2', function(req, res){
  res.render('restaurantshampton2.jade', { title: 'restaurantshampton2' });
});

app.get('/seatingvegas', function(req, res){
  res.render('seatingvegas.jade', { title: 'seatingvegas' });
});

app.get('/seatingutah', function(req, res){
  res.render('seatingutah.jade', { title: 'seatingutah' });
});

app.get('/seatingdenver1', function(req, res){
  res.render('seatingdenver1.jade', { title: 'seatingdenver1' });
});

app.get('/seatingdenver2', function(req, res){
  res.render('seatingdenver2.jade', { title: 'seatingdenver2' });
});

app.get('/seatingchampaign', function(req, res){
  res.render('seatingchampaign.jade', { title: 'seatingchampaign' });
});

app.get('/seatinghampton1', function(req, res){
  res.render('seatinghampton1.jade', { title: 'seatinghampton1' });
});

app.get('/seatinghampton2', function(req, res){
  res.render('seatinghampton2.jade', { title: 'seatinghampton2' });
});

app.get('/taxivegas', function(req, res){
  res.render('taxivegas.jade', { title: 'taxivegas' });
});

app.get('/taxiutah', function(req, res){
  res.render('taxiutah.jade', { title: 'taxiutah' });
});

app.get('/taxidenver1', function(req, res){
  res.render('taxidenver1.jade', { title: 'taxidenver1' });
});

app.get('/taxidenver2', function(req, res){
  res.render('taxidenver2.jade', { title: 'taxidenver2' });
});

app.get('/taxichampaign', function(req, res){
  res.render('taxichampaign.jade', { title: 'taxichampaign' });
});

app.get('/towingvegas', function(req, res){
  res.render('towingvegas.jade', { title: 'towingvegas' });
});

app.get('/towingutah', function(req, res){
  res.render('towingutah.jade', { title: 'towingutah' });
});

app.get('/towingdenver1', function(req, res){
  res.render('towingdenver1.jade', { title: 'towingdenver1' });
});

app.get('/towingdenver2', function(req, res){
  res.render('towingdenver2.jade', { title: 'towingdenver2' });
});

app.get('/towingchampaign', function(req, res){
  res.render('towingchampaign.jade', { title: 'towingchampaign' });
});

//app.get('/transportationvegas', function(req, res){
  //res.render('transportationvegas.jade', { title: 'transportationvegas' });
//});

app.get('/vetvegas', function(req, res){
  res.render('vetvegas.jade', { title: 'vetvegas' });
});

app.get('/vetutah', function(req, res){
  res.render('vetutah.jade', { title: 'vetutah' });
});

app.get('/vetdenver1', function(req, res){
  res.render('vetdenver1.jade', { title: 'vetdenver1' });
});

app.get('/vetdenver2', function(req, res){
  res.render('vetdenver2.jade', { title: 'vetdenver2' });
});

app.get('/vetchampaign', function(req, res){
  res.render('vetchampaign.jade', { title: 'vetchampaign' });
});

app.get('/weathervegas', function(req, res){
  res.render('weathervegas.jade', { title: 'weathervegas' });
});

app.get('/weatherutah', function(req, res){
  res.render('weatherutah.jade', { title: 'weatherutah' });
});

app.get('/weatherdenver1', function(req, res){
  res.render('weatherdenver1.jade', { title: 'weatherdenver1' });
});

app.get('/weatherdenver2', function(req, res){
  res.render('weatherdenver2.jade', { title: 'weatherdenver2' });
});

app.get('/weatherchampaign', function(req, res){
  res.render('weatherchampaign.jade', { title: 'weatherchampaign' });
});

app.get('/weatherhampton1', function(req, res){
  res.render('weatherhampton1.jade', { title: 'weatherhampton1' });
});

app.get('/weatherhampton2', function(req, res){
  res.render('weatherhampton2.jade', { title: 'weatherhampton2' });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
