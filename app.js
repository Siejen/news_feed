var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var articlesArray = [];

app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

//homepage
app.get('/', function(req, res){
  res.render('site/index');
});

//displays summary and prints all articles
app.get('/articles', function(req, res){
  	res.render('articles/article', {articles: articlesArray});
});

//form to create new article
app.get('/articles/new', function(req, res){
	res.render('articles/new');
});

//find the article in an array at a specific index
app.get('/articles/:id', function(req, res){
	var index = req.params.id;
	var taco = articlesArray[index];
	res.render('articles/show', {article: taco});
});

app.post('/articles', function(req, res){
	console.log(req.body.articles);
	articlesArray.push(req.body.articles);
	console.log(articlesArray);
	res.redirect('/articles');
});

//static page about the daily planet
app.get('/about', function(req, res){
	res.render('site/about');
});

//contact
app.get('/contact', function(req, res){
	res.render('site/contact');
});

app.listen(3000);