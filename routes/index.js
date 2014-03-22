
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Phish 2014 Summer Tour Travel' });
  //res.render('index', { title: 'Phish 2013 Fall Tour Travel' });

};